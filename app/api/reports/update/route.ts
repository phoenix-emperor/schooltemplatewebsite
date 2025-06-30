import { NextRequest, NextResponse } from "next/server";

// In a real application, this would be stored in a database
// For demo purposes, we'll simulate updating the mock data
let mockReportsData: { [key: string]: any[] } = {
  "1": [
    // Alex Thompson
    {
      id: 1,
      studentId: 1,
      term: "Fall",
      year: "2023",
      subjects: [
        {
          name: "Mathematics",
          grade: "A",
          comment:
            "Excellent work in algebra and calculus. Shows strong problem-solving skills.",
        },
        {
          name: "English Literature",
          grade: "A-",
          comment:
            "Strong analytical skills and creative writing abilities. Participates well in discussions.",
        },
        {
          name: "Physics",
          grade: "B+",
          comment:
            "Good understanding of concepts. Could improve in laboratory work.",
        },
        {
          name: "History",
          grade: "A",
          comment:
            "Outstanding research skills and historical analysis. Excellent essay writing.",
        },
        {
          name: "Computer Science",
          grade: "A+",
          comment:
            "Exceptional programming skills. Shows great initiative in projects.",
        },
      ],
      overallGrade: "A",
      attendance: 95,
      comments:
        "Alex has shown excellent academic performance this term. Demonstrates strong leadership qualities and is well-respected by peers.",
    },
  ],
};

export async function POST(request: NextRequest) {
  try {
    const { reportId, subject, grade, comment } = await request.json();

    // Validate input
    if (!reportId || !subject || !grade || !comment) {
      return NextResponse.json(
        { message: "Report ID, subject, grade, and comment are required" },
        { status: 400 }
      );
    }

    // Find the report and update the specific subject
    let reportUpdated = false;

    for (const studentId in mockReportsData) {
      const reports = mockReportsData[studentId];
      const reportIndex = reports.findIndex(
        (report: any) => String(report.id) === String(reportId)
      );

      if (reportIndex !== -1) {
        const report = reports[reportIndex];
        const subjectIndex = report.subjects.findIndex(
          (subj: any) => subj.name === subject
        );

        if (subjectIndex !== -1) {
          // Update the subject grade and comment
          report.subjects[subjectIndex].grade = grade;
          report.subjects[subjectIndex].comment = comment;
          reportUpdated = true;
          break;
        }
      }
    }

    if (!reportUpdated) {
      return NextResponse.json(
        { message: "Report or subject not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Report updated successfully",
    });
  } catch (error) {
    console.error("Error updating report:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
