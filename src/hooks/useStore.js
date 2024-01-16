import { create } from "zustand";

export const useStore = create((set) => ({
  isLoading: true,
  lat: [],
  long: [],
  error: null,
  weatherData: [],
  setIsLoading: (value) => set((state) => ({ ...state, isLoading: value })),
  setLat: (value) => set((state) => ({ ...state, lat: value })),
  setLong: (value) => set((state) => ({ ...state, long: value })),
  setError: (value) => set((state) => ({ ...state, error: value })),
  setWeatherData: (value) => set((state) => ({ ...state, weatherData: value })),
}));
