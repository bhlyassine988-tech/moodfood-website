import { Mood } from '../types';

export const moods: Mood[] = [
  {
    id: 'happy',
    name: 'Happy',
    color: 'bg-accent-happy',
    icon: '😊',
    description: 'Feeling joyful and content'
  },
  {
    id: 'sad',
    name: 'Sad',
    color: 'bg-accent-sad',
    icon: '😢',
    description: 'Feeling down or melancholic'
  },
  {
    id: 'stressed',
    name: 'Stressed',
    color: 'bg-accent-stressed',
    icon: '😰',
    description: 'Feeling overwhelmed or anxious'
  },
  {
    id: 'energetic',
    name: 'Energetic',
    color: 'bg-accent-energetic',
    icon: '⚡',
    description: 'Feeling full of life and vigor'
  },
  {
    id: 'calm',
    name: 'Calm',
    color: 'bg-accent-calm',
    icon: '😌',
    description: 'Feeling peaceful and relaxed'
  },
  {
    id: 'anxious',
    name: 'Anxious',
    color: 'bg-accent-anxious',
    icon: '😨',
    description: 'Feeling worried or uneasy'
  },
  {
    id: 'romantic',
    name: 'Romantic',
    color: 'bg-accent-romantic',
    icon: '💕',
    description: 'Feeling loving and affectionate'
  },
  {
    id: 'nostalgic',
    name: 'Nostalgic',
    color: 'bg-accent-nostalgic',
    icon: '🕰️',
    description: 'Feeling sentimental about the past'
  },
  {
    id: 'excited',
    name: 'Excited',
    color: 'bg-accent-happy',
    icon: '🎉',
    description: 'Feeling thrilled and enthusiastic'
  },
  {
    id: 'tired',
    name: 'Tired',
    color: 'bg-accent-sad',
    icon: '😴',
    description: 'Feeling exhausted or sleepy'
  },
  {
    id: 'focused',
    name: 'Focused',
    color: 'bg-accent-energetic',
    icon: '🎯',
    description: 'Feeling concentrated and alert'
  },
  {
    id: 'creative',
    name: 'Creative',
    color: 'bg-accent-calm',
    icon: '🎨',
    description: 'Feeling inspired and imaginative'
  }
];

export const getMoodById = (id: string): Mood | undefined => {
  return moods.find(mood => mood.id === id);
};

export const getMoodsByCategory = (category: 'positive' | 'negative' | 'neutral'): Mood[] => {
  const positiveMoods = ['happy', 'energetic', 'calm', 'romantic', 'excited', 'focused', 'creative'];
  const negativeMoods = ['sad', 'stressed', 'anxious', 'tired'];
  
  switch (category) {
    case 'positive':
      return moods.filter(mood => positiveMoods.includes(mood.id));
    case 'negative':
      return moods.filter(mood => negativeMoods.includes(mood.id));
    case 'neutral':
      return moods.filter(mood => !positiveMoods.includes(mood.id) && !negativeMoods.includes(mood.id));
    default:
      return moods;
  }
};
