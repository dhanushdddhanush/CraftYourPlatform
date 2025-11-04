import { Code, Users, Rocket, Award, Target, Heart, ArrowRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface AboutProps {
  onNavigate?: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const [mounted, setMounted] = useState(false);
  const countersRef = useRef<HTMLDivElement | null>(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const el = countersRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasRevealed(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const useCountUp = (end: number, durationMs: number) => {
    const [value, setValue] = useState(0);
    useEffect(() => {
      if (!hasRevealed) return;
      let raf = 0;
      const start = performance.now();
      const animate = (now: number) => {
        const progress = Math.min(1, (now - start) / durationMs);
        setValue(Math.floor(end * progress));
        if (progress < 1) raf = requestAnimationFrame(animate);
      };
      raf = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(raf);
    }, [end, durationMs, hasRevealed]);
    return value;
  };

  const values = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'We believe every business deserves a powerful online presence that drives growth and success.',
    },
    {
      icon: Heart,
      title: 'Client Focused',
      description: 'Your success is our success. We build lasting relationships through exceptional service and results.',
    },
    {
      icon: Rocket,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive edge.',
    },
  ];

  const technologies = [
    'WordPress', 'Shopify', 'React', 'HTML/CSS/JS', 'Bootstrap', 'Node.js', 'TypeScript', 'Tailwind CSS'
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a team of passionate developers and designers dedicated to crafting exceptional digital experiences for businesses of all sizes.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 relative texture-grid">
        <div className="absolute inset-0 opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-flex items-center space-x-2 bg-blue-600/10 text-blue-700 px-4 py-2 rounded-full border border-blue-200 mb-5">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span className="text-sm font-semibold">Your Digital Partner</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                We design, build, and launch
                <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">beautiful, high‑performing websites</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                From concept to conversion, we craft modern experiences that are fast, secure, and SEO‑ready — tailored for entrepreneurs and growing brands.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  { label: 'Pixel-perfect responsive UI' },
                  { label: 'SEO-first architecture' },
                  { label: 'Performance & accessibility' },
                  { label: 'E-commerce & payments' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600"></span>
                    <span className="text-gray-700">{item.label}</span>
                  </li>
                ))}
              </ul>

              {onNavigate && (
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300"
                  >
                    Start a Project
                  </button>
                  <button
                    onClick={() => onNavigate('services')}
                    className="px-6 py-3 bg-white text-blue-700 border-2 border-blue-200 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                  >
                    Explore Services
                  </button>
                </div>
              )}
            </div>

            <div className={`relative transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-3xl p-8 shadow-2xl border border-blue-100 overflow-hidden bg-white card-3d" style={{ transformStyle: 'preserve-3d' }}>
                {/* Gradient mesh backdrop */}
                <div className="absolute inset-0">
                  <div className="absolute -top-16 -left-10 w-72 h-72 bg-blue-300/40 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-16 -right-10 w-96 h-96 bg-cyan-300/40 rounded-full blur-3xl"></div>
                </div>

                {/* Glassy feature cards */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: Code, title: 'Modern Stack', desc: 'React, TypeScript, Tailwind' },
                    { icon: Rocket, title: 'Performance', desc: 'Core Web Vitals focused' },
                    { icon: Users, title: 'UX First', desc: 'Human-centered design' },
                    { icon: Award, title: 'Quality', desc: 'Maintainable & scalable' },
                  ].map((f, i) => (
                    <div key={i} className="relative bg-white/70 backdrop-blur-md rounded-2xl p-5 border border-white/50 shadow-md hover:shadow-xl transition-all duration-300 card-3d" style={{ transformStyle: 'preserve-3d' }}>
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-3">
                        <f.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="font-semibold text-gray-900 mb-1">{f.title}</div>
                      <div className="text-sm text-gray-600">{f.desc}</div>
                    </div>
                  ))}
                </div>

                {/* Highlight banner */}
                <div className="relative z-10 mt-5 rounded-2xl p-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                  <div className="flex items-start sm:items-center sm:justify-between gap-4 flex-col sm:flex-row">
                    <div>
                      <div className="text-lg font-semibold">Launch with confidence</div>
                      <div className="text-blue-100">SEO, security, analytics and support baked in.</div>
                    </div>
                    {onNavigate && (
                      <button
                        onClick={() => onNavigate('contact')}
                        className="px-5 py-2.5 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                      >
                        Talk to Us
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${
                    mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Technology Stack</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              We build websites using industry-leading technologies and platforms, including WordPress, Shopify, and custom-coded solutions with HTML, CSS, JavaScript, Bootstrap, and React.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={tech}
                  className={`px-6 py-3 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 ${
                    mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="font-semibold text-gray-700">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center overflow-hidden mt-20">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and how we can help bring your vision to life. Get in touch today!
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
      </div>
    </div>
  );
}
