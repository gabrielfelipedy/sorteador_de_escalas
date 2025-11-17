import { create } from 'zustand';
import { Scale } from '../models/scale';

// Create the store (our "Subject")
export const useScaleObserver = create((set) => ({
  scale: new Scale('', '',[]),
  setScale: (newScale: Scale) => set({ scale: newScale }), // The "notify" function
}));''