import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface HomeTestimonialsProps {
  isVisible: boolean;
  scrollY: number;
}

export default function HomeTestimonials({ isVisible, scrollY }: HomeTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Owner, Bloom Boutique',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop',
      content: 'Craft Your Platform transformed our online presence completely. Our e-commerce site is beautiful, fast, and our sales have increased by 150% in just three months!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Founder, TechStart Solutions',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop',
      content: 'The team delivered exactly what we needed - a professional website that showcases our services perfectly. Their attention to detail and SEO expertise is outstanding.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'CEO, Green Earth Organics',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop',
      content: 'Working with Craft Your Platform was a game-changer. They understood our vision and created a stunning website that truly represents our brand values.',
      rating: 5,
    },
    {
      name: 'David Thompson',
      role: 'Director, Fitness Pro',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop',
      content: 'From design to launch, the process was smooth and professional. Our new website has helped us attract more clients and establish credibility in our market.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleTransition('next');
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleTransition = (direction: 'next' | 'prev') => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      }
      setIsTransitioning(false);
    }, 300);
  };

  const nextTestimonial = () => {
    handleTransition('next');
  };

  const prevTestimonial = () => {
    handleTransition('prev');
  };

  return (
    <section id="testimonials" className="relative py-20 overflow-hidden">
      {/* Parallax Blue/Cyan Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear what our clients have to say about their experience.
          </p>
        </div>

        <div className={`relative max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Testimonial Card */}
          <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-10 border border-gray-700/50 shadow-2xl overflow-hidden">
            {/* Animated Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-cyan-500/0 animate-gradient"></div>
            
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 opacity-20">
              <Quote className="w-16 h-16 text-blue-400" />
            </div>

            {/* Content with Smooth Transition */}
            <div className={`relative z-10 transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-6 h-6 text-yellow-400 fill-current animate-pulse-slow" 
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full border-2 border-blue-500 object-cover"
                  />
                  <div className="absolute inset-0 rounded-full bg-blue-500 blur-md opacity-30 animate-pulse-slow"></div>
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-bold text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-400">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>

              {/* Testimonial Text below author */}
              <p className="text-2xl text-gray-200 text-center leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4 mt-10">
              <button
                onClick={prevTestimonial}
                disabled={isTransitioning}
                className="group relative p-4 bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm rounded-full border border-white/20 text-white hover:border-blue-500/50 hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={nextTestimonial}
                disabled={isTransitioning}
                className="group relative p-4 bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm rounded-full border border-white/20 text-white hover:border-blue-500/50 hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Dots Indicator with Glow */}
            <div className="flex justify-center space-x-4 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isTransitioning && index !== currentIndex) {
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setCurrentIndex(index);
                        setIsTransitioning(false);
                      }, 300);
                    }
                  }}
                  disabled={isTransitioning}
                  className={`relative w-3 h-3 rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? 'bg-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.2)]'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  {index === currentIndex && (
                    <div className="absolute inset-0 rounded-full bg-blue-500 blur-md opacity-60 animate-pulse-slow"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
