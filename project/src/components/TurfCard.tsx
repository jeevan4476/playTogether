import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, DollarSign, Clock } from 'lucide-react';
import { Turf } from '../types';

interface TurfCardProps {
  turf: Turf;
  index: number;
}

const TurfCard: React.FC<TurfCardProps> = ({ turf, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
    >
      <div className="relative overflow-hidden">
        <img
          src={turf.image}
          alt={turf.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-emerald-500 text-white text-sm font-medium rounded-full">
            {turf.sportCategory}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded-full"
          >
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
              {turf.rating}
            </span>
          </motion.div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {turf.name}
        </h3>
        
        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{turf.address}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-emerald-600 dark:text-emerald-400">
              <DollarSign className="h-4 w-4 mr-1" />
              <span className="font-semibold">₹{turf.price}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">/hour</span>
            </div>
            
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <Clock className="h-4 w-4 mr-1" />
              <span className="text-sm">Available</span>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-200 font-medium"
          >
            Book Now
          </motion.button>
        </div>
        
        {turf.description && (
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-3 line-clamp-2">
            {turf.description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default TurfCard;