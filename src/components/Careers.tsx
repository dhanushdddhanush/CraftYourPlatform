import { Briefcase, MapPin, Clock, ArrowRight, Users, Zap, Heart, TrendingUp, Coffee, Award } from 'lucide-react';
import { useEffect, useState } from 'react';
import ResumeUploadPopup from './ResumeUploadPopup';

interface CareersProps {
  onNavigate?: (page: string) => void;
}

export default function Careers({ onNavigate }: CareersProps) {
  const [mounted, setMounted] = useState(false);
  const [isResumePopupOpen, setIsResumePopupOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const positions: Array<any> = [];

  const benefits = [
    {
      icon: Zap,
      title: 'Flexible Hours',
      description: 'Work when you are most productive',
    },
    {
      icon: MapPin,
      title: 'Remote Work',
      description: 'Work from anywhere in the world',
    },
    {
      icon: Heart,
      title: 'Health Benefits',
      description: 'Comprehensive health coverage',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Continuous learning opportunities',
    },
    {
      icon: Coffee,
      title: 'Paid Time Off',
      description: 'Generous vacation and leave policy',
    },
    {
      icon: Award,
      title: 'Competitive Pay',
      description: 'Market-leading compensation',
    },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions to stay ahead of the curve.',
    },
    {
      title: 'Collaboration',
      description: 'We believe the best work happens when talented people work together.',
    },
    {
      title: 'Excellence',
      description: 'We are committed to delivering exceptional quality in everything we do.',
    },
    {
      title: 'Growth',
      description: 'We invest in our team\'s professional development and career advancement.',
    },
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
              Join Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build the future of web development with passionate professionals who love what they do.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Why Work With Us</h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              We are more than just a workplace. We are a community of innovators, creators, and problem-solvers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${
                    mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`text-center transition-all duration-1000 ${
                    mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Open Positions</h2>
            {positions.length === 0 ? (
              <div className={`relative max-w-3xl mx-auto text-center bg-white rounded-2xl p-10 border border-gray-200 shadow-lg ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all`}>
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">No openings right now</h3>
                <p className="text-gray-600 mb-6">We don't have any active job postings at the moment. Check back soon or send us your resume — we'll reach out when there's a fit.</p>
                <button 
                  onClick={() => setIsResumePopupOpen(true)}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
                >
                  Send Resume
                </button>
              </div>
            ) : (
              <div className="space-y-6"></div>
            )}
          </div>

          <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center overflow-hidden mt-20">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative">
              <Users className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">Don't See Your Role?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                We are always looking for talented individuals. Send us your resume and let's talk about how you can contribute to our team.
              </p>
              <button 
                onClick={() => setIsResumePopupOpen(true)}
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Send General Application
              </button>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center overflow-hidden mt-20">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Team?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Even if you don't see the perfect role right now, we'd love to hear from you. Get in touch and let's explore opportunities together.
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

      {/* Resume Upload Popup */}
      <ResumeUploadPopup isOpen={isResumePopupOpen} onClose={() => setIsResumePopupOpen(false)} />
    </div>
  );
}
