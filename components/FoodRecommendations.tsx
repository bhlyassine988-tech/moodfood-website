'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMoodStore } from '../store/moodStore';
import { FoodRecommendation } from '../types';
import { Clock, Star, ChefHat, MapPin, Heart, Share2, BookOpen } from 'lucide-react';

const FoodRecommendations: React.FC = () => {
  const { recommendations, selectedMoods } = useMoodStore();
  const [selectedFood, setSelectedFood] = useState<FoodRecommendation | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  if (recommendations.length === 0) {
    return null;
  }

  const handleFoodClick = (food: FoodRecommendation) => {
    setSelectedFood(food);
    setShowDetails(true);
  };

  const closeDetails = () => {
    setShowDetails(false);
    setSelectedFood(null);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'hard': return 'text-red-600 bg-red-100';
      default: return 'text-neutral-600 bg-neutral-100';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'recipe': return <ChefHat className="w-4 h-4" />;
      case 'restaurant': return <MapPin className="w-4 h-4" />;
      case 'snack': return <BookOpen className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-neutral-800 mb-2">
          Here's what we recommend for you
        </h2>
        <p className="text-neutral-600 text-lg">
          Based on your {selectedMoods.length > 1 ? 'moods' : 'mood'}:{' '}
          {selectedMoods.map(mood => mood.name).join(', ')}
        </p>
      </motion.div>

      {/* Recommendations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <AnimatePresence>
          {recommendations.map((food, index) => (
            <motion.div
              key={food.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="recipe-card cursor-pointer"
              onClick={() => handleFoodClick(food)}
            >
              {/* Food Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  {getTypeIcon(food.type)}
                </div>
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{food.rating}</span>
                </div>
              </div>

              {/* Food Info */}
              <div className="p-4">
                <h3 className="font-semibold text-lg text-neutral-800 mb-2 line-clamp-2">
                  {food.name}
                </h3>
                <p className="text-neutral-600 text-sm mb-3 line-clamp-2">
                  {food.description}
                </p>

                {/* Tags and Info */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <Clock className="w-4 h-4" />
                    <span>{food.preparationTime} min</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(food.difficulty)}`}>
                      {food.difficulty}
                    </span>
                  </div>

                  {/* Dietary Tags */}
                  <div className="flex flex-wrap gap-1">
                    {food.dietaryTags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {food.dietaryTags.length > 3 && (
                      <span className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full">
                        +{food.dietaryTags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Food Details Modal */}
      <AnimatePresence>
        {showDetails && selectedFood && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeDetails}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedFood.image}
                  alt={selectedFood.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={closeDetails}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                >
                  <span className="text-xl">×</span>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-neutral-800 mb-2">
                      {selectedFood.name}
                    </h2>
                    <p className="text-neutral-600">{selectedFood.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                      <Heart className="w-5 h-5 text-red-500" />
                    </button>
                    <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                      <Share2 className="w-5 h-5 text-neutral-600" />
                    </button>
                  </div>
                </div>

                {/* Food Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Clock className="w-4 h-4" />
                    <span>{selectedFood.preparationTime} minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <ChefHat className="w-4 h-4" />
                    <span className="capitalize">{selectedFood.difficulty}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>{selectedFood.rating}/5</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    {getTypeIcon(selectedFood.type)}
                    <span className="capitalize">{selectedFood.type}</span>
                  </div>
                </div>

                {/* Restaurant Info */}
                {selectedFood.restaurantInfo && (
                  <div className="bg-neutral-50 rounded-xl p-4 mb-6">
                    <h3 className="font-semibold text-neutral-800 mb-2">Restaurant Details</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Name:</strong> {selectedFood.restaurantInfo.name}</p>
                      <p><strong>Address:</strong> {selectedFood.restaurantInfo.address}</p>
                      <p><strong>Rating:</strong> {selectedFood.restaurantInfo.rating}/5</p>
                      <p><strong>Price Range:</strong> {selectedFood.restaurantInfo.priceRange}</p>
                    </div>
                  </div>
                )}

                {/* Recipe Instructions */}
                {selectedFood.ingredients && selectedFood.instructions && (
                  <>
                    <div className="mb-6">
                      <h3 className="font-semibold text-neutral-800 mb-3">Ingredients</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedFood.ingredients.map((ingredient, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                            <span>{ingredient}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold text-neutral-800 mb-3">Instructions</h3>
                      <div className="space-y-3">
                        {selectedFood.instructions.map((instruction, index) => (
                          <div key={index} className="flex gap-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium">
                              {index + 1}
                            </div>
                            <p className="text-sm text-neutral-700">{instruction}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="btn-primary flex-1">
                    {selectedFood.type === 'recipe' ? 'Start Cooking' : 'Get Directions'}
                  </button>
                  <button className="btn-secondary">
                    Save for Later
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FoodRecommendations;
