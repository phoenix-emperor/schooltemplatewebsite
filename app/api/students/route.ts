import { NextRequest, NextResponse } from "next/server";

// Mock students data
const mockStudents = [
  {
    id: 1,
    name: "Alex Thompson",
    grade: "Grade 12",
    studentId: "STU001",
    email: "alex.thompson@school.com",
  },
  {
    id: 2,
    name: "Maria Garcia",
    grade: "Grade 10",
    studentId: "STU002",
    email: "maria.garcia@school.com",
  },
  {
    id: 3,
    name: "James Wilson",
    grade: "Grade 11",
    studentId: "STU003",
    email: "james.wilson@school.com",
  },
  {
    id: 4,
    name: "Sarah Kim",
    grade: "Grade 12",
    studentId: "STU004",
    email: "sarah.kim@school.com",
  },
  {
    id: 5,
    name: "David Chen",
    grade: "Grade 9",
    studentId: "STU005",
    email: "david.chen@school.com",
  },
];

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      students: mockStudents,
    });
  } catch (error) {
    console.error("Error fetching students:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
