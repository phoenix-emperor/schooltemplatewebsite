import { NextRequest, NextResponse } from "next/server";

// Mock user data
const mockUsers = [
  {
    id: 1,
    email: "student@school.com",
    password: "password123",
    role: "student",
    name: "Alex Thompson",
    grade: "Grade 12",
    studentId: "STU001",
  },
  {
    id: 2,
    email: "teacher@school.com",
    password: "password123",
    role: "teacher",
    name: "Dr. Sarah Johnson",
    subject: "Mathematics",
    teacherId: "TCH001",
  },
];

export async function POST(request: NextRequest) {
  try {
    const { email, password, role } = await request.json();

    // Validate input
    if (!email || !password || !role) {
      return NextResponse.json(
        { message: "Email, password, and role are required" },
        { status: 400 }
      );
    }

    // Find user
    const user = mockUsers.find(
      (u) => u.email === email && u.password === password && u.role === role
    );

    if (!user) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({
      message: "Login successful",
      user: userWithoutPassword,
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
