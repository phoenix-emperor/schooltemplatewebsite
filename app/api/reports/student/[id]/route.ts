import { NextRequest, NextResponse } from "next/server";

// Mock reports data for different students in Eduland format
const mockReportsData = {
  1: [
    // Alex Thompson
    {
      id: 1,
      name: "Alex Thompson",
      class: "Grade 12",
      term: "First Term",
      timeSchoolOpened: 180,
      timePresent: 175,
      session: "2023/2024",
      subjects: [
        {
          name: "Mathematics",
          hw: 18,
          cw: 19,
          test: 20,
          total: 57,
          grade: "A",
          teacher: "Mr. Johnson",
        },
        {
          name: "English Literature",
          hw: 17,
          cw: 18,
          test: 19,
          total: 54,
          grade: "A-",
          teacher: "Mrs. Smith",
        },
        {
          name: "Physics",
          hw: 16,
          cw: 17,
          test: 18,
          total: 51,
          grade: "B+",
          teacher: "Dr. Brown",
        },
        {
          name: "History",
          hw: 19,
          cw: 20,
          test: 19,
          total: 58,
          grade: "A",
          teacher: "Ms. Davis",
        },
        {
          name: "Computer Science",
          hw: 20,
          cw: 20,
          test: 20,
          total: 60,
          grade: "A+",
          teacher: "Mr. Wilson",
        },
      ],
      overall: {
        totalPossible: 300,
        totalScore: 280,
        percentage: 93,
        overallGrade: "A",
      },
      key: [
        { grade: "A+", meaning: "Excellent", range: "90-100%" },
        { grade: "A", meaning: "Very Good", range: "80-89%" },
        { grade: "B+", meaning: "Good", range: "70-79%" },
        { grade: "B", meaning: "Average", range: "60-69%" },
        { grade: "C", meaning: "Below Average", range: "50-59%" },
        { grade: "D", meaning: "Poor", range: "40-49%" },
        { grade: "F", meaning: "Fail", range: "0-39%" },
      ],
      generalComment:
        "Alex has shown excellent academic performance this term. Demonstrates strong leadership qualities and is well-respected by peers. Shows great initiative in all subjects and maintains high standards of work.",
      effectiveTraits: {
        behaviour: "Excellent",
        punctuality: true,
        mentalAlertness: ["Very Alert", "Quick to Learn"],
        respect: true,
        neatness: true,
        politeness: true,
        honesty: true,
        relationshipWithPeers: true,
        willingnessToLearn: true,
        spiritOfTeamwork: true,
        health: true,
      },
      classTeacher: "Mrs. Johnson",
      classTeacherSignature: "Mrs. Johnson",
      nextHalfTermBegins: "January 15, 2024",
      authorizedSignature: "Principal",
    },
  ],
  2: [
    // Maria Garcia
    {
      id: 2,
      name: "Maria Garcia",
      class: "Grade 11",
      term: "First Term",
      timeSchoolOpened: 180,
      timePresent: 165,
      session: "2023/2024",
      subjects: [
        {
          name: "Mathematics",
          hw: 15,
          cw: 16,
          test: 17,
          total: 48,
          grade: "B+",
          teacher: "Mr. Johnson",
        },
        {
          name: "English Literature",
          hw: 18,
          cw: 19,
          test: 20,
          total: 57,
          grade: "A",
          teacher: "Mrs. Smith",
        },
        {
          name: "Biology",
          hw: 17,
          cw: 18,
          test: 19,
          total: 54,
          grade: "A-",
          teacher: "Dr. Green",
        },
        {
          name: "Spanish",
          hw: 20,
          cw: 20,
          test: 20,
          total: 60,
          grade: "A+",
          teacher: "Ms. Rodriguez",
        },
      ],
      overall: {
        totalPossible: 240,
        totalScore: 219,
        percentage: 91,
        overallGrade: "A-",
      },
      key: [
        { grade: "A+", meaning: "Excellent", range: "90-100%" },
        { grade: "A", meaning: "Very Good", range: "80-89%" },
        { grade: "B+", meaning: "Good", range: "70-79%" },
        { grade: "B", meaning: "Average", range: "60-69%" },
        { grade: "C", meaning: "Below Average", range: "50-59%" },
        { grade: "D", meaning: "Poor", range: "40-49%" },
        { grade: "F", meaning: "Fail", range: "0-39%" },
      ],
      generalComment:
        "Maria is a dedicated student who shows great potential. Very creative and artistic. Has excellent language skills and shows strong interest in biological sciences.",
      effectiveTraits: {
        behaviour: "Very Good",
        punctuality: true,
        mentalAlertness: ["Alert", "Quick to Learn"],
        respect: true,
        neatness: true,
        politeness: true,
        honesty: true,
        relationshipWithPeers: true,
        willingnessToLearn: true,
        spiritOfTeamwork: true,
        health: true,
      },
      classTeacher: "Mr. Davis",
      classTeacherSignature: "Mr. Davis",
      nextHalfTermBegins: "January 15, 2024",
      authorizedSignature: "Principal",
    },
  ],
  3: [
    // James Wilson
    {
      id: 3,
      name: "James Wilson",
      class: "Grade 10",
      term: "First Term",
      timeSchoolOpened: 180,
      timePresent: 170,
      session: "2023/2024",
      subjects: [
        {
          name: "Mathematics",
          hw: 17,
          cw: 18,
          test: 19,
          total: 54,
          grade: "A-",
          teacher: "Mr. Johnson",
        },
        {
          name: "English Literature",
          hw: 16,
          cw: 17,
          test: 18,
          total: 51,
          grade: "B+",
          teacher: "Mrs. Smith",
        },
        {
          name: "Chemistry",
          hw: 18,
          cw: 19,
          test: 20,
          total: 57,
          grade: "A",
          teacher: "Dr. White",
        },
        {
          name: "Physical Education",
          hw: 20,
          cw: 20,
          test: 20,
          total: 60,
          grade: "A+",
          teacher: "Coach Miller",
        },
      ],
      overall: {
        totalPossible: 240,
        totalScore: 222,
        percentage: 93,
        overallGrade: "A-",
      },
      key: [
        { grade: "A+", meaning: "Excellent", range: "90-100%" },
        { grade: "A", meaning: "Very Good", range: "80-89%" },
        { grade: "B+", meaning: "Good", range: "70-79%" },
        { grade: "B", meaning: "Average", range: "60-69%" },
        { grade: "C", meaning: "Below Average", range: "50-59%" },
        { grade: "D", meaning: "Poor", range: "40-49%" },
        { grade: "F", meaning: "Fail", range: "0-39%" },
      ],
      generalComment:
        "James is a well-rounded student with strong athletic abilities and good academic performance. Shows excellent teamwork skills and leadership potential in sports.",
      effectiveTraits: {
        behaviour: "Very Good",
        punctuality: true,
        mentalAlertness: ["Alert", "Quick to Learn"],
        respect: true,
        neatness: true,
        politeness: true,
        honesty: true,
        relationshipWithPeers: true,
        willingnessToLearn: true,
        spiritOfTeamwork: true,
        health: true,
      },
      classTeacher: "Mrs. Brown",
      classTeacherSignature: "Mrs. Brown",
      nextHalfTermBegins: "January 15, 2024",
      authorizedSignature: "Principal",
    },
  ],
};

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const studentId = parseInt(params.id);

    if (!studentId || isNaN(studentId)) {
      return NextResponse.json(
        { message: "Invalid student ID" },
        { status: 400 }
      );
    }

    const reports =
      mockReportsData[studentId as keyof typeof mockReportsData] || [];

    return NextResponse.json({
      success: true,
      reports: reports,
    });
  } catch (error) {
    console.error("Error fetching student reports:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
