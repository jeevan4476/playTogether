import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, MapPin } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const Login: React.FC = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login, loginWithGoogle, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate('/dashboard');
    } catch (err) {
      setError('Google login failed');
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${
      theme === 'light' 
        ? 'bg-light-gradient' 
        : 'bg-gradient-to-br from-gray-900 to-gray-800'
    }`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8"
      >
        <div className="text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`mx-auto w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
              theme === 'light' 
                ? 'bg-coral-gradient shadow-coral-glow' 
                : 'bg-gradient-to-r from-emerald-500 to-blue-500'
            }`}
          >
            <MapPin className="h-8 w-8 text-white" />
          </motion.div>
          <h2 className={`text-3xl font-serif font-bold ${
            theme === 'light' ? 'text-light-text-primary' : 'text-white'
          }`}>
            Welcome back
          </h2>
          <p className={`mt-2 ${
            theme === 'light' ? 'text-light-text-secondary' : 'text-gray-400'
          }`}>
            Sign in to your TurfFinder account
          </p>
        </div>
        
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mt-8 space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className={`h-5 w-5 ${
                    theme === 'light' ? 'text-light-text-muted' : 'text-gray-400'
                  }`} />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`appearance-none relative block w-full pl-10 pr-3 py-3 border rounded-lg outline-none transition-all duration-200 sm:text-sm font-display ${
                    theme === 'light'
                      ? 'border-light-border placeholder-light-text-muted text-light-text-primary bg-white focus:ring-2 focus:ring-light-primary focus:border-light-primary'
                      : 'border-gray-600 placeholder-gray-400 text-white bg-gray-700 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
                  }`}
                  placeholder="Email address"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className={`h-5 w-5 ${
                    theme === 'light' ? 'text-light-text-muted' : 'text-gray-400'
                  }`} />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`appearance-none relative block w-full pl-10 pr-10 py-3 border rounded-lg outline-none transition-all duration-200 sm:text-sm font-display ${
                    theme === 'light'
                      ? 'border-light-border placeholder-light-text-muted text-light-text-primary bg-white focus:ring-2 focus:ring-light-primary focus:border-light-primary'
                      : 'border-gray-600 placeholder-gray-400 text-white bg-gray-700 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
                  }`}
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className={`h-5 w-5 ${
                      theme === 'light' ? 'text-light-text-muted' : 'text-gray-400'
                    }`} />
                  ) : (
                    <Eye className={`h-5 w-5 ${
                      theme === 'light' ? 'text-light-text-muted' : 'text-gray-400'
                    }`} />
                  )}
                </button>
              </div>
            </div>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-sm text-center ${
                theme === 'light' ? 'text-light-error' : 'text-red-400'
              }`}
            >
              {error}
            </motion.div>
          )}

          <div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                theme === 'light'
                  ? 'bg-coral-gradient hover:shadow-coral-glow focus:ring-2 focus:ring-offset-2 focus:ring-light-primary'
                  : 'bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500'
              }`}
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
              ) : (
                'Sign in'
              )}
            </motion.button>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className={`w-full border-t ${
                  theme === 'light' ? 'border-light-border' : 'border-gray-600'
                }`} />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className={`px-2 ${
                  theme === 'light' 
                    ? 'bg-light-background text-light-text-muted' 
                    : 'bg-gray-800 text-gray-400'
                }`}>
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className={`w-full inline-flex justify-center py-3 px-4 border rounded-lg shadow-sm text-sm font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                  theme === 'light'
                    ? 'border-light-border text-light-text-secondary bg-white hover:bg-light-surface focus:ring-2 focus:ring-offset-2 focus:ring-light-primary'
                    : 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500'
                }`}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </motion.button>
            </div>
          </div>
        </motion.form>
        
        <div className="text-center">
          <p className={`text-sm ${
            theme === 'light' ? 'text-light-text-secondary' : 'text-gray-400'
          }`}>
            Don't have an account?{' '}
            <Link
              to="/register"
              className={`font-medium transition-colors ${
                theme === 'light' 
                  ? 'text-light-primary hover:text-light-secondary' 
                  : 'text-emerald-400 hover:text-emerald-300'
              }`}
            >
              Sign up here
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;