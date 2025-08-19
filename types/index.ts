export interface Mood {
  id: string;
  name: string;
  color: string;
  icon: string;
  description: string;
  intensity?: number;
}

export interface FoodRecommendation {
  id: string;
  name: string;
  description: string;
  image: string;
  type: 'recipe' | 'restaurant' | 'snack';
  preparationTime: number;
  difficulty: 'easy' | 'medium' | 'hard';
  dietaryTags: string[];
  moodTags: string[];
  rating: number;
  ingredients?: string[];
  instructions?: string[];
  restaurantInfo?: {
    name: string;
    address: string;
    rating: number;
    priceRange: string;
  };
}

export interface UserPreferences {
  dietaryRestrictions: string[];
  allergies: string[];
  preferredCuisines: string[];
  cookingSkill: 'beginner' | 'intermediate' | 'advanced';
  maxPreparationTime: number;
  favoriteFoods: string[];
}

export interface MoodFoodMapping {
  moodId: string;
  foodIds: string[];
  reasoning: string;
  nutritionalBenefits: string[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  preferences: UserPreferences;
  favoriteMoodFoodCombos: Array<{
    moodId: string;
    foodId: string;
    rating: number;
    timestamp: Date;
  }>;
  moodHistory: Array<{
    moodId: string;
    intensity: number;
    timestamp: Date;
    foodConsumed?: string;
  }>;
}

export interface FilterOptions {
  dietaryRestrictions: string[];
  preparationTime: number[];
  difficulty: string[];
  cuisineTypes: string[];
  priceRange: string[];
}
