import { Calendar, User, ArrowRight, TrendingUp, Code, Smartphone } from 'lucide-react';
import { useEffect, useState } from 'react';

interface BlogsProps {
  onNavigate?: (page: string) => void;
}

export default function Blogs({ onNavigate }: BlogsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const blogs = [
    {
      title: '10 Essential Web Design Trends for 2025',
      excerpt: 'Discover the latest design trends that are shaping the future of web development and how to implement them in your projects.',
      author: 'Sarah Johnson',
      date: 'January 15, 2025',
      category: 'Design',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Why Every Business Needs a Mobile-First Website',
      excerpt: 'Learn why mobile-first design is no longer optional and how it can significantly impact your business success.',
      author: 'Michael Chen',
      date: 'January 12, 2025',
      category: 'Strategy',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'The Complete Guide to E-commerce SEO',
      excerpt: 'Master the art of optimizing your online store for search engines and drive more organic traffic to your products.',
      author: 'Emily Rodriguez',
      date: 'January 8, 2025',
      category: 'SEO',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'React vs WordPress: Choosing the Right Platform',
      excerpt: 'An in-depth comparison of React and WordPress to help you make the best decision for your next web project.',
      author: 'David Park',
      date: 'January 5, 2025',
      category: 'Development',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Building Scalable Web Applications: Best Practices',
      excerpt: 'Essential principles and techniques for creating web applications that can grow with your business needs.',
      author: 'Jennifer Lee',
      date: 'January 1, 2025',
      category: 'Development',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'How to Improve Your Website Performance',
      excerpt: 'Practical tips and tools to optimize your website speed and deliver exceptional user experiences.',
      author: 'Tom Anderson',
      date: 'December 28, 2024',
      category: 'Performance',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const categories = ['All', 'Design', 'Development', 'SEO', 'Strategy', 'Performance'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBlogs = selectedCategory === 'All'
    ? blogs
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights, tips, and best practices for web development, design, and digital strategy.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <article
                key={blog.title}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border border-gray-100 cursor-pointer ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blog.date}</span>
                    </div>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{blog.author}</span>
                    </div>

                    <div className="flex items-center space-x-2 text-blue-600 font-semibold group-hover:space-x-3 transition-all duration-300">
                      <span className="text-sm">Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No articles found in this category.</p>
            </div>
          )}

          <div className="mt-16 text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
              Load More Articles
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-600">Subscribe to our newsletter for the latest insights and updates.</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center overflow-hidden mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative">
          <h2 className="text-4xl font-bold text-white mb-6">Have Questions About Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our team for expert advice and a free consultation on your web development needs.
          </p>
          {onNavigate && (
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center space-x-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
