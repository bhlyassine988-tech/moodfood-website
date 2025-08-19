# MoodFood - Eat What You Feel 🍽️❤️

> Connect your emotions with personalized food recommendations to improve your mood and overall well-being through mindful eating.

## 🌟 About

MoodFood is an innovative web application that bridges the gap between emotional well-being and food choices. By understanding your current mood and emotional state, we provide personalized food recommendations that can enhance your emotional experience and promote mindful eating habits.

## ✨ Features

### 🎭 Mood-Based Selection
- **Interactive Mood Wheel**: Choose from 12 different moods (Happy, Sad, Stressed, Energetic, Calm, Anxious, Romantic, Nostalgic, and more)
- **Multi-Mood Selection**: Select up to 3 moods simultaneously for complex emotional states
- **Mood Intensity Slider**: Specify how strongly you're feeling (1-10 scale)
- **Visual Feedback**: Beautiful, intuitive interface with smooth animations

### 🍽️ Smart Food Recommendations
- **Personalized Suggestions**: AI-powered recommendations based on your mood and preferences
- **Multiple Food Types**: Recipes, restaurant suggestions, and quick snack ideas
- **Dietary Accommodations**: Support for various dietary restrictions and preferences
- **Preparation Time Filtering**: Quick meals to elaborate recipes based on your time availability

### 🎨 Beautiful User Experience
- **Modern Design**: Clean, minimalist interface with thoughtful UX
- **Responsive Layout**: Optimized for all devices (mobile-first approach)
- **Smooth Animations**: Framer Motion powered interactions
- **Accessibility**: WCAG 2.1 AA compliant design

### 🔄 Learning & Personalization
- **User Preferences**: Save dietary restrictions, allergies, and cuisine preferences
- **Learning Algorithm**: Recommendations improve based on your choices and ratings
- **Favorites System**: Save preferred mood-food combinations
- **Progress Tracking**: Monitor your mood-food journey over time

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/moodfood.git
   cd moodfood
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Development Tools
- **Linting**: ESLint with TypeScript support
- **Code Formatting**: Prettier (recommended)
- **Type Checking**: TypeScript compiler

## 📱 Usage

### 1. Select Your Mood
- Choose from the interactive mood wheel
- Select up to 3 moods that describe your current emotional state
- Adjust the intensity slider to specify how strongly you're feeling

### 2. Get Recommendations
- Click "Get Food Recommendations" to receive personalized suggestions
- Browse through recipes, restaurant options, and snack ideas
- Filter by dietary preferences and preparation time

### 3. Explore & Save
- Click on any recommendation to see detailed information
- View ingredients, instructions, and nutritional benefits
- Save your favorites for future reference

## 🎯 Core User Flows

### Primary Flow
1. **Mood Selection** → User identifies their emotional state
2. **Intensity Setting** → User specifies mood strength
3. **Recommendation Generation** → System provides personalized food suggestions
4. **Food Exploration** → User browses and selects options
5. **Action Taking** → User cooks, orders, or saves recommendations

### Secondary Flows
- **Discovery**: Browse foods by mood category
- **Learning**: Track mood-food correlations over time
- **Social**: Share favorite combinations with friends
- **Planning**: Create mood-based meal plans

## 🏗️ Project Structure

```
moodfood/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── components/             # React components
│   ├── Header.tsx         # Navigation header
│   ├── MoodWheel.tsx      # Interactive mood selection
│   ├── MoodIntensitySlider.tsx # Mood intensity control
│   ├── RecommendationButton.tsx # Trigger recommendations
│   └── FoodRecommendations.tsx # Display food suggestions
├── store/                  # State management
│   └── moodStore.ts       # Zustand store for mood state
├── types/                  # TypeScript type definitions
│   └── index.ts           # Interface definitions
├── data/                   # Static data
│   └── moods.ts           # Mood definitions and metadata
├── public/                 # Static assets
└── package.json            # Dependencies and scripts
```

## 🎨 Design System

### Color Palette
- **Primary**: Warm oranges and reds (appetite-stimulating)
- **Secondary**: Calming blues and greens
- **Accent**: Mood-specific colors for emotional context
- **Neutral**: Clean whites and soft grays

### Typography
- **Headers**: Poppins (modern, rounded sans-serif)
- **Body**: Inter (readable, clean font)

### Spacing
- **Grid System**: 8px base unit
- **Component Spacing**: Consistent padding and margins
- **Responsive Breakpoints**: Mobile-first approach

## 🔮 Future Enhancements

### Phase 2 Features
- [ ] Restaurant integration with real-time data
- [ ] Meal planning functionality
- [ ] Advanced personalization algorithm
- [ ] Mood tracking and insights dashboard
- [ ] Social sharing and community features

### Phase 3 Features
- [ ] Mobile app development
- [ ] Advanced analytics and insights
- [ ] Third-party health app integrations
- [ ] Premium subscription features
- [ ] AI-powered mood analysis

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern food and wellness apps
- **Icons**: Lucide React for consistent iconography
- **Animations**: Framer Motion for smooth interactions
- **Community**: All contributors and users who provide feedback

## 📞 Support

- **Documentation**: [docs.moodfood.app](https://docs.moodfood.app)
- **Issues**: [GitHub Issues](https://github.com/yourusername/moodfood/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/moodfood/discussions)
- **Email**: support@moodfood.app

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=yourusername/moodfood&type=Date)](https://star-history.com/#yourusername/moodfood&Date)

---

**Made with ❤️ for better emotional eating**

*"Eat what you feel" - MoodFood Team*
