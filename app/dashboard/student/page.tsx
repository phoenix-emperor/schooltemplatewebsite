"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

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

export default function StudentDashboard() {
  const [user, setUser] = useState<{ role: string } | null>(null);
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      router.push("/login");
      return;
    }
    const userObj = JSON.parse(userData);
    if (userObj.role !== "student") {
      router.push("/login");
      return;
    }
    setUser(userObj);
    fetchReports();
  }, [router]);

  const fetchReports = async () => {
    try {
      const response = await fetch("/api/reports/student");
      if (response.ok) {
        const data = await response.json();
        setReports(data.reports);
      }
    } catch (error) {
      console.error("Error fetching reports:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExportPDF = () => {
    // Create a new window with the report content
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      const report = reports[0];
      const content = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>${report.name} - Academic Report</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .header { text-align: center; margin-bottom: 30px; }
            .logo { font-size: 24px; font-weight: bold; color: #2563eb; margin-bottom: 10px; }
            .student-info { margin-bottom: 20px; }
            .student-info div { margin: 5px 0; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f8f9fa; }
            .totals { margin: 20px 0; }
            .comment { margin: 20px 0; }
            .traits { margin: 20px 0; }
            .signatures { margin-top: 40px; display: flex; justify-content: space-between; }
            @media print { body { margin: 0; } }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo">Excellence Academy</div>
            <h1>Academic Report</h1>
          </div>
          
          <div class="student-info">
            <div><strong>Student Name:</strong> ${report.name}</div>
            <div><strong>Class:</strong> ${report.class}</div>
            <div><strong>Term:</strong> ${report.term}</div>
            <div><strong>Session:</strong> ${report.session}</div>
            <div><strong>Time School Opened:</strong> ${
              report.timeSchoolOpened
            }</div>
            <div><strong>Time Present:</strong> ${report.timePresent}</div>
          </div>

          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Subjects</th>
                <th>H/W (20)</th>
                <th>C/W (20)</th>
                <th>Test (20)</th>
                <th>Total (60)</th>
                <th>Grade</th>
                <th>Teacher</th>
              </tr>
            </thead>
            <tbody>
              ${report.subjects
                .map(
                  (subj, idx) => `
                <tr>
                  <td>${idx + 1}</td>
                  <td>${subj.name}</td>
                  <td>${subj.hw}</td>
                  <td>${subj.cw}</td>
                  <td>${subj.test}</td>
                  <td>${subj.total}</td>
                  <td>${subj.grade}</td>
                  <td>${subj.teacher}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>

          <div class="totals">
            <div><strong>Overall Total:</strong> ${
              report.overall.totalPossible
            }</div>
            <div><strong>Total Score:</strong> ${
              report.overall.totalScore
            }</div>
            <div><strong>Percentage:</strong> ${
              report.overall.percentage
            }%</div>
            <div><strong>Overall Grade:</strong> ${
              report.overall.overallGrade
            }</div>
          </div>

          <div class="comment">
            <h3>General Comment:</h3>
            <p>${report.generalComment}</p>
          </div>

          <div class="traits">
            <h3>Effective Traits:</h3>
            <div><strong>Behaviour:</strong> ${
              report.effectiveTraits.behaviour
            }</div>
            <div><strong>Punctuality:</strong> ${
              report.effectiveTraits.punctuality ? "✓" : ""
            }</div>
            <div><strong>Mental Alertness:</strong> ${report.effectiveTraits.mentalAlertness.join(
              ", "
            )}</div>
            <div><strong>Respect:</strong> ${
              report.effectiveTraits.respect ? "✓" : ""
            }</div>
            <div><strong>Neatness:</strong> ${
              report.effectiveTraits.neatness ? "✓" : ""
            }</div>
            <div><strong>Politeness:</strong> ${
              report.effectiveTraits.politeness ? "✓" : ""
            }</div>
            <div><strong>Honesty:</strong> ${
              report.effectiveTraits.honesty ? "✓" : ""
            }</div>
            <div><strong>Relationship With Peers:</strong> ${
              report.effectiveTraits.relationshipWithPeers ? "✓" : ""
            }</div>
            <div><strong>Willingness To Learn:</strong> ${
              report.effectiveTraits.willingnessToLearn ? "✓" : ""
            }</div>
            <div><strong>Spirit of Teamwork:</strong> ${
              report.effectiveTraits.spiritOfTeamwork ? "✓" : ""
            }</div>
            <div><strong>Health:</strong> ${
              report.effectiveTraits.health ? "✓" : ""
            }</div>
          </div>

          <div class="signatures">
            <div>
              <strong>Class Teacher:</strong><br>
              ${report.classTeacher}<br>
              <small>${report.classTeacherSignature}</small>
            </div>
            <div>
              <strong>Principal:</strong><br>
              <small>${report.authorizedSignature}</small>
            </div>
          </div>

          <div style="margin-top: 20px;">
            <strong>Next Half Term Begins:</strong> ${report.nextHalfTermBegins}
          </div>
        </body>
        </html>
      `;
      printWindow.document.write(content);
      printWindow.document.close();
      printWindow.focus();
    }
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
                Student Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Welcome back, {user.name}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Student ID: {user.studentId}
              </span>
              <button onClick={handlePrint} className="btn-secondary">
                Print Report
              </button>
              <button onClick={handleExportPDF} className="btn-secondary">
                Export PDF
              </button>
              <button onClick={handleLogout} className="btn-primary">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-8">
        {/* Report Card */}
        <div className="card overflow-x-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
            <div>
              <h2 className="text-xl font-bold mb-1 text-gray-900 dark:text-gray-100">
                {report.name}
              </h2>
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
                <span>
                  Time School Opened: <b>{report.timeSchoolOpened}</b>
                </span>
                <span>
                  Time Present: <b>{report.timePresent}</b>
                </span>
              </div>
            </div>
          </div>

          {/* Subjects Table */}
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
                    <td className="table-cell text-center">{idx + 1}</td>
                    <td className="table-cell">{subj.name}</td>
                    <td className="table-cell text-center">{subj.hw}</td>
                    <td className="table-cell text-center">{subj.cw}</td>
                    <td className="table-cell text-center">{subj.test}</td>
                    <td className="table-cell text-center">{subj.total}</td>
                    <td className="table-cell text-center">{subj.grade}</td>
                    <td className="table-cell">{subj.teacher}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Overall Totals */}
          <div className="flex flex-wrap gap-6 mt-6 text-sm md:text-base">
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

          {/* Key */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Key:
            </h3>
            <div className="flex flex-wrap gap-4">
              {report.key.map((k) => (
                <span
                  key={k.grade}
                  className="inline-block bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs border border-gray-200 dark:border-gray-700"
                >
                  <b>{k.grade}</b> → {k.meaning} ({k.range})
                </span>
              ))}
            </div>
          </div>

          {/* General Comment */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
              General Comment:
            </h3>
            <p className="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              {report.generalComment}
            </p>
          </div>

          {/* Effective Traits */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Effective Traits:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
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
                    <b>Respect:</b> {report.effectiveTraits.respect ? "✓" : ""}
                  </div>
                  <div>
                    <b>Neatness:</b>{" "}
                    {report.effectiveTraits.neatness ? "✓" : ""}
                  </div>
                  <div>
                    <b>Politeness:</b>{" "}
                    {report.effectiveTraits.politeness ? "✓" : ""}
                  </div>
                </div>
              </div>
              <div>
                <div className="space-y-1 text-sm">
                  <div>
                    <b>Honesty:</b> {report.effectiveTraits.honesty ? "✓" : ""}
                  </div>
                  <div>
                    <b>Relationship With Peers:</b>{" "}
                    {report.effectiveTraits.relationshipWithPeers ? "✓" : ""}
                  </div>
                  <div>
                    <b>Willingness To Learn:</b>{" "}
                    {report.effectiveTraits.willingnessToLearn ? "✓" : ""}
                  </div>
                  <div>
                    <b>Spirit of Teamwork:</b>{" "}
                    {report.effectiveTraits.spiritOfTeamwork ? "✓" : ""}
                  </div>
                  <div>
                    <b>Health:</b> {report.effectiveTraits.health ? "✓" : ""}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Signatures */}
          <div className="mt-8 flex flex-col md:flex-row justify-between gap-4 border-t border-gray-200 dark:border-gray-700 pt-6">
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">
                Class Teacher:
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {report.classTeacher}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {report.classTeacherSignature}
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">
                Principal:
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {report.authorizedSignature}
              </p>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            <b>Next Half Term Begins:</b> {report.nextHalfTermBegins}
          </div>
        </div>
      </div>
    </div>
  );
}
