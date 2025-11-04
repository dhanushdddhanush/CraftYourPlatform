import { ArrowLeft, Check, Code, Globe, Search, TrendingUp, Target, Zap, Shield, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ServiceDetailProps {
  service: string;
  onBack: () => void;
}

export default function ServiceDetail({ service, onBack }: ServiceDetailProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const serviceData = {
    'website-development': {
      title: 'Website Development',
      subtitle: 'Building Digital Experiences That Drive Results',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      description: 'Our website development services cover everything from simple informative sites to complex web applications. We specialize in creating custom solutions using modern technologies that are fast, secure, and optimized for conversions.',
      features: [
        {
          title: 'Custom Design',
          description: 'Unique designs tailored to your brand identity and business goals',
          icon: Globe,
        },
        {
          title: 'Responsive Development',
          description: 'Perfect performance across all devices and screen sizes',
          icon: Zap,
        },
        {
          title: 'SEO Ready',
          description: 'Built with search engine optimization best practices from the ground up',
          icon: Search,
        },
        {
          title: 'Secure & Reliable',
          description: 'Enterprise-grade security and reliable hosting infrastructure',
          icon: Shield,
        },
      ],
      process: [
        {
          step: '01',
          title: 'Discovery & Planning',
          description: 'We start by understanding your business goals, target audience, and project requirements.',
        },
        {
          step: '02',
          title: 'Design & Prototype',
          description: 'Our designers create mockups and prototypes that align with your brand vision.',
        },
        {
          step: '03',
          title: 'Development',
          description: 'Our developers bring the designs to life with clean, efficient code.',
        },
        {
          step: '04',
          title: 'Testing & Launch',
          description: 'Rigorous testing ensures everything works perfectly before launch.',
        },
        {
          step: '05',
          title: 'Support & Maintenance',
          description: 'Ongoing support to keep your website running smoothly and up-to-date.',
        },
      ],
      technologies: [
        'React', 'WordPress', 'Shopify', 'HTML/CSS/JS', 'Bootstrap', 'Tailwind CSS', 'Node.js', 'TypeScript'
      ],
      benefits: [
        'Faster time to market with agile development',
        'Scalable solutions that grow with your business',
        'Mobile-first responsive design',
        'SEO optimization for better visibility',
        'Performance optimization for fast loading',
        'Ongoing maintenance and support',
        'Analytics integration for data-driven decisions',
        'Security best practices implementation',
      ],
    },
    'seo': {
      title: 'SEO & Optimization',
      subtitle: 'Get Found. Get Noticed. Get Results.',
      icon: Search,
      color: 'from-yellow-500 to-orange-500',
      description: 'Our comprehensive SEO services help your website rank higher in search results, drive more organic traffic, and convert visitors into customers. We use proven strategies and cutting-edge techniques to boost your online visibility.',
      features: [
        {
          title: 'Keyword Research',
          description: 'In-depth analysis to identify high-value keywords for your business',
          icon: Target,
        },
        {
          title: 'On-Page SEO',
          description: 'Optimize content, meta tags, and structure for search engines',
          icon: Code,
        },
        {
          title: 'Performance Optimization',
          description: 'Speed up your site for better rankings and user experience',
          icon: Zap,
        },
        {
          title: 'Analytics & Reporting',
          description: 'Track progress with detailed reports and actionable insights',
          icon: TrendingUp,
        },
      ],
      process: [
        {
          step: '01',
          title: 'SEO Audit',
          description: 'Comprehensive analysis of your current website performance and SEO health.',
        },
        {
          step: '02',
          title: 'Strategy Development',
          description: 'Custom SEO strategy based on your goals, industry, and competition.',
        },
        {
          step: '03',
          title: 'Implementation',
          description: 'Execute on-page and technical SEO improvements across your site.',
        },
        {
          step: '04',
          title: 'Content Optimization',
          description: 'Optimize existing content and create new SEO-focused content.',
        },
        {
          step: '05',
          title: 'Monitor & Refine',
          description: 'Continuous monitoring and refinement based on performance data.',
        },
      ],
      technologies: [
        'Google Analytics', 'Google Search Console', 'SEMrush', 'Ahrefs', 'Screaming Frog', 'GTmetrix', 'PageSpeed Insights', 'Schema Markup'
      ],
      benefits: [
        'Increased organic search traffic',
        'Higher search engine rankings',
        'Better user experience and engagement',
        'Improved site speed and performance',
        'Enhanced local search visibility',
        'Data-driven decision making',
        'Competitive advantage in your industry',
        'Long-term sustainable growth',
      ],
    },
  };

  const data = serviceData[service as keyof typeof serviceData];

  if (!data) return null;

  return (
    <div className="min-h-screen bg-white">
      <div className={`relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-32`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-white hover:text-blue-300 transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Services</span>
          </button>

          <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${data.color} rounded-2xl mb-6 shadow-2xl`}>
              <data.icon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{data.title}</h1>
            <p className="text-2xl text-gray-300 max-w-3xl">{data.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <p className="text-xl text-gray-600 leading-relaxed">{data.description}</p>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${
                    mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${data.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Process</h2>
            <div className="space-y-6">
              {data.process.map((item, index) => (
                <div
                  key={item.step}
                  className={`flex gap-6 items-start transition-all duration-1000 ${
                    mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${data.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Technologies We Use</h2>
              <div className="flex flex-wrap gap-3">
                {data.technologies.map((tech, index) => (
                  <div
                    key={tech}
                    className={`px-5 py-2.5 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                      mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <span className="font-semibold text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits</h2>
              <div className="space-y-3">
                {data.benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className={`flex items-start space-x-3 transition-all duration-1000 ${
                      mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div className={`flex-shrink-0 w-6 h-6 bg-gradient-to-br ${data.color} rounded-full flex items-center justify-center mt-0.5`}>
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`relative bg-gradient-to-r ${data.color} rounded-3xl p-12 text-center overflow-hidden`}>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create a custom solution that meets your needs.
              </p>
              <button
                onClick={onBack}
                className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
