import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Filter } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder = "Search for turfs by location..." }) => {
  const { theme } = useTheme();
  const [query, setQuery] = useState('');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center">
          <div className="absolute left-4 flex items-center pointer-events-none">
            <MapPin className={`h-5 w-5 ${
              theme === 'light' ? 'text-light-text-muted' : 'text-gray-400'
            }`} />
          </div>
          
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className={`w-full pl-12 pr-24 py-4 text-lg border rounded-xl shadow-lg outline-none transition-all duration-200 font-display ${
              theme === 'light'
                ? 'bg-white/95 border-light-border text-light-text-primary placeholder-light-text-muted focus:ring-2 focus:ring-light-primary focus:border-light-primary shadow-light-medium focus:shadow-light-strong'
                : 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
            }`}
          />
          
          <div className="absolute right-2 flex items-center space-x-2">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              className={`p-2 transition-colors ${
                theme === 'light'
                  ? 'text-light-text-muted hover:text-light-primary'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              <Filter className="h-5 w-5" />
            </motion.button>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 text-white rounded-lg transition-all duration-200 font-medium ${
                theme === 'light'
                  ? 'bg-coral-gradient hover:shadow-coral-glow'
                  : 'bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600'
              }`}
            >
              <Search className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
        
        {/* Filters Panel */}
        {isFiltersOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`absolute top-full left-0 right-0 mt-2 p-4 rounded-xl shadow-lg border z-10 ${
              theme === 'light'
                ? 'bg-white/95 border-light-border shadow-light-strong'
                : 'bg-gray-800 border-gray-700'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className={`block text-sm font-medium mb-2 font-display ${
                  theme === 'light' ? 'text-light-text-primary' : 'text-gray-300'
                }`}>
                  Sport Category
                </label>
                <select className={`w-full p-2 border rounded-lg transition-colors ${
                  theme === 'light'
                    ? 'border-light-border bg-white text-light-text-primary focus:border-light-primary'
                    : 'border-gray-600 bg-gray-700 text-gray-100 focus:border-emerald-500'
                }`}>
                  <option value="">All Sports</option>
                  <option value="football">Football</option>
                  <option value="cricket">Cricket</option>
                  <option value="basketball">Basketball</option>
                  <option value="tennis">Tennis</option>
                </select>
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 font-display ${
                  theme === 'light' ? 'text-light-text-primary' : 'text-gray-300'
                }`}>
                  Price Range
                </label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className={`w-full p-2 border rounded-lg transition-colors ${
                      theme === 'light'
                        ? 'border-light-border bg-white text-light-text-primary focus:border-light-primary'
                        : 'border-gray-600 bg-gray-700 text-gray-100 focus:border-emerald-500'
                    }`}
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className={`w-full p-2 border rounded-lg transition-colors ${
                      theme === 'light'
                        ? 'border-light-border bg-white text-light-text-primary focus:border-light-primary'
                        : 'border-gray-600 bg-gray-700 text-gray-100 focus:border-emerald-500'
                    }`}
                  />
                </div>
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 font-display ${
                  theme === 'light' ? 'text-light-text-primary' : 'text-gray-300'
                }`}>
                  Minimum Rating
                </label>
                <select className={`w-full p-2 border rounded-lg transition-colors ${
                  theme === 'light'
                    ? 'border-light-border bg-white text-light-text-primary focus:border-light-primary'
                    : 'border-gray-600 bg-gray-700 text-gray-100 focus:border-emerald-500'
                }`}>
                  <option value="">Any Rating</option>
                  <option value="4">4+ Stars</option>
                  <option value="3">3+ Stars</option>
                  <option value="2">2+ Stars</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default SearchBar;