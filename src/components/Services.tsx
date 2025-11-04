import { Globe, ShoppingBag, GraduationCap, Code, Search, ArrowRight, Zap, Shield, Smartphone } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      icon: Globe,
      title: 'Informative Websites',
      description: 'Professional websites that showcase your brand, tell your story, and establish credibility with clean design and compelling content.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Custom Content'],
      color: 'from-blue-500 to-cyan-500',
      link: 'website-development',
    },
    {
      icon: ShoppingBag,
      title: 'Shopify Stores',
      description: 'Complete e-commerce solutions with secure payment processing, inventory management, and beautiful storefronts that convert visitors into customers.',
      features: ['Payment Integration', 'Product Management', 'Mobile Optimized', 'Analytics Dashboard'],
      color: 'from-green-500 to-emerald-500',
      link: 'website-development',
    },
    {
      icon: GraduationCap,
      title: 'LMS Platforms',
      description: 'Comprehensive learning management systems with course creation, student tracking, and interactive features to deliver exceptional educational experiences.',
      features: ['Course Builder', 'Progress Tracking', 'Video Integration', 'Certificates'],
      color: 'from-purple-500 to-pink-500',
      link: 'website-development',
    },
    {
      icon: Code,
      title: 'WordPress Development',
      description: 'Custom WordPress websites with powerful plugins, themes, and functionality tailored to your specific business needs and brand identity.',
      features: ['Custom Themes', 'Plugin Development', 'Easy Management', 'Scalable Solutions'],
      color: 'from-orange-500 to-red-500',
      link: 'website-development',
    },
    {
      icon: Code,
      title: 'Custom React Websites',
      description: 'High-performance, interactive web applications built with React for superior user experience, lightning-fast performance, and modern functionality.',
      features: ['Modern Stack', 'Interactive UI', 'API Integration', 'State Management'],
      color: 'from-cyan-500 to-blue-500',
      link: 'website-development',
    },
    {
      icon: Search,
      title: 'SEO & Optimization',
      description: 'Comprehensive search engine optimization to boost your rankings, increase organic traffic, and ensure your website performs at its best.',
      features: ['Keyword Research', 'On-Page SEO', 'Performance Boost', 'Analytics Setup'],
      color: 'from-yellow-500 to-orange-500',
      link: 'seo',
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed and performance',
    },
    {
      icon: Shield,
      title: 'Secure & Safe',
      description: 'Built with security best practices',
    },
    {
      icon: Smartphone,
      title: 'Mobile Ready',
      description: 'Perfect on all devices and screens',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive web solutions tailored to your business needs, from simple websites to complex web applications.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 cursor-pointer ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => onNavigate(service.link)}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-2 text-blue-600 font-semibold group-hover:space-x-4 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </div>

                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className={`text-center transition-all duration-1000 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="inline-flex w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl items-center justify-center mb-6 shadow-xl hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help bring your vision to life with a custom web solution.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center space-x-2"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
