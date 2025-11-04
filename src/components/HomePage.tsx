import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Sparkles, Code2, Palette, Target, Heart, TrendingUp, Shield, Zap, Users, Award, Briefcase, MessageCircle, BookOpen, CheckCircle } from 'lucide-react';
import HomeServices from './HomeServices';
import HomeBlog from './HomeBlog';
import HomeTestimonials from './HomeTestimonials';
import HomeContact from './HomeContact';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (id: string) => visibleSections.has(id);

  return (
    <div className="relative bg-gray-900">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden texture-mesh">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-gray-900 texture-dots"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse-slower"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400/30">
              <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
              <span className="text-blue-300 font-medium">Transform Your Digital Presence</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
              Bring Your Business Online —
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                Beautifully.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We help small businesses grow digitally with stunning websites and smart online strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button
                onClick={() => onNavigate('contact')}
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 card-3d"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <span className="relative z-10 flex items-center justify-center space-x-2" style={{ transform: 'translateZ(20px)' }}>
                  <span>Get Started</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold text-lg border-2 border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:scale-105 card-3d"
                style={{ transformStyle: 'preserve-3d' }}
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-2 h-2 bg-white rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section
        id="overview"
        ref={(el) => (sectionRefs.current['overview'] = el)}
        className="relative py-16 overflow-hidden texture-grid"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: Briefcase,
                number: '5+',
                label: 'Services We Offer',
                description: 'Complete digital solutions',
                color: 'from-blue-500 to-cyan-500',
                link: 'services',
              },
              {
                icon: Award,
                number: '6',
                label: 'Reasons to Choose Us',
                description: 'Built with passion & trust',
                color: 'from-purple-500 to-pink-500',
                link: 'home',
              },
              {
                icon: MessageCircle,
                number: '200+',
                label: 'Happy Clients',
                description: 'Success stories & reviews',
                color: 'from-green-500 to-emerald-500',
                link: 'home',
              },
              {
                icon: BookOpen,
                number: '50+',
                label: 'Blog Articles',
                description: 'Expert tips & insights',
                color: 'from-orange-500 to-red-500',
                link: 'blogs',
              },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  if (item.link === 'home') {
                    const section = index === 1 ? 'why-choose' : 'testimonials';
                    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    onNavigate(item.link);
                  }
                }}
                className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 transition-all duration-700 hover:scale-105 hover:border-blue-500/50 card-3d ${
                  isVisible('overview') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transformStyle: 'preserve-3d', transitionDelay: isVisible('overview') ? `${index * 100}ms` : '0ms' }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-300`}></div>
                
                <div className="relative z-10 text-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-1">
                    {item.label}
                  </h3>
                  
                  <p className="text-sm text-gray-400">
                    {item.description}
                  </p>

                  <div className="mt-3 text-blue-400 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More →
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={(el) => (sectionRefs.current['about'] = el)}
        className="relative py-16 overflow-hidden texture-mesh"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900 texture-dots"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Who We Are
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Craft Your Platform is your digital partner — empowering entrepreneurs to build strong, stylish, and functional websites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: 'Expert Development',
                description: 'Cutting-edge technology and modern frameworks to build fast, secure, and scalable websites.',
                delay: '0ms',
              },
              {
                icon: Palette,
                title: 'Creative Design',
                description: 'Beautiful, user-friendly designs that capture your brand essence and engage your audience.',
                delay: '200ms',
              },
              {
                icon: Sparkles,
                title: 'Digital Growth',
                description: 'Strategic SEO and marketing solutions to boost your online visibility and drive results.',
                delay: '400ms',
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 transition-all duration-1000 hover:scale-105 hover:border-blue-500/50 card-3d ${
                  isVisible('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transformStyle: 'preserve-3d', transitionDelay: isVisible('about') ? item.delay : '0ms' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* What You'll Find Section */}
          <div className={`mt-12 transition-all duration-1000 delay-400 ${isVisible('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-white mb-4">
                Everything You Need in One Place
              </h3>
              <p className="text-xl text-gray-300">
                Explore our comprehensive platform designed for your success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Briefcase,
                  title: 'Our Services',
                  items: [
                    'Website Design & Development',
                    'E-commerce Setup & Integration',
                    'SEO Optimization & Marketing',
                    'Branding & Logo Design',
                    'Maintenance & Support',
                  ],
                  color: 'from-blue-500 to-cyan-500',
                  action: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }),
                },
                {
                  icon: CheckCircle,
                  title: 'Why Choose Us',
                  items: [
                    'Your Vision, Our Mission',
                    'Built with Passion & Care',
                    'Results That Drive Growth',
                    'Trust & Transparency',
                    'Fast & Efficient Delivery',
                    'Always Here for Support',
                  ],
                  color: 'from-purple-500 to-pink-500',
                  action: () => document.getElementById('why-choose')?.scrollIntoView({ behavior: 'smooth' }),
                },
                {
                  icon: MessageCircle,
                  title: 'Client Testimonials',
                  items: [
                    'Real Success Stories',
                    '5-Star Client Reviews',
                    'Proven Track Record',
                    'Business Transformations',
                  ],
                  color: 'from-green-500 to-emerald-500',
                  action: () => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }),
                },
                {
                  icon: BookOpen,
                  title: 'Blog & Resources',
                  items: [
                    'SEO Best Practices',
                    'Business Growth Tips',
                    'E-commerce Guides',
                    'Web Design Trends',
                    'Digital Marketing Insights',
                  ],
                  color: 'from-orange-500 to-red-500',
                  action: () => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' }),
                },
              ].map((section, index) => (
                <button
                  key={index}
                  onClick={section.action}
                  className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-left transition-all duration-500 hover:scale-105 hover:border-blue-500/50"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-all duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className={`w-14 h-14 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <section.icon className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {section.title}
                      </h4>
                    </div>

                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${section.color} mt-2 mr-3 flex-shrink-0`}></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* <div className="mt-6 flex items-center text-blue-400 font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                      <span>Explore Section</span>
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div> */}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="why-choose"
        ref={(el) => (sectionRefs.current['why-choose'] = el)}
        className="relative pt-16 pb-0 overflow-hidden texture-grid"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900 texture-dots"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse-slow"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Inspirational Quote */}
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible('why-choose') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute -top-8 -left-4 text-blue-500/20 text-8xl font-serif">"</div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Your Business Deserves to Be Seen.<br />
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Let's Make It Happen Together.
                  </span>
                </h2>
                <div className="absolute -bottom-8 -right-4 text-blue-500/20 text-8xl font-serif">"</div>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed mt-8">
                In today's digital world, your online presence is your storefront. We don't just build websites — we craft experiences that turn visitors into customers and dreams into reality.
              </p>
            </div>
          </div>

          {/* Why Choose Us Cards (4 features) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: Zap,
                title: 'Fast Turnaround',
                quote: '"Quality delivered quickly — without compromise."',
                description: 'Efficient processes to launch your site fast and get you online sooner.',
                color: 'from-yellow-500 to-orange-500',
              },
              {
                icon: Palette,
                title: 'Creative Design',
                quote: '"Designs that feel modern, human, and uniquely you."',
                description: 'Stylish, user-centered visuals with clean typography and micro-interactions.',
                color: 'from-pink-500 to-violet-500',
              },
              {
                icon: TrendingUp,
                title: 'SEO-Driven',
                quote: '"Built to be discovered — optimized from day one."',
                description: 'Technical foundations and on-page structure to help you rank and grow.',
                color: 'from-green-500 to-emerald-500',
              },
              {
                icon: Shield,
                title: 'Dedicated Support',
                quote: '"We\'re with you beyond launch — every step of the way."',
                description: 'Reliable maintenance and responsive help whenever you need it.',
                color: 'from-cyan-500 to-blue-500',
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 transition-all duration-1000 hover:scale-105 hover:border-blue-500/50 card-3d ${
                  isVisible('why-choose') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transformStyle: 'preserve-3d', transitionDelay: isVisible('why-choose') ? `${index * 100}ms` : '0ms' }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-blue-300 italic text-sm mb-4 leading-relaxed">
                    {item.quote}
                  </p>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center transition-all duration-1000 delay-600 ${isVisible('why-choose') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Your Platform?
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Let\'s bring your business online beautifully — with speed, style, and results.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
              >
                <span className="flex items-center space-x-2">
                  <span>Get Started Today</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
