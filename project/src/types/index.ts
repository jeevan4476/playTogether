export interface Turf {
  id: string;
  name: string;
  address: string;
  price: number;
  rating: number;
  sportCategory: string;
  image: string;
  description?: string;
  amenities?: string[];
  location?: {
    lat: number;
    lng: number;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface SearchFilters {
  location: string;
  category?: string;
  priceRange?: [number, number];
  rating?: number;
}