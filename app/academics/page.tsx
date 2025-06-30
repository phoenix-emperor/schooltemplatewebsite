export default function Academics() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Academics</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A comprehensive curriculum designed to inspire learning, foster
            critical thinking, and prepare students for future success
          </p>
        </div>
      </section>

      {/* Academic Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Academic Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our comprehensive curriculum is designed to challenge students
                intellectually while nurturing their natural curiosity and love
                for learning. We emphasize critical thinking, creativity, and
                real-world application of knowledge.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-white"
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
                  <span className="text-gray-700">
                    College-preparatory curriculum
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-white"
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
                  <span className="text-gray-700">
                    Advanced Placement (AP) courses
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-white"
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
                  <span className="text-gray-700">STEM-focused programs</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-white"
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
                  <span className="text-gray-700">
                    Arts and humanities integration
                  </span>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">
                Academic Statistics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average Class Size</span>
                  <span className="font-semibold">15 students</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Student-Teacher Ratio</span>
                  <span className="font-semibold">8:1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">AP Course Offerings</span>
                  <span className="font-semibold">15+ courses</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">College Acceptance Rate</span>
                  <span className="font-semibold">98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average SAT Score</span>
                  <span className="font-semibold">1350</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Levels */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Academic Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive programs are designed to meet the developmental
              needs of students at every stage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                Elementary School
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Kindergarten through Grade 5
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Foundation in reading, writing, and mathematics</li>
                <li>• Hands-on science and social studies</li>
                <li>• Character development and social skills</li>
                <li>• Arts, music, and physical education</li>
                <li>• Technology integration from early grades</li>
              </ul>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                Middle School
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Grades 6 through 8
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Core academic subjects with specialized teachers</li>
                <li>• Introduction to advanced mathematics and sciences</li>
                <li>• Foreign language instruction</li>
                <li>• Leadership and community service opportunities</li>
                <li>• Preparation for high school rigor</li>
              </ul>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                High School
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Grades 9 through 12
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• College-preparatory curriculum</li>
                <li>• Advanced Placement (AP) courses</li>
                <li>• Career and technical education pathways</li>
                <li>• College counseling and guidance</li>
                <li>• Extracurricular leadership opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Academic Departments
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our specialized departments provide expert instruction and
              innovative learning experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Mathematics</h3>
              <p className="text-gray-600 mb-4">
                From foundational arithmetic to advanced calculus, our
                mathematics program develops logical thinking and
                problem-solving skills.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Algebra I, II, and III</p>
                <p>• Geometry and Trigonometry</p>
                <p>• Calculus AB and BC (AP)</p>
                <p>• Statistics and Probability</p>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Sciences</h3>
              <p className="text-gray-600 mb-4">
                Hands-on laboratory experiences and inquiry-based learning in
                biology, chemistry, physics, and environmental science.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Biology and AP Biology</p>
                <p>• Chemistry and AP Chemistry</p>
                <p>• Physics and AP Physics</p>
                <p>• Environmental Science</p>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">
                English & Literature
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive language arts program focusing on reading,
                writing, critical analysis, and effective communication.
              </p>
              <div className="text-sm text-gray-500">
                <p>• English Literature (AP)</p>
                <p>• Creative Writing</p>
                <p>• Public Speaking</p>
                <p>• Journalism</p>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Social Studies</h3>
              <p className="text-gray-600 mb-4">
                Exploration of history, geography, government, and economics to
                develop global awareness and civic responsibility.
              </p>
              <div className="text-sm text-gray-500">
                <p>• World History (AP)</p>
                <p>• U.S. History (AP)</p>
                <p>• Government & Politics</p>
                <p>• Economics</p>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">World Languages</h3>
              <p className="text-gray-600 mb-4">
                Immersive language learning programs in Spanish, French, and
                Mandarin Chinese with cultural integration.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Spanish I-IV (AP)</p>
                <p>• French I-IV (AP)</p>
                <p>• Mandarin Chinese</p>
                <p>• Cultural Exchange Programs</p>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Arts & Technology</h3>
              <p className="text-gray-600 mb-4">
                Creative expression through visual arts, music, drama, and
                cutting-edge technology and computer science.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Visual Arts (AP)</p>
                <p>• Music Theory & Performance</p>
                <p>• Computer Science (AP)</p>
                <p>• Digital Media & Design</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Special Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unique opportunities that enhance learning and prepare students
              for future success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">
                Gifted & Talented Program
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized instruction for academically advanced students with
                accelerated curriculum and enrichment opportunities.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Accelerated coursework</li>
                <li>• Independent research projects</li>
                <li>• Mentorship programs</li>
                <li>• Academic competitions</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">STEM Academy</h3>
              <p className="text-gray-600 mb-4">
                Intensive focus on science, technology, engineering, and
                mathematics with hands-on projects and industry partnerships.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Robotics and coding</li>
                <li>• Engineering design challenges</li>
                <li>• Science research projects</li>
                <li>• Industry internships</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">
                International Baccalaureate
              </h3>
              <p className="text-gray-600 mb-4">
                Internationally recognized diploma program that develops
                well-rounded students with a global perspective.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• IB Diploma Programme</li>
                <li>• Theory of Knowledge</li>
                <li>• Extended Essay</li>
                <li>• Creativity, Activity, Service</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Dual Enrollment</h3>
              <p className="text-gray-600 mb-4">
                Partnership with local colleges allowing qualified students to
                earn college credits while in high school.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• College-level courses</li>
                <li>• Transferable credits</li>
                <li>• Reduced college costs</li>
                <li>• Early college experience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Support */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Academic Support Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive support to ensure every student reaches their full
              potential
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Learning Support</h3>
              <p className="text-gray-600 text-sm">
                Individualized instruction and accommodations for students with
                learning differences.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">College Counseling</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive guidance for college applications, financial aid,
                and career planning.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Tutoring Center</h3>
              <p className="text-gray-600 text-sm">
                Peer and professional tutoring services available for all
                subjects and grade levels.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
