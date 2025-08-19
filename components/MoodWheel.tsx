'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { moods } from '../data/moods';
import { useMoodStore } from '../store/moodStore';
import { Mood } from '../types';

const MoodWheel: React.FC = () => {
  const { selectedMoods, selectMood, deselectMood } = useMoodStore();

  const isMoodSelected = (moodId: string) => {
    return selectedMoods.some(mood => mood.id === moodId);
  };

  const handleMoodClick = (mood: Mood) => {
    if (isMoodSelected(mood.id)) {
      deselectMood(mood.id);
    } else {
      selectMood(mood);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-neutral-800 mb-2">
          How are you feeling today?
        </h2>
        <p className="text-neutral-600 text-lg">
          Select up to 3 moods to get personalized food recommendations
        </p>
      </div>

      <div className="relative">
        {/* Mood Wheel Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {moods.map((mood, index) => (
            <motion.div
              key={mood.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mood-wheel-item ${mood.color} ${
                  isMoodSelected(mood.id) 
                    ? 'ring-4 ring-primary-300 ring-offset-2' 
                    : ''
                }`}
                onClick={() => handleMoodClick(mood)}
              >
                <span className="text-2xl">{mood.icon}</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                className="mt-3 text-center"
              >
                <p className="font-medium text-neutral-800 text-sm">
                  {mood.name}
                </p>
                <p className="text-xs text-neutral-500 mt-1 max-w-20">
                  {mood.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Selected Moods Display */}
        {selectedMoods.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-4 bg-white rounded-2xl shadow-soft border border-neutral-100"
          >
            <h3 className="text-lg font-semibold text-neutral-800 mb-3">
              Selected Moods ({selectedMoods.length}/3)
            </h3>
            <div className="flex flex-wrap gap-3">
              {selectedMoods.map((mood) => (
                <motion.div
                  key={mood.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full ${mood.color} text-white`}
                >
                  <span className="text-sm">{mood.icon}</span>
                  <span className="text-sm font-medium">{mood.name}</span>
                  <button
                    onClick={() => deselectMood(mood.id)}
                    className="ml-2 hover:bg-white/20 rounded-full p-1 transition-colors"
                  >
                    <span className="text-xs">×</span>
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Instructions */}
        <div className="mt-8 text-center text-neutral-600">
          <p className="text-sm">
            💡 Tip: Different mood combinations can lead to unique food suggestions!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoodWheel;
