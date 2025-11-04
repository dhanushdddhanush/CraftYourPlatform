import { Calendar, ArrowRight } from 'lucide-react';

interface HomeBlogProps {
  isVisible: boolean;
  onNavigate: (page: string) => void;
}

export default function HomeBlog({ isVisible, onNavigate }: HomeBlogProps) {
  const blogs = [
    {
      title: '5 Reasons Every Small Business Needs a Website',
      excerpt: 'Discover why having an online presence is crucial for your business growth and customer reach in today\'s digital age.',
      date: 'March 15, 2025',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
      category: 'Business Growth',
    },
    {
      title: 'How to Grow Your Local Business with SEO',
      excerpt: 'Learn proven SEO strategies to dominate local search results and attract more customers to your business.',
      date: 'March 10, 2025',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&auto=format&fit=crop',
      category: 'SEO Tips',
    },
    {
      title: 'Simple Steps to Launch Your Product Online',
      excerpt: 'A comprehensive guide to taking your product from concept to a successful online launch with e-commerce.',
      date: 'March 5, 2025',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop',
      category: 'E-commerce',
    },
    {
      title: 'The Power of Modern Web Design',
      excerpt: 'Explore how contemporary design principles can transform your website into a powerful business tool.',
      date: 'February 28, 2025',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop',
      category: 'Design',
    },
  ];

  return (
    <section id="blog" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Expert tips, guides, and insights to help you succeed in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 transition-all duration-1000 hover:scale-105 hover:border-blue-500/50 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
              onClick={() => onNavigate('blogs')}
            >
              {/* Image with Zoom Effect */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-4 py-2 bg-blue-600/90 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                  {blog.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{blog.date}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {blog.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {blog.excerpt}
                </p>

                <div className="flex items-center text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Read More</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={() => onNavigate('blogs')}
            className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold text-lg border-2 border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:scale-105"
          >
            <span className="flex items-center space-x-2">
              <span>Read More Articles</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
