import { create } from 'zustand';
import { Mood, FoodRecommendation, UserPreferences } from '../types';

interface MoodState {
  selectedMoods: Mood[];
  moodIntensity: number;
  recommendations: FoodRecommendation[];
  userPreferences: UserPreferences | null;
  isLoading: boolean;
  error: string | null;
}

interface MoodActions {
  selectMood: (mood: Mood) => void;
  deselectMood: (moodId: string) => void;
  setMoodIntensity: (intensity: number) => void;
  clearMoods: () => void;
  setRecommendations: (recommendations: FoodRecommendation[]) => void;
  setUserPreferences: (preferences: UserPreferences) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  getRecommendations: () => Promise<void>;
}

export const useMoodStore = create<MoodState & MoodActions>((set, get) => ({
  selectedMoods: [],
  moodIntensity: 5,
  recommendations: [],
  userPreferences: null,
  isLoading: false,
  error: null,

  selectMood: (mood: Mood) => {
    const { selectedMoods } = get();
    if (selectedMoods.length < 3 && !selectedMoods.find(m => m.id === mood.id)) {
      set({ selectedMoods: [...selectedMoods, { ...mood, intensity: get().moodIntensity }] });
    }
  },

  deselectMood: (moodId: string) => {
    const { selectedMoods } = get();
    set({ selectedMoods: selectedMoods.filter(m => m.id !== moodId) });
  },

  setMoodIntensity: (intensity: number) => {
    set({ moodIntensity: intensity });
  },

  clearMoods: () => {
    set({ selectedMoods: [], recommendations: [] });
  },

  setRecommendations: (recommendations: FoodRecommendation[]) => {
    set({ recommendations });
  },

  setUserPreferences: (preferences: UserPreferences) => {
    set({ userPreferences: preferences });
  },

  setLoading: (loading: boolean) => {
    set({ isLoading: loading });
  },

  setError: (error: string | null) => {
    set({ error });
  },

  getRecommendations: async () => {
    const { selectedMoods, userPreferences } = get();
    
    if (selectedMoods.length === 0) {
      set({ error: 'Please select at least one mood' });
      return;
    }

    set({ isLoading: true, error: null });

    try {
      // Simulate API call - in real app, this would call your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock recommendations based on selected moods
      const mockRecommendations: FoodRecommendation[] = [
        {
          id: '1',
          name: 'Comforting Mac and Cheese',
          description: 'A warm, creamy comfort food perfect for when you need a pick-me-up',
          image: 'https://images.unsplash.com/photo-1543339494-b94cdb3f0b45?w=400&h=300&fit=crop',
          type: 'recipe',
          preparationTime: 25,
          difficulty: 'easy',
          dietaryTags: ['vegetarian', 'comfort'],
          moodTags: ['sad', 'stressed', 'nostalgic'],
          rating: 4.5,
          ingredients: ['Macaroni', 'Cheddar cheese', 'Milk', 'Butter', 'Flour'],
          instructions: [
            'Cook macaroni according to package directions',
            'Make cheese sauce with butter, flour, milk, and cheese',
            'Combine and bake until bubbly'
          ]
        },
        {
          id: '2',
          name: 'Energizing Smoothie Bowl',
          description: 'Fresh fruits and nuts to boost your energy and mood',
          image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
          type: 'recipe',
          preparationTime: 10,
          difficulty: 'easy',
          dietaryTags: ['vegan', 'gluten-free', 'healthy'],
          moodTags: ['energetic', 'happy', 'calm'],
          rating: 4.8,
          ingredients: ['Banana', 'Berries', 'Almond milk', 'Chia seeds', 'Granola'],
          instructions: [
            'Blend fruits with almond milk',
            'Top with granola and seeds',
            'Serve immediately'
          ]
        },
        {
          id: '3',
          name: 'Cozy Coffee Shop',
          description: 'A warm, inviting space perfect for reflection and comfort',
          image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop',
          type: 'restaurant',
          preparationTime: 0,
          difficulty: 'easy',
          dietaryTags: ['coffee', 'pastries', 'comfort'],
          moodTags: ['calm', 'nostalgic', 'romantic'],
          rating: 4.6,
          restaurantInfo: {
            name: 'The Cozy Corner',
            address: '123 Main St, Downtown',
            rating: 4.6,
            priceRange: '$$'
          }
        }
      ];

      set({ recommendations: mockRecommendations, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to fetch recommendations', isLoading: false });
    }
  },
}));
