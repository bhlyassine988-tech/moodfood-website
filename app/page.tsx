'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import MoodWheel from '../components/MoodWheel';
import MoodIntensitySlider from '../components/MoodIntensitySlider';
import RecommendationButton from '../components/RecommendationButton';
import FoodRecommendations from '../components/FoodRecommendations';
import { useMoodStore } from '../store/moodStore';

export default function Home() {
  const { recommendations } = useMoodStore();

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-8 pb-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6"
            >
              Connect Your{' '}
              <span className="text-gradient">Mood</span>
              <br />
              with Perfect{' '}
              <span className="text-gradient">Food</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto"
            >
              Discover how your emotions can guide you to the perfect meal. 
              Whether you're feeling happy, stressed, or nostalgic, we'll find 
              the food that matches your mood.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>12 Moods Available</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Personalized Recommendations</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span>Recipes & Restaurants</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Demo Section - Sign In Modal */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mb-16 px-4"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">
              Try Our New Sign-In Experience
            </h2>
            <p className="text-lg text-neutral-600 mb-6">
              Experience the beautiful authentication modal that matches our MoodFood brand perfectly.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // This will be handled by the Header component
                // We'll add a global function to trigger the modal
                if (typeof window !== 'undefined' && (window as any).openSignInModal) {
                  (window as any).openSignInModal();
                }
              }}
              className="bg-gradient-to-r from-orange-400 to-pink-400 text-white font-semibold py-3 px-6 rounded-xl hover:from-orange-500 hover:to-pink-500 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              🚀 Demo Sign-In Modal
            </motion.button>
            <p className="text-sm text-neutral-500 mt-3">
              Click the Profile button in the header or use this demo button
            </p>
          </div>
        </motion.section>

        {/* Mood Selection Section */}
        <section className="mb-16">
          <MoodWheel />
        </section>

        {/* Mood Intensity Section */}
        <section className="mb-16">
          <MoodIntensitySlider />
        </section>

        {/* Get Recommendations Section */}
        <section className="mb-16">
          <RecommendationButton />
        </section>

        {/* Food Recommendations Section */}
        {recommendations.length > 0 && (
          <section>
            <FoodRecommendations />
          </section>
        )}

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 px-4"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-neutral-800 mb-4">
                Why Choose MoodFood?
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Our unique approach combines emotional intelligence with culinary expertise 
                to create a truly personalized food experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🧠',
                  title: 'Emotionally Intelligent',
                  description: 'Our algorithm understands the connection between your mood and food preferences, learning from your choices over time.'
                },
                {
                  icon: '🍽️',
                  title: 'Diverse Options',
                  description: 'From quick snacks to elaborate recipes, from home cooking to restaurant recommendations - we cover all your needs.'
                },
                {
                  icon: '🎯',
                  title: 'Personalized Experience',
                  description: 'Every recommendation is tailored to your dietary preferences, cooking skills, and current emotional state.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center p-6"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 px-4 bg-gradient-to-r from-primary-50 to-secondary-50"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">
              Ready to Transform Your Eating Experience?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Start by selecting your mood above and discover how food can enhance your emotional well-being.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="btn-primary text-lg px-8 py-4"
            >
              Start Your Mood-Food Journey
            </motion.button>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">❤️</span>
            </div>
            <h3 className="text-xl font-bold">MoodFood</h3>
          </div>
          <p className="text-neutral-400 mb-6 max-w-md mx-auto">
            Connecting emotions with food to create a more mindful and satisfying eating experience.
          </p>
          <div className="text-sm text-neutral-500">
            © 2024 MoodFood. Made with ❤️ for better emotional eating.
          </div>
        </div>
      </footer>
    </div>
  );
}
