import { useState } from 'react';
import { Code2, ShoppingCart, Search, Palette, Wrench, TrendingUp } from 'lucide-react';

interface HomeServicesProps {
  isVisible: boolean;
  onNavigate: (page: string) => void;
}

export default function HomeServices({ isVisible, onNavigate }: HomeServicesProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Code2,
      title: 'Website Design',
      description: 'Beautiful, responsive websites that showcase your brand and convert visitors.',
      color: 'from-blue-500 to-cyan-500',
      page: 'website-development',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Complete store setup with secure payments, inventory, and conversion-focused UX.',
      color: 'from-blue-600 to-cyan-600',
      page: 'services',
    },
    {
      icon: Search,
      title: 'SEO',
      description: 'Rank higher and grow organic traffic with on-page, technical, and content SEO.',
      color: 'from-cyan-500 to-blue-500',
      page: 'seo',
    },
    {
      icon: Palette,
      title: 'Branding',
      description: 'Logo, color system, and visual identity that make your business memorable.',
      color: 'from-blue-400 to-cyan-400',
      page: 'services',
    },
    {
      icon: Wrench,
      title: 'Maintenance',
      description: 'Updates, monitoring, backups, and support to keep your website running smoothly.',
      color: 'from-cyan-600 to-blue-600',
      page: 'services',
    },
    {
      icon: TrendingUp,
      title: 'Marketing',
      description: 'Campaigns, analytics, and growth tactics to attract and retain customers.',
      color: 'from-indigo-500 to-violet-500',
      page: 'services',
    },
  ];

  return (
    <section id="services" className="relative py-20 overflow-hidden texture-mesh">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900 texture-dots"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to elevate your business and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className="relative h-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 transition-all duration-500 cursor-pointer card-3d"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: hoveredCard === index
                    ? 'translateY(-12px) rotateX(5deg) rotateY(5deg) translateZ(20px)'
                    : 'translateY(0) rotateX(0) rotateY(0) translateZ(0)',
                  boxShadow: hoveredCard === index
                    ? '0 25px 50px -12px rgba(59, 130, 246, 0.5), 0 0 0 1px rgba(59, 130, 246, 0.2)'
                    : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                }}
                onClick={() => onNavigate(service.page)}
              >
                {/* Glowing Border Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${service.color} blur-xl`}
                  style={{ zIndex: -1 }}
                ></div>

                {/* Card Content */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex items-center text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Learn More</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Hover Lift Effect Shadow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={() => onNavigate('services')}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
          >
            <span className="flex items-center space-x-2">
              <span>View All Services</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
