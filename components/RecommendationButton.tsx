'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useMoodStore } from '../store/moodStore';
import { Sparkles, UtensilsCrossed } from 'lucide-react';

const RecommendationButton: React.FC = () => {
  const { selectedMoods, getRecommendations, isLoading, error } = useMoodStore();

  const handleGetRecommendations = async () => {
    await getRecommendations();
  };

  const isDisabled = selectedMoods.length === 0 || isLoading;

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isDisabled}
        onClick={handleGetRecommendations}
        className={`w-full py-4 px-8 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
          isDisabled
            ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg hover:shadow-xl hover:from-primary-600 hover:to-primary-700'
        }`}
      >
        {isLoading ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
            />
            <span>Finding your perfect food...</span>
          </>
        ) : (
          <>
            <Sparkles className="w-6 h-6" />
            <span>Get Food Recommendations</span>
            <UtensilsCrossed className="w-6 h-6" />
          </>
        )}
      </motion.button>

      {/* Error Display */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm text-center"
        >
          {error}
        </motion.div>
      )}

      {/* Instructions */}
      {selectedMoods.length === 0 && (
        <div className="mt-4 text-center text-neutral-500 text-sm">
          <p>Select at least one mood to get started</p>
        </div>
      )}

      {/* Selected Moods Summary */}
      {selectedMoods.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl border border-primary-100"
        >
          <div className="text-center">
            <p className="text-sm text-neutral-600 mb-2">
              Ready to find food for:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {selectedMoods.map((mood) => (
                <span
                  key={mood.id}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${mood.color} text-white`}
                >
                  {mood.icon} {mood.name}
                </span>
              ))}
            </div>
            <p className="text-xs text-neutral-500 mt-2">
              Intensity: {selectedMoods[0]?.intensity || 5}/10
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default RecommendationButton;
