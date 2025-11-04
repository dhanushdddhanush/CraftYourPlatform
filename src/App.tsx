import { useState, useEffect } from 'react';
import { Menu, X, Code, Mail, Phone, MessageSquare } from 'lucide-react';
import HomePage from './components/HomePage';
import About from './components/About';
import Services from './components/Services';
import Blogs from './components/Blogs';
import Careers from './components/Careers';
import Contact from './components/Contact';
import ServiceDetail from './components/ServiceDetail';
import CursorTrail from './components/CursorTrail';
import QuickEnquiryPopup from './components/QuickEnquiryPopup';
import './animations.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isQuickEnquiryOpen, setIsQuickEnquiryOpen] = useState(false);

  // Lightweight client-side routing
  const pageToPath: Record<string, string> = {
    home: '/',
    about: '/about',
    services: '/services',
    blogs: '/blogs',
    careers: '/careers',
    contact: '/contact',
    'website-development': '/website-development',
    seo: '/seo',
  };
  const pathToPage: Record<string, string> = Object.keys(pageToPath).reduce((acc, page) => {
    acc[(pageToPath as any)[page]] = page;
    return acc;
  }, {} as Record<string, string>);
  const navigateTo = (page: string) => {
    setCurrentPage(page);
    const path = pageToPath[page] || '/';
    if (window.location.pathname !== path) {
      window.history.pushState({ page }, '', path);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handlePopState = () => {
      const path = window.location.pathname || '/';
      const page = pathToPage[path] || 'home';
      setCurrentPage(page);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handlePopState);
    handlePopState();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigation = [
    { name: 'Home', page: 'home' },
    { name: 'About', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Contact', page: 'contact' },
  ];

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'about':
        return <About onNavigate={navigateTo} />;
      case 'services':
        return <Services onNavigate={navigateTo} />;
      case 'blogs':
        return <Blogs onNavigate={navigateTo} />;
      case 'careers':
        return <Careers onNavigate={navigateTo} />;
      case 'contact':
        return <Contact />;
      case 'website-development':
        return <ServiceDetail service="website-development" onBack={() => setCurrentPage('services')} />;
      case 'seo':
        return <ServiceDetail service="seo" onBack={() => setCurrentPage('services')} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Custom Cursor Trail Effect */}
      <CursorTrail />
      
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center space-x-2 group"
            >
              <div className="relative">
                <Code className={`w-8 h-8 transition-colors duration-300 ${scrolled ? 'text-blue-600' : 'text-white'} group-hover:text-blue-500`} />
                <div className="absolute inset-0 bg-blue-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <span className={`text-xl font-bold transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'} group-hover:text-blue-500`}>
                Craft Your Platform
              </span>
            </button>

            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.page}
                  onClick={() => navigateTo(item.page)}
                  className={`transition-all duration-300 font-medium relative group ${
                    scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
                  } ${currentPage === item.page ? 'text-blue-600' : ''}`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full ${currentPage === item.page ? 'w-full' : ''}`}></span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg mt-4 py-4 animate-slide-down">
            {navigation.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  navigateTo(item.page);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-8 py-3 transition-colors duration-300 ${
                  currentPage === item.page ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      {renderPage()}

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/7989679464"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-40 w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-2xl hover:shadow-green-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="WhatsApp"
      >
        <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Quick Enquiry Floating Button */}
      <button
        onClick={() => setIsQuickEnquiryOpen(true)}
        className="fixed bottom-40 right-6 z-40 w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Quick Enquiry"
      >
        <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
      </button>

      {/* Quick Enquiry Popup */}
      <QuickEnquiryPopup isOpen={isQuickEnquiryOpen} onClose={() => setIsQuickEnquiryOpen(false)} />

      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        {/* Footer Background Texture & Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse-slower"></div>
        
        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white absolute right-6 bottom-6 z-20 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300"
          aria-label="Scroll to top"
          style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
        >
          <span className="relative z-10" style={{ transform: 'translateZ(20px)' }}>↑</span>
          <div className="absolute inset-0 rounded-full bg-blue-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </button>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4 group cursor-pointer">
                <div className="relative">
                  <Code className="w-6 h-6 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-blue-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                <span className="text-lg font-bold group-hover:text-blue-400 transition-colors duration-300">Craft Your Platform</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">Building digital experiences that transform businesses.</p>
              
              {/* Social Icons with Glow */}
              <div className="flex space-x-3">
                {[
                  { name: 'Twitter', icon: '𝕏', color: 'hover:bg-blue-500' },
                  { name: 'LinkedIn', icon: 'in', color: 'hover:bg-blue-600' },
                  { name: 'Instagram', icon: 'IG', color: 'hover:bg-pink-600' },
                  { name: 'Facebook', icon: 'f', color: 'hover:bg-blue-700' },
                ].map((social) => (
                  <button
                    key={social.name}
                    className={`group relative w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50`}
                    title={social.name}
                  >
                    <span className="text-xs font-bold relative z-10">{social.icon}</span>
                    <div className="absolute inset-0 bg-blue-500 rounded-lg blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginLeft: '50px' }}>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { name: 'Home', page: 'home' },
                  { name: 'About', page: 'about' },
                  { name: 'Services', page: 'services' },
                  { name: 'Contact', page: 'contact' },
                ].map((item) => (
                  <button
                    key={item.page}
                    onClick={() => navigateTo(item.page)}
                    className="block text-gray-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-300 text-sm"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <button onClick={() => navigateTo('services')} className="hover:text-blue-400 hover:translate-x-1 transition-all duration-300 cursor-pointer block text-left">Website Development</button>
                <button onClick={() => navigateTo('services')} className="hover:text-blue-400 hover:translate-x-1 transition-all duration-300 cursor-pointer block text-left">E-commerce Solutions</button>
                <button onClick={() => navigateTo('seo')} className="hover:text-blue-400 hover:translate-x-1 transition-all duration-300 cursor-pointer block text-left">SEO Optimization</button>
                <button onClick={() => navigateTo('services')} className="hover:text-blue-400 hover:translate-x-1 transition-all duration-300 cursor-pointer block text-left">Branding & Design</button>
                <button onClick={() => navigateTo('services')} className="hover:text-blue-400 hover:translate-x-1 transition-all duration-300 cursor-pointer block text-left">Maintenance & Support</button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <a href="mailto:craftyourplatform4@gmail.com" className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300 group">
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>craftyourplatform4@gmail.com</span>
                </a>
                <a href="tel:7989679464" className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300 group">
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>7989679464</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800/50 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                &copy; 2025 Craft Your Platform. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
