export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Excellence Academy
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Building futures through excellence in education since 1998
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide a comprehensive, high-quality education that empowers
                students to become confident, creative, and responsible global
                citizens. We strive to nurture each student's unique potential
                while fostering a love for learning and a commitment to
                excellence.
              </p>
            </div>

            <div className="card">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the leading educational institution that inspires
                innovation, promotes character development, and prepares
                students to thrive in an ever-changing world. We envision a
                community where every student discovers their passion and
                achieves their dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our History
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Excellence Academy has been at the forefront of educational
              innovation for over two decades
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary-600 mb-4">
                1998
              </div>
              <h3 className="text-xl font-semibold mb-2">Foundation</h3>
              <p className="text-gray-600">
                Excellence Academy was founded with a vision to provide
                exceptional education and character development to students in
                our community.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold text-primary-600 mb-4">
                2010
              </div>
              <h3 className="text-xl font-semibold mb-2">Expansion</h3>
              <p className="text-gray-600">
                Our campus expanded with state-of-the-art facilities, including
                science labs, technology centers, and sports complexes.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold text-primary-600 mb-4">
                2023
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Today, we continue to lead in educational innovation with
                cutting-edge technology integration and personalized learning
                approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do at Excellence
              Academy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">
                We strive for excellence in all aspects of education and
                personal development.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
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
              <h3 className="text-lg font-semibold mb-2">Respect</h3>
              <p className="text-gray-600 text-sm">
                We foster a culture of mutual respect, understanding, and
                appreciation for diversity.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
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
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                We embrace creativity and innovation in teaching methods and
                learning approaches.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">
                We uphold the highest standards of honesty, ethics, and moral
                character.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who guide our institution towards
              excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Dr. Sarah Johnson</h3>
              <p className="text-primary-600 mb-2">Principal</p>
              <p className="text-gray-600 text-sm">
                With over 20 years of educational leadership experience, Dr.
                Johnson leads our institution with passion and dedication to
                student success.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Mr. David Chen</h3>
              <p className="text-primary-600 mb-2">Vice Principal</p>
              <p className="text-gray-600 text-sm">
                Mr. Chen oversees academic programs and student development,
                ensuring our curriculum meets the highest educational standards.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">
                Ms. Emily Rodriguez
              </h3>
              <p className="text-primary-600 mb-2">Dean of Students</p>
              <p className="text-gray-600 text-sm">
                Ms. Rodriguez focuses on student welfare, character development,
                and creating a supportive learning environment for all students.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
