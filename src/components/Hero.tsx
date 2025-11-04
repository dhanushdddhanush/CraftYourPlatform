import { ArrowRight, Globe, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse-slower"></div>
        </div>
      </div>

      <div className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-400/30">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">Digital Excellence</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Craft Your
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Platform
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                Your business deserves a place online — we create it. From stunning informative sites to powerful e-commerce platforms, we build digital experiences that drive results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="group relative px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:-translate-y-1"
                >
                  View Services
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8" style={{ display: 'none' }}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">200+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">98%</div>
                  <div className="text-sm text-gray-400">Satisfaction Rate</div>
                </div>
              </div>
            </div>

            <div className={`relative transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-3xl opacity-30 animate-pulse-slow"></div>

                <div className="relative bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/30">
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center animate-float">
                        <Globe className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="h-3 w-32 bg-white/30 rounded mb-2"></div>
                        <div className="h-2 w-24 bg-white/20 rounded"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer">
                        <Zap className="w-6 h-6 text-yellow-400 mb-2" />
                        <div className="h-2 w-16 bg-white/30 rounded mb-2"></div>
                        <div className="h-2 w-12 bg-white/20 rounded"></div>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer">
                        <TrendingUp className="w-6 h-6 text-green-400 mb-2" />
                        <div className="h-2 w-16 bg-white/30 rounded mb-2"></div>
                        <div className="h-2 w-12 bg-white/20 rounded"></div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="h-2 w-full bg-white/20 rounded overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded animate-progress"></div>
                      </div>
                      <div className="h-2 w-full bg-white/20 rounded overflow-hidden">
                        <div className="h-full w-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded animate-progress" style={{ animationDelay: '0.5s' }}></div>
                      </div>
                      <div className="h-2 w-full bg-white/20 rounded overflow-hidden">
                        <div className="h-full w-5/6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded animate-progress" style={{ animationDelay: '1s' }}></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                          key={i}
                          className="aspect-square bg-white/10 rounded-lg border border-white/20 animate-pulse-slow"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-scroll"></div>
        </div>
      </div>
    </div>
  );
}
