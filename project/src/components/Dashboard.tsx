import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Star, Trophy, Clock, Users } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { theme } = useTheme();

  const stats = [
    { 
      icon: Calendar, 
      label: 'Bookings', 
      value: '12', 
      color: theme === 'light' ? 'text-light-accent' : 'text-blue-600 dark:text-blue-400' 
    },
    { 
      icon: Star, 
      label: 'Favorites', 
      value: '8', 
      color: theme === 'light' ? 'text-light-warning' : 'text-yellow-600 dark:text-yellow-400' 
    },
    { 
      icon: Trophy, 
      label: 'Matches', 
      value: '24', 
      color: theme === 'light' ? 'text-light-success' : 'text-emerald-600 dark:text-emerald-400' 
    },
    { 
      icon: Clock, 
      label: 'Hours Played', 
      value: '156', 
      color: theme === 'light' ? 'text-light-secondary' : 'text-purple-600 dark:text-purple-400' 
    },
  ];

  const recentBookings = [
    {
      id: 1,
      turfName: 'Green Field Sports Complex',
      date: '2024-01-15',
      time: '18:00 - 20:00',
      sport: 'Football',
      status: 'confirmed',
    },
    {
      id: 2,
      turfName: 'City Cricket Ground',
      date: '2024-01-12',
      time: '16:00 - 18:00',
      sport: 'Cricket',
      status: 'completed',
    },
    {
      id: 3,
      turfName: 'Elite Basketball Court',
      date: '2024-01-10',
      time: '19:00 - 21:00',
      sport: 'Basketball',
      status: 'completed',
    },
  ];

  return (
    <div className={`min-h-screen py-8 ${
      theme === 'light' ? 'bg-light-gradient' : 'bg-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 pt-16"
        >
          <h1 className={`text-3xl font-serif font-bold mb-2 ${
            theme === 'light' ? 'text-light-text-primary' : 'text-white'
          }`}>
            Welcome back, {user?.name}!
          </h1>
          <p className={`${
            theme === 'light' ? 'text-light-text-secondary' : 'text-gray-400'
          }`}>
            Here's your turf booking dashboard
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className={`rounded-xl p-6 shadow-lg ${
                theme === 'light' 
                  ? 'bg-white/90 shadow-light-medium hover:shadow-light-strong' 
                  : 'bg-gray-800 shadow-lg'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm mb-1 ${
                    theme === 'light' ? 'text-light-text-secondary' : 'text-gray-400'
                  }`}>
                    {stat.label}
                  </p>
                  <p className={`text-2xl font-bold font-display ${
                    theme === 'light' ? 'text-light-text-primary' : 'text-white'
                  }`}>
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color} ${
                  theme === 'light' 
                    ? 'bg-white shadow-light-soft' 
                    : 'bg-gray-700'
                }`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Bookings */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={`rounded-xl shadow-lg ${
              theme === 'light' 
                ? 'bg-white/90 shadow-light-medium' 
                : 'bg-gray-800'
            }`}
          >
            <div className={`p-6 border-b ${
              theme === 'light' ? 'border-light-border' : 'border-gray-700'
            }`}>
              <h2 className={`text-xl font-bold flex items-center font-display ${
                theme === 'light' ? 'text-light-text-primary' : 'text-white'
              }`}>
                <Calendar className={`h-5 w-5 mr-2 ${
                  theme === 'light' ? 'text-light-primary' : 'text-emerald-400'
                }`} />
                Recent Bookings
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentBookings.map((booking, index) => (
                  <motion.div
                    key={booking.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className={`flex items-center justify-between p-4 rounded-lg ${
                      theme === 'light' 
                        ? 'bg-light-surface shadow-light-soft' 
                        : 'bg-gray-700'
                    }`}
                  >
                    <div className="flex-1">
                      <h3 className={`font-semibold font-display ${
                        theme === 'light' ? 'text-light-text-primary' : 'text-white'
                      }`}>
                        {booking.turfName}
                      </h3>
                      <div className={`flex items-center text-sm mt-1 ${
                        theme === 'light' ? 'text-light-text-secondary' : 'text-gray-400'
                      }`}>
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{booking.sport}</span>
                        <span className="mx-2">•</span>
                        <span>{booking.date}</span>
                        <span className="mx-2">•</span>
                        <span>{booking.time}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          booking.status === 'confirmed'
                            ? theme === 'light'
                              ? 'bg-light-success/20 text-light-success'
                              : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200'
                            : theme === 'light'
                              ? 'bg-light-text-muted/20 text-light-text-muted'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200'
                        }`}
                      >
                        {booking.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={`rounded-xl shadow-lg ${
              theme === 'light' 
                ? 'bg-white/90 shadow-light-medium' 
                : 'bg-gray-800'
            }`}
          >
            <div className={`p-6 border-b ${
              theme === 'light' ? 'border-light-border' : 'border-gray-700'
            }`}>
              <h2 className={`text-xl font-bold flex items-center font-display ${
                theme === 'light' ? 'text-light-text-primary' : 'text-white'
              }`}>
                <Users className={`h-5 w-5 mr-2 ${
                  theme === 'light' ? 'text-light-accent' : 'text-blue-400'
                }`} />
                Quick Actions
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full p-4 text-white rounded-lg transition-all duration-200 font-medium ${
                    theme === 'light'
                      ? 'bg-coral-gradient hover:shadow-coral-glow'
                      : 'bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600'
                  }`}
                >
                  Find New Turfs
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full p-4 rounded-lg transition-all duration-200 font-medium ${
                    theme === 'light'
                      ? 'bg-light-surface text-light-text-primary hover:bg-white hover:shadow-light-soft'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  View All Bookings
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full p-4 rounded-lg transition-all duration-200 font-medium ${
                    theme === 'light'
                      ? 'bg-light-surface text-light-text-primary hover:bg-white hover:shadow-light-soft'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  Manage Favorites
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full p-4 rounded-lg transition-all duration-200 font-medium ${
                    theme === 'light'
                      ? 'bg-light-surface text-light-text-primary hover:bg-white hover:shadow-light-soft'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  Account Settings
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;