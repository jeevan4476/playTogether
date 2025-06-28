import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, User, LogOut, Settings, Moon, Sun } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import Interactive3DLogo from './Interactive3DLogo';

const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsProfileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? theme === 'light'
            ? 'bg-white/80 backdrop-blur-xl border-b border-light-border shadow-light-medium' 
            : 'bg-gray-900/70 backdrop-blur-xl border-b border-gray-700/30 shadow-lg shadow-black/5'
          : theme === 'light'
            ? 'bg-white/60 backdrop-blur-sm border-b border-transparent'
            : 'bg-gray-900/40 backdrop-blur-sm border-b border-transparent'
      }`}
      style={{
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'blur(8px) saturate(120%)',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'blur(8px) saturate(120%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with 3D Effect */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Interactive3DLogo isHovered={logoHovered} size={40} />
            </motion.div>
            <motion.span 
              className={`text-xl font-display font-bold transition-all duration-300 ${
                theme === 'light'
                  ? 'bg-coral-gradient bg-clip-text text-transparent drop-shadow-sm'
                  : 'bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent'
              } ${scrolled ? 'drop-shadow-sm' : ''}`}
              whileHover={{ scale: 1.02 }}
            >
              PlayTogether
            </motion.span>
          </Link>

          {/* Right side */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ 
                scale: 1.08,
                rotate: theme === 'light' ? 180 : -180,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.92 }}
              onClick={toggleTheme}
              className={`relative p-2.5 rounded-xl transition-all duration-300 group ${
                theme === 'light'
                  ? scrolled 
                    ? 'bg-white/90 hover:bg-light-surface shadow-light-soft hover:shadow-light-medium' 
                    : 'bg-white/70 hover:bg-white/90 shadow-light-soft'
                  : scrolled 
                    ? 'bg-gray-800/80 hover:bg-gray-700/80 shadow-sm' 
                    : 'bg-gray-800/60 hover:bg-gray-700/70'
              }`}
            >
              <AnimatePresence mode="wait">
                {theme === 'light' ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="h-5 w-5 text-light-text-secondary group-hover:text-light-text-primary transition-colors" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="h-5 w-5 text-yellow-500 group-hover:text-yellow-400 transition-colors drop-shadow-sm" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Auth Section */}
            {isAuthenticated ? (
              <div className="relative" ref={profileRef}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className={`flex items-center space-x-3 p-2 rounded-xl transition-all duration-300 group ${
                    theme === 'light'
                      ? 'hover:bg-white/80 hover:shadow-light-soft'
                      : 'hover:bg-gray-800/80'
                  }`}
                >
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={user?.avatar || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'}
                    alt={user?.name}
                    className={`w-8 h-8 rounded-full object-cover shadow-sm ${
                      theme === 'light'
                        ? 'ring-2 ring-light-primary/20'
                        : 'ring-2 ring-white/50 dark:ring-gray-700/50'
                    }`}
                  />
                  <span className={`hidden sm:block text-sm font-medium transition-colors ${
                    theme === 'light'
                      ? 'text-light-text-secondary group-hover:text-light-text-primary'
                      : 'text-gray-300 group-hover:text-gray-100'
                  }`}>
                    {user?.name}
                  </span>
                </motion.button>

                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className={`absolute right-0 mt-3 w-52 backdrop-blur-xl rounded-xl shadow-xl border py-2 overflow-hidden ${
                        theme === 'light'
                          ? 'bg-white/95 border-light-border shadow-light-strong'
                          : 'bg-gray-800/90 border-gray-700/30'
                      }`}
                      style={{
                        backdropFilter: 'blur(20px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                      }}
                    >
                      <div className={`px-4 py-3 border-b ${
                        theme === 'light' ? 'border-light-border' : 'border-gray-700/50'
                      }`}>
                        <p className={`text-sm font-medium ${
                          theme === 'light' ? 'text-light-text-primary' : 'text-gray-100'
                        }`}>{user?.name}</p>
                        <p className={`text-xs truncate ${
                          theme === 'light' ? 'text-light-text-muted' : 'text-gray-400'
                        }`}>{user?.email}</p>
                      </div>
                      
                      <Link
                        to="/dashboard"
                        onClick={() => setIsProfileOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 text-sm transition-colors group ${
                          theme === 'light'
                            ? 'text-light-text-secondary hover:bg-light-primary/10 hover:text-light-primary'
                            : 'text-gray-300 hover:bg-gray-700/50'
                        }`}
                      >
                        <User className="h-4 w-4 group-hover:scale-110 transition-transform" />
                        <span>Dashboard</span>
                      </Link>
                      
                      <Link
                        to="/settings"
                        onClick={() => setIsProfileOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 text-sm transition-colors group ${
                          theme === 'light'
                            ? 'text-light-text-secondary hover:bg-light-secondary/10 hover:text-light-secondary'
                            : 'text-gray-300 hover:bg-gray-700/50'
                        }`}
                      >
                        <Settings className="h-4 w-4 group-hover:scale-110 transition-transform" />
                        <span>Settings</span>
                      </Link>
                      
                      <div className={`border-t mt-1 ${
                        theme === 'light' ? 'border-light-border' : 'border-gray-700/50'
                      }`}>
                        <button
                          onClick={handleLogout}
                          className={`flex items-center space-x-3 px-4 py-3 text-sm w-full text-left transition-colors group ${
                            theme === 'light'
                              ? 'text-light-error hover:bg-light-error/10'
                              : 'text-red-400 hover:bg-red-900/20'
                          }`}
                        >
                          <LogOut className="h-4 w-4 group-hover:scale-110 transition-transform" />
                          <span>Logout</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                      theme === 'light'
                        ? 'text-light-text-secondary hover:text-light-primary hover:bg-light-primary/10'
                        : 'text-gray-300 hover:text-emerald-400 hover:bg-gray-800/40'
                    }`}
                  >
                    Login
                  </motion.button>
                </Link>
                <Link to="/register">
                  <motion.button
                    whileHover={{ 
                      scale: 1.05, 
                      y: -1,
                      boxShadow: theme === 'light' 
                        ? "0 10px 25px -5px rgba(255, 107, 107, 0.4)" 
                        : "0 10px 25px -5px rgba(16, 185, 129, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-5 py-2.5 text-sm font-medium text-white rounded-lg transition-all duration-300 ${
                      theme === 'light'
                        ? 'bg-coral-gradient hover:shadow-coral-glow'
                        : 'bg-gradient-to-r from-emerald-400 to-blue-400 hover:from-emerald-500 hover:to-blue-500 shadow-md shadow-emerald-400/20'
                    }`}
                  >
                    Sign Up
                  </motion.button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;