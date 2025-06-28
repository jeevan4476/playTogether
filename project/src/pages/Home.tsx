import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Users, Clock } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import TurfCard3D from '../components/TurfCard3D';
import ThreeBackground from '../components/ThreeBackground';
import { useTheme } from '../context/ThemeContext';
import { Turf } from '../types';

const Home: React.FC = () => {
  const { theme } = useTheme();
  const [turfs, setTurfs] = useState<Turf[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for turfs
  const mockTurfs: Turf[] = [
    {
      id: '1',
      name: 'Green Field Sports Complex',
      address: 'Sector 18, Noida, Uttar Pradesh',
      price: 1200,
      rating: 4.8,
      sportCategory: 'Football',
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Premium football turf with modern facilities and excellent drainage system.',
      amenities: ['Parking', 'Changing Rooms', 'Floodlights', 'Refreshments']
    },
    {
      id: '2',
      name: 'Elite Basketball Court',
      address: 'Koramangala, Bangalore, Karnataka',
      price: 800,
      rating: 4.6,
      sportCategory: 'Basketball',
      image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Professional basketball court with wooden flooring and modern equipment.',
      amenities: ['Air Conditioning', 'Locker Rooms', 'Scoreboard', 'Parking']
    },
    {
      id: '3',
      name: 'City Cricket Ground',
      address: 'Andheri West, Mumbai, Maharashtra',
      price: 2000,
      rating: 4.9,
      sportCategory: 'Cricket',
      image: 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Full-size cricket ground with natural grass and professional facilities.',
      amenities: ['Pavilion', 'Dressing Rooms', 'Scoreboard', 'Parking', 'Refreshments']
    },
    {
      id: '4',
      name: 'Ace Tennis Club',
      address: 'Golf Course Road, Gurgaon, Haryana',
      price: 600,
      rating: 4.7,
      sportCategory: 'Tennis',
      image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Premium tennis courts with synthetic grass and excellent lighting.',
      amenities: ['Multiple Courts', 'Equipment Rental', 'Coaching', 'Parking']
    },
    {
      id: '5',
      name: 'Champions Football Arena',
      address: 'Whitefield, Bangalore, Karnataka',
      price: 1500,
      rating: 4.5,
      sportCategory: 'Football',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Modern football turf with artificial grass and professional goal posts.',
      amenities: ['Artificial Turf', 'Floodlights', 'Changing Rooms', 'Parking']
    },
    {
      id: '6',
      name: 'Metro Badminton Center',
      address: 'Dwarka, New Delhi',
      price: 400,
      rating: 4.4,
      sportCategory: 'Badminton',
      image: 'https://images.pexels.com/photos/8007398/pexels-photo-8007398.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Air-conditioned badminton courts with wooden flooring and professional nets.',
      amenities: ['Air Conditioning', 'Equipment Rental', 'Multiple Courts', 'Parking']
    }
  ];

  useEffect(() => {
    // Simulate initial load
    setTurfs(mockTurfs);
  }, []);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setSearchQuery(query);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Filter turfs based on search query
    const filteredTurfs = mockTurfs.filter(turf =>
      turf.address.toLowerCase().includes(query.toLowerCase()) ||
      turf.name.toLowerCase().includes(query.toLowerCase()) ||
      turf.sportCategory.toLowerCase().includes(query.toLowerCase())
    );
    
    setTurfs(filteredTurfs);
    setIsLoading(false);
  };

  const stats = [
    { 
      icon: MapPin, 
      label: 'Turfs Available', 
      value: '500+', 
      color: theme === 'light' ? 'text-light-primary' : 'text-emerald-600' 
    },
    { 
      icon: Star, 
      label: 'Average Rating', 
      value: '4.7', 
      color: theme === 'light' ? 'text-light-warning' : 'text-yellow-600' 
    },
    { 
      icon: Users, 
      label: 'Happy Customers', 
      value: '10K+', 
      color: theme === 'light' ? 'text-light-accent' : 'text-blue-600' 
    },
    { 
      icon: Clock, 
      label: 'Hours Booked', 
      value: '50K+', 
      color: theme === 'light' ? 'text-light-secondary' : 'text-purple-600' 
    },
  ];

  return (
    <div className={`min-h-screen relative overflow-hidden ${
      theme === 'light' 
        ? 'bg-light-gradient' 
        : 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
    }`}>
      {/* 3D Background */}
      <ThreeBackground />
      
      {/* Hero Section with proper spacing for floating navbar */}
      <div className="relative pt-24 pb-20">
        {/* Additional background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {theme === 'light' ? (
            <>
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-light-primary/20 to-light-secondary/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-light-accent/20 to-light-success/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-light-secondary/10 to-light-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </>
          ) : (
            <>
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-purple-400/5 to-emerald-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </>
          )}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-12"
          >
            <motion.h1 
              className={`text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight ${
                theme === 'light' ? 'text-light-text-primary' : 'text-white'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Find Your Perfect{' '}
              <motion.span 
                className={theme === 'light' 
                  ? 'bg-warm-gradient bg-clip-text text-transparent' 
                  : 'bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent'
                }
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Turf
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-display ${
                theme === 'light' ? 'text-light-text-secondary' : 'text-gray-400'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Discover and book the best sports turfs in your city. From football to cricket, 
              tennis to basketball - we have it all!
            </motion.p>
            
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <SearchBar onSearch={handleSearch} />
            </motion.div>
          </motion.div>

          {/* Stats with 3D hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="text-center group perspective-1000"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl backdrop-blur-sm shadow-xl mb-4 ${stat.color} group-hover:shadow-2xl transition-all duration-300 ${
                  theme === 'light' 
                    ? 'bg-white/90 group-hover:bg-white shadow-light-medium group-hover:shadow-light-strong' 
                    : 'bg-gray-800/80 group-hover:bg-gray-800/90'
                }`}>
                  <stat.icon className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className={`text-3xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300 font-display ${
                  theme === 'light' ? 'text-light-text-primary' : 'text-white'
                }`}>
                  {stat.value}
                </div>
                <div className={`text-sm font-medium ${
                  theme === 'light' ? 'text-light-text-secondary' : 'text-gray-400'
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Turfs Section with 3D Cards */}
      <div className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-6 ${
              theme === 'light' ? 'text-light-text-primary' : 'text-white'
            }`}>
              {searchQuery ? `Results for "${searchQuery}"` : 'Popular Turfs'}
            </h2>
            <p className={`text-xl max-w-2xl mx-auto font-display ${
              theme === 'light' ? 'text-light-text-secondary' : 'text-gray-400'
            }`}>
              {searchQuery ? `Found ${turfs.length} amazing turfs` : 'Discover amazing sports facilities near you'}
            </p>
          </motion.div>

          {isLoading ? (
            <div className="flex justify-center py-20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className={`w-12 h-12 border-4 border-t-transparent rounded-full ${
                  theme === 'light' 
                    ? 'border-light-primary' 
                    : 'border-emerald-500'
                }`}
              />
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {turfs.map((turf, index) => (
                <TurfCard3D key={turf.id} turf={turf} index={index} />
              ))}
            </motion.div>
          )}

          {!isLoading && turfs.length === 0 && searchQuery && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-20"
            >
              <div className={`mb-6 ${
                theme === 'light' ? 'text-light-text-muted' : 'text-gray-400'
              }`}>
                <MapPin className="h-16 w-16 mx-auto" />
              </div>
              <h3 className={`text-2xl font-semibold mb-4 font-display ${
                theme === 'light' ? 'text-light-text-primary' : 'text-white'
              }`}>
                No turfs found
              </h3>
              <p className={`text-lg max-w-md mx-auto ${
                theme === 'light' ? 'text-light-text-secondary' : 'text-gray-400'
              }`}>
                Try searching for a different location or sport category
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;