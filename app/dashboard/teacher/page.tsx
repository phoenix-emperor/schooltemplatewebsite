"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Student {
  id: number;
  name: string;
  grade: string;
  studentId: string;
  email: string;
}

interface Subject {
  name: string;
  hw: number;
  cw: number;
  test: number;
  total: number;
  grade: string;
  teacher: string;
}

interface Report {
  id: number;
  name: string;
  class: string;
  term: string;
  timeSchoolOpened: number;
  timePresent: number;
  session: string;
  subjects: Subject[];
  overall: {
    totalPossible: number;
    totalScore: number;
    percentage: number;
    overallGrade: string;
  };
  key: { grade: string; meaning: string; range: string }[];
  generalComment: string;
  effectiveTraits: {
    behaviour: string;
    punctuality: boolean;
    mentalAlertness: string[];
    respect: boolean;
    neatness: boolean;
    politeness: boolean;
    honesty: boolean;
    relationshipWithPeers: boolean;
    willingnessToLearn: boolean;
    spiritOfTeamwork: boolean;
    health: boolean;
  };
  classTeacher: string;
  classTeacherSignature: string;
  nextHalfTermBegins: string;
  authorizedSignature: string;
}

// Define a proper TeacherUser type
interface TeacherUser {
  name: string;
  subject: string;
  teacherId: string;
  role: string;
}

export default function TeacherDashboard() {
  const [user, setUser] = useState<TeacherUser | null>(null);
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingReport, setEditingReport] = useState<Report | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      router.push("/login");
      return;
    }

    const userObj = JSON.parse(userData);
    if (userObj.role !== "teacher") {
      router.push("/login");
      return;
    }

    setUser(userObj);
    fetchStudents();
  }, [router]);

  const fetchStudents = async () => {
    try {
      const response = await fetch("/api/students");
      if (response.ok) {
        const data = await response.json();
        setStudents(data.students);
      }
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStudentReports = async (studentId: number) => {
    try {
      const response = await fetch(`/api/reports/student/${studentId}`);
      if (response.ok) {
        const data = await response.json();
        setReports(data.reports);
      }
    } catch (error) {
      console.error("Error fetching student reports:", error);
    }
  };

  const handleStudentSelect = (student: Student) => {
    setSelectedStudent(student);
    setEditingReport(null);
    fetchStudentReports(student.id);
  };

  const handleEditReport = (report: Report) => {
    setEditingReport({ ...report });
  };

  const handleCancelEdit = () => {
    setEditingReport(null);
  };

  const handleSaveReport = async () => {
    if (!editingReport) return;

    try {
      const response = await fetch("/api/reports/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          report: editingReport,
        }),
      });

      if (response.ok) {
        setShowSuccessModal(true);
        setEditingReport(null);
        // Refresh reports
        if (selectedStudent) {
          fetchStudentReports(selectedStudent.id);
        }
      }
    } catch (error) {
      console.error("Error updating report:", error);
    }
  };

  const updateSubject = (index: number, field: keyof Subject, value: any) => {
    if (!editingReport) return;
    const newSubjects = [...editingReport.subjects];
    newSubjects[index] = { ...newSubjects[index], [field]: value };

    // Recalculate total
    const subject = newSubjects[index];
    const total = subject.hw + subject.cw + subject.test;
    newSubjects[index].total = total;

    // Recalculate overall totals
    const totalScore = newSubjects.reduce((sum, subj) => sum + subj.total, 0);
    const percentage = Math.round(
      (totalScore / editingReport.overall.totalPossible) * 100
    );

    setEditingReport({
      ...editingReport,
      subjects: newSubjects,
      overall: {
        ...editingReport.overall,
        totalScore,
        percentage,
      },
    });
  };

  const updateEffectiveTrait = (
    trait: keyof Report["effectiveTraits"],
    value: any
  ) => {
    if (!editingReport) return;
    setEditingReport({
      ...editingReport,
      effectiveTraits: {
        ...editingReport.effectiveTraits,
        [trait]: value,
      },
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Loading your dashboard...
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const report = reports[0];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 shadow border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Teacher Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Welcome back, {user.name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Subject: {user.subject}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Teacher ID: {user.teacherId}
              </span>
              <button onClick={handleLogout} className="btn-primary">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Student List */}
          <div className="lg:col-span-1">
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Select Student</h2>
              <div className="space-y-2">
                {students.map((student) => (
                  <button
                    key={student.id}
                    onClick={() => handleStudentSelect(student)}
                    className={`w-full text-left p-3 rounded-lg border transition-colors ${
                      selectedStudent?.id === student.id
                        ? "border-primary-500 bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-300"
                        : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                    }`}
                  >
                    <div className="font-medium">{student.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {student.grade} • {student.studentId}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Student Report */}
          <div className="lg:col-span-2">
            {selectedStudent && report ? (
              <div className="card">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
                  <div>
                    <h2 className="text-xl font-bold mb-1">{report.name}</h2>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                      <span>
                        Class: <b>{report.class}</b>
                      </span>
                      <span>
                        Term: <b>{report.term}</b>
                      </span>
                      <span>
                        Session: <b>{report.session}</b>
                      </span>
                    </div>
                  </div>
                  {!editingReport && (
                    <button
                      onClick={() => handleEditReport(report)}
                      className="btn-primary"
                    >
                      Edit Report
                    </button>
                  )}
                </div>

                {editingReport ? (
                  <div className="space-y-6">
                    {/* Basic Info */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Time School Opened
                        </label>
                        <input
                          type="number"
                          value={editingReport.timeSchoolOpened}
                          onChange={(e) =>
                            setEditingReport({
                              ...editingReport,
                              timeSchoolOpened: Number(e.target.value) || 0,
                            })
                          }
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Time Present
                        </label>
                        <input
                          type="number"
                          value={editingReport.timePresent}
                          onChange={(e) =>
                            setEditingReport({
                              ...editingReport,
                              timePresent: Number(e.target.value) || 0,
                            })
                          }
                          className="input-field"
                        />
                      </div>
                    </div>

                    {/* Subjects Table */}
                    <div className="overflow-x-auto">
                      <table className="min-w-full border text-xs md:text-sm">
                        <thead>
                          <tr className="bg-gray-100 dark:bg-gray-800">
                            <th className="p-2 border">#</th>
                            <th className="p-2 border">Subjects</th>
                            <th className="p-2 border">H/W (20)</th>
                            <th className="p-2 border">C/W (20)</th>
                            <th className="p-2 border">Test (20)</th>
                            <th className="p-2 border">Total (60)</th>
                            <th className="p-2 border">Grade</th>
                            <th className="p-2 border">Teacher</th>
                          </tr>
                        </thead>
                        <tbody>
                          {editingReport.subjects.map((subj, idx) => (
                            <tr
                              key={subj.name}
                              className="even:bg-gray-50 dark:even:bg-gray-900"
                            >
                              <td className="p-2 border text-center">
                                {idx + 1}
                              </td>
                              <td className="p-2 border">{subj.name}</td>
                              <td className="p-2 border">
                                <input
                                  type="number"
                                  min="0"
                                  max="20"
                                  value={subj.hw}
                                  onChange={(e) =>
                                    updateSubject(
                                      idx,
                                      "hw",
                                      Number(e.target.value) || 0
                                    )
                                  }
                                  className="w-full p-1 text-center border-0 bg-transparent"
                                />
                              </td>
                              <td className="p-2 border">
                                <input
                                  type="number"
                                  min="0"
                                  max="20"
                                  value={subj.cw}
                                  onChange={(e) =>
                                    updateSubject(
                                      idx,
                                      "cw",
                                      Number(e.target.value) || 0
                                    )
                                  }
                                  className="w-full p-1 text-center border-0 bg-transparent"
                                />
                              </td>
                              <td className="p-2 border">
                                <input
                                  type="number"
                                  min="0"
                                  max="20"
                                  value={subj.test}
                                  onChange={(e) =>
                                    updateSubject(
                                      idx,
                                      "test",
                                      Number(e.target.value) || 0
                                    )
                                  }
                                  className="w-full p-1 text-center border-0 bg-transparent"
                                />
                              </td>
                              <td className="p-2 border text-center font-bold">
                                {subj.total}
                              </td>
                              <td className="p-2 border">
                                <select
                                  value={subj.grade}
                                  onChange={(e) =>
                                    updateSubject(idx, "grade", e.target.value)
                                  }
                                  className="w-full p-1 text-center border-0 bg-transparent"
                                >
                                  <option value="A">A</option>
                                  <option value="B">B</option>
                                  <option value="C">C</option>
                                  <option value="D">D</option>
                                  <option value="E">E</option>
                                  <option value="F">F</option>
                                </select>
                              </td>
                              <td className="p-2 border">
                                <input
                                  type="text"
                                  value={subj.teacher}
                                  onChange={(e) =>
                                    updateSubject(
                                      idx,
                                      "teacher",
                                      e.target.value
                                    )
                                  }
                                  className="w-full p-1 border-0 bg-transparent"
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Overall Totals */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Total Possible
                        </label>
                        <input
                          type="number"
                          value={editingReport.overall.totalPossible}
                          onChange={(e) =>
                            setEditingReport({
                              ...editingReport,
                              overall: {
                                ...editingReport.overall,
                                totalPossible: Number(e.target.value) || 0,
                              },
                            })
                          }
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Total Score
                        </label>
                        <input
                          type="number"
                          value={editingReport.overall.totalScore}
                          onChange={(e) =>
                            setEditingReport({
                              ...editingReport,
                              overall: {
                                ...editingReport.overall,
                                totalScore: Number(e.target.value) || 0,
                              },
                            })
                          }
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Percentage
                        </label>
                        <input
                          type="number"
                          value={editingReport.overall.percentage}
                          onChange={(e) =>
                            setEditingReport({
                              ...editingReport,
                              overall: {
                                ...editingReport.overall,
                                percentage: Number(e.target.value) || 0,
                              },
                            })
                          }
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Overall Grade
                        </label>
                        <select
                          value={editingReport.overall.overallGrade}
                          onChange={(e) =>
                            setEditingReport({
                              ...editingReport,
                              overall: {
                                ...editingReport.overall,
                                overallGrade: e.target.value,
                              },
                            })
                          }
                          className="input-field"
                        >
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="C">C</option>
                          <option value="D">D</option>
                          <option value="E">E</option>
                          <option value="F">F</option>
                        </select>
                      </div>
                    </div>

                    {/* General Comment */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        General Comment
                      </label>
                      <textarea
                        value={editingReport.generalComment}
                        onChange={(e) =>
                          setEditingReport({
                            ...editingReport,
                            generalComment: e.target.value,
                          })
                        }
                        rows={3}
                        className="input-field"
                      />
                    </div>

                    {/* Class Teacher Info */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Class Teacher
                        </label>
                        <input
                          type="text"
                          value={editingReport.classTeacher}
                          onChange={(e) =>
                            setEditingReport({
                              ...editingReport,
                              classTeacher: e.target.value,
                            })
                          }
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Next Half Term Begins
                        </label>
                        <input
                          type="text"
                          value={editingReport.nextHalfTermBegins}
                          onChange={(e) =>
                            setEditingReport({
                              ...editingReport,
                              nextHalfTermBegins: e.target.value,
                            })
                          }
                          className="input-field"
                        />
                      </div>
                    </div>

                    {/* Effective Traits */}
                    <div>
                      <h3 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                        Effective Traits
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Behaviour
                          </label>
                          <select
                            value={editingReport.effectiveTraits.behaviour}
                            onChange={(e) =>
                              updateEffectiveTrait("behaviour", e.target.value)
                            }
                            className="input-field"
                          >
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-medium">
                            Traits
                          </label>
                          <div className="space-y-1">
                            {Object.entries(editingReport.effectiveTraits).map(
                              ([key, value]) => {
                                if (
                                  key === "behaviour" ||
                                  key === "mentalAlertness"
                                )
                                  return null;
                                return (
                                  <label
                                    key={key}
                                    className="flex items-center"
                                  >
                                    <input
                                      type="checkbox"
                                      checked={value as boolean}
                                      onChange={(e) =>
                                        updateEffectiveTrait(
                                          key as keyof Report["effectiveTraits"],
                                          e.target.checked
                                        )
                                      }
                                      className="mr-2"
                                    />
                                    {key
                                      .replace(/([A-Z])/g, " $1")
                                      .replace(/^./, (str) =>
                                        str.toUpperCase()
                                      )}
                                  </label>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <button
                        onClick={handleSaveReport}
                        className="btn-primary"
                      >
                        Save Changes
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Display Report (Read-only) */}
                    <div className="overflow-x-auto">
                      <table className="min-w-full border text-xs md:text-sm">
                        <thead>
                          <tr className="table-header">
                            <th className="table-cell">#</th>
                            <th className="table-cell">Subjects</th>
                            <th className="table-cell">H/W (20)</th>
                            <th className="table-cell">C/W (20)</th>
                            <th className="table-cell">Test (20)</th>
                            <th className="table-cell">Total (60)</th>
                            <th className="table-cell">Grade</th>
                            <th className="table-cell">Teacher</th>
                          </tr>
                        </thead>
                        <tbody>
                          {report.subjects.map((subj, idx) => (
                            <tr key={subj.name} className="table-row">
                              <td className="table-cell text-center">
                                {idx + 1}
                              </td>
                              <td className="table-cell">{subj.name}</td>
                              <td className="table-cell text-center">
                                {subj.hw}
                              </td>
                              <td className="table-cell text-center">
                                {subj.cw}
                              </td>
                              <td className="table-cell text-center">
                                {subj.test}
                              </td>
                              <td className="table-cell text-center">
                                {subj.total}
                              </td>
                              <td className="table-cell text-center">
                                {subj.grade}
                              </td>
                              <td className="table-cell">{subj.teacher}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Overall Totals */}
                    <div className="flex flex-wrap gap-6 text-sm md:text-base">
                      <div>
                        <b>Overall Total:</b> {report.overall.totalPossible}
                      </div>
                      <div>
                        <b>Total Score:</b> {report.overall.totalScore}
                      </div>
                      <div>
                        <b>Percentage:</b> {report.overall.percentage}%
                      </div>
                      <div>
                        <b>Overall Grade:</b> {report.overall.overallGrade}
                      </div>
                    </div>

                    {/* General Comment */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                          General Comment
                        </h3>
                        <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded text-sm border border-gray-200 dark:border-gray-700">
                          {report.generalComment}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                          Effective Traits
                        </h3>
                        <div className="space-y-1 text-sm">
                          <div>
                            <b>Behaviour:</b> {report.effectiveTraits.behaviour}
                          </div>
                          <div>
                            <b>Punctuality:</b>{" "}
                            {report.effectiveTraits.punctuality ? "✓" : ""}
                          </div>
                          <div>
                            <b>Mental Alertness:</b>{" "}
                            {report.effectiveTraits.mentalAlertness.join(", ")}
                          </div>
                          <div>
                            <b>Respect:</b>{" "}
                            {report.effectiveTraits.respect ? "✓" : ""}
                          </div>
                          <div>
                            <b>Neatness:</b>{" "}
                            {report.effectiveTraits.neatness ? "✓" : ""}
                          </div>
                          <div>
                            <b>Politeness:</b>{" "}
                            {report.effectiveTraits.politeness ? "✓" : ""}
                          </div>
                          <div>
                            <b>Honesty:</b>{" "}
                            {report.effectiveTraits.honesty ? "✓" : ""}
                          </div>
                          <div>
                            <b>Relationship With Peers:</b>{" "}
                            {report.effectiveTraits.relationshipWithPeers
                              ? "✓"
                              : ""}
                          </div>
                          <div>
                            <b>Willingness To Learn:</b>{" "}
                            {report.effectiveTraits.willingnessToLearn
                              ? "✓"
                              : ""}
                          </div>
                          <div>
                            <b>Spirit of Teamwork:</b>{" "}
                            {report.effectiveTraits.spiritOfTeamwork ? "✓" : ""}
                          </div>
                          <div>
                            <b>Health:</b>{" "}
                            {report.effectiveTraits.health ? "✓" : ""}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="card">
                <div className="text-center py-8">
                  <p className="text-gray-600 dark:text-gray-300">
                    Select a student to view their reports.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 dark:text-gray-100">
              Report Updated Successfully!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The student's report has been updated with all changes.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="btn-primary"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
