'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useMoodStore } from '../store/moodStore';

const MoodIntensitySlider: React.FC = () => {
  const { moodIntensity, setMoodIntensity } = useMoodStore();

  const intensityLabels = [
    'Very Mild',
    'Mild',
    'Moderate',
    'Strong',
    'Very Strong'
  ];

  const getIntensityColor = (intensity: number) => {
    if (intensity <= 2) return 'text-green-500';
    if (intensity <= 4) return 'text-blue-500';
    if (intensity <= 6) return 'text-yellow-500';
    if (intensity <= 8) return 'text-orange-500';
    return 'text-red-500';
  };

  const getIntensityEmoji = (intensity: number) => {
    if (intensity <= 2) return '😌';
    if (intensity <= 4) return '😊';
    if (intensity <= 6) return '😐';
    if (intensity <= 8) return '😰';
    return '😱';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-soft border border-neutral-100"
    >
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-neutral-800 mb-2">
          How intense is your mood?
        </h3>
        <p className="text-neutral-600 text-sm">
          Slide to adjust the intensity level of your selected moods
        </p>
      </div>

      <div className="space-y-6">
        {/* Intensity Display */}
        <div className="text-center">
          <div className="text-4xl mb-2">
            {getIntensityEmoji(moodIntensity)}
          </div>
          <div className={`text-2xl font-bold ${getIntensityColor(moodIntensity)}`}>
            {intensityLabels[Math.floor((moodIntensity - 1) / 2)]}
          </div>
          <div className="text-sm text-neutral-500 mt-1">
            Level {moodIntensity}/10
          </div>
        </div>

        {/* Slider */}
        <div className="px-4">
          <input
            type="range"
            min="1"
            max="10"
            value={moodIntensity}
            onChange={(e) => setMoodIntensity(parseInt(e.target.value))}
            className="w-full h-3 bg-gradient-to-r from-green-200 via-blue-200 via-yellow-200 via-orange-200 to-red-200 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #bbf7d0 0%, #bfdbfe 20%, #fef3c7 40%, #fed7aa 60%, #fecaca 80%, #fca5a5 100%)`
            }}
          />
          
          {/* Slider Labels */}
          <div className="flex justify-between text-xs text-neutral-500 mt-2">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>
        </div>

        {/* Intensity Description */}
        <div className="text-center p-4 bg-neutral-50 rounded-xl">
          <p className="text-sm text-neutral-700">
            {moodIntensity <= 3 && "Your mood is gentle and manageable. Consider light, uplifting foods."}
            {moodIntensity > 3 && moodIntensity <= 6 && "Your mood is moderate. Balanced, comforting foods might help."}
            {moodIntensity > 6 && moodIntensity <= 8 && "Your mood is strong. Nourishing, grounding foods could be beneficial."}
            {moodIntensity > 8 && "Your mood is very intense. Consider calming, soothing foods and maybe some self-care."}
          </p>
        </div>

        {/* Quick Intensity Buttons */}
        <div className="flex justify-center gap-2">
          {[1, 3, 5, 7, 9].map((level) => (
            <button
              key={level}
              onClick={() => setMoodIntensity(level)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                moodIntensity === level
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MoodIntensitySlider;
