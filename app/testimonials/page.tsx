export default function Testimonials() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            What People Say
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Hear from our students, parents, and alumni about their experiences
            at Excellence Academy
          </p>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Student Testimonials
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our students share their personal experiences and growth at
              Excellence Academy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-semibold">Alex Thompson</h3>
                  <p className="text-sm text-gray-600">Grade 12 Student</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Excellence Academy has transformed my academic journey. The
                teachers are incredibly supportive and the opportunities for
                growth are endless. I've discovered my passion for science and
                leadership here."
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-semibold">Maria Garcia</h3>
                  <p className="text-sm text-gray-600">Grade 10 Student</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The school's focus on character development alongside academics
                has helped me become a more confident and responsible person. I
                love the diverse community and the innovative learning
                approaches."
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-semibold">James Wilson</h3>
                  <p className="text-sm text-gray-600">Grade 11 Student</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The technology integration and hands-on learning experiences
                have made education exciting and relevant. I feel well-prepared
                for my future career in engineering."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Parent Testimonials
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Parents share their perspectives on their children's growth and
              development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-semibold">
                    Jennifer and Michael Thompson
                  </h3>
                  <p className="text-sm text-gray-600">
                    Parents of Alex (Grade 12)
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "We've seen remarkable growth in our son since he joined
                Excellence Academy. The school's commitment to both academic
                excellence and character development has shaped him into a
                well-rounded individual. The communication with teachers and
                administration is excellent."
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-semibold">Carlos and Ana Garcia</h3>
                  <p className="text-sm text-gray-600">
                    Parents of Maria (Grade 10)
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The personalized attention and innovative teaching methods have
                made learning engaging for our daughter. We appreciate the
                school's focus on technology and preparing students for the
                future. The community is welcoming and supportive."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Alumni Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our graduates share how Excellence Academy prepared them for
              success in their careers and lives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-semibold">Dr. Sarah Kim</h3>
                  <p className="text-sm text-gray-600">
                    Class of 2015 - Medical Doctor
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Excellence Academy's rigorous science program and emphasis on
                critical thinking laid the foundation for my medical career. The
                teachers' dedication and the school's values continue to
                influence my practice today."
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-semibold">Marcus Johnson</h3>
                  <p className="text-sm text-gray-600">
                    Class of 2018 - Software Engineer
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The technology integration and coding programs at Excellence
                Academy sparked my interest in computer science. The
                problem-solving skills I developed here are essential in my
                current role at a leading tech company."
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-semibold">Lisa Chen</h3>
                  <p className="text-sm text-gray-600">
                    Class of 2017 - Environmental Scientist
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The school's focus on environmental awareness and
                sustainability inspired my career choice. The leadership
                opportunities and community service projects taught me the
                importance of making a positive impact on the world."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Success Story</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of a community that values excellence, innovation, and
            character development. Start your journey with Excellence Academy
            today.
          </p>
          <div className="space-x-4">
            <a
              href="/admissions"
              className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
            >
              Apply Now
            </a>
            <a href="/contact" className="btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
