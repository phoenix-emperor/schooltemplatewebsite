export default function News() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Events</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay updated with the latest happenings, achievements, and events at Excellence Academy
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the latest achievements, innovations, and stories from our school community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Article */}
            <div className="lg:col-span-2 card">
              <div className="h-64 bg-gray-300 rounded-lg mb-6"></div>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span>December 15, 2023</span>
                <span className="mx-2">•</span>
                <span>Academic Excellence</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Excellence Academy Students Win National Science Competition
              </h3>
              <p className="text-gray-600 mb-4">
                Our talented students secured first place in the National Science Olympiad, 
                showcasing their innovative research on renewable energy solutions. The team's 
                project focused on developing sustainable urban farming systems using advanced 
                hydroponic technology.
              </p>
              <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                Read More →
              </a>
            </div>
            
            {/* Regular Articles */}
            <div className="card">
              <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>December 10, 2023</span>
                <span className="mx-2">•</span>
                <span>Technology</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                New Robotics Lab Opens
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                State-of-the-art robotics laboratory equipped with the latest technology 
                to enhance STEM education and prepare students for future careers.
              </p>
              <a href="#" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                Read More →
              </a>
            </div>
            
            <div className="card">
              <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>December 5, 2023</span>
                <span className="mx-2">•</span>
                <span>Community</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Annual Charity Drive Success
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Students and staff raised over $25,000 for local charities, demonstrating 
                our commitment to community service and social responsibility.
              </p>
              <a href="#" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                Read More →
              </a>
            </div>
            
            <div className="card">
              <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>November 28, 2023</span>
                <span className="mx-2">•</span>
                <span>Sports</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Basketball Team Champions
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Our varsity basketball team won the regional championship, showcasing 
                teamwork, dedication, and sportsmanship throughout the season.
              </p>
              <a href="#" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                Read More →
              </a>
            </div>
            
            <div className="card">
              <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>November 20, 2023</span>
                <span className="mx-2">•</span>
                <span>Arts</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Art Exhibition Showcases Talent
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Annual student art exhibition featured over 100 pieces, highlighting 
                creativity and artistic expression across all grade levels.
              </p>
              <a href="#" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                Read More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mark your calendars for these exciting events and activities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-lg p-4 mr-4 text-center min-w-[80px]">
                  <div className="text-2xl font-bold">15</div>
                  <div className="text-sm">JAN</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Open House 2024</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Join us for our annual open house to explore our facilities, 
                    meet teachers, and learn about our programs.
                  </p>
                  <p className="text-primary-600 text-sm font-medium">9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-lg p-4 mr-4 text-center min-w-[80px]">
                  <div className="text-2xl font-bold">22</div>
                  <div className="text-sm">JAN</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Science Fair</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Students showcase their innovative science projects and research 
                    findings to the school community.
                  </p>
                  <p className="text-primary-600 text-sm font-medium">1:00 PM - 4:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-lg p-4 mr-4 text-center min-w-[80px]">
                  <div className="text-2xl font-bold">05</div>
                  <div className="text-sm">FEB</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Parent-Teacher Conference</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Scheduled meetings between parents and teachers to discuss 
                    student progress and development.
                  </p>
                  <p className="text-primary-600 text-sm font-medium">3:00 PM - 7:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-lg p-4 mr-4 text-center min-w-[80px]">
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-sm">FEB</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Career Day</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Professionals from various fields share their experiences and 
                    career insights with students.
                  </p>
                  <p className="text-primary-600 text-sm font-medium">10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-lg p-4 mr-4 text-center min-w-[80px]">
                  <div className="text-2xl font-bold">20</div>
                  <div className="text-sm">FEB</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Spring Concert</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Musical performances by our talented students showcasing 
                    their artistic abilities and creativity.
                  </p>
                  <p className="text-primary-600 text-sm font-medium">7:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-lg p-4 mr-4 text-center min-w-[80px]">
                  <div className="text-2xl font-bold">28</div>
                  <div className="text-sm">FEB</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Sports Tournament</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Annual inter-school sports competition featuring basketball, 
                    soccer, and track events.
                  </p>
                  <p className="text-primary-600 text-sm font-medium">9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Connected
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news, events, and updates 
            from Excellence Academy directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 