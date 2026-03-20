# 🏴‍☠️ OnePiece ChatBot - Interactive AI Experience

<div align="center">

![Luffy Chat](https://img.shields.io/badge/Luffy-ChatBot-red?style=for-the-badge&logo=onepiece)
![Next.js](https://img.shields.io/badge/Next.js-16.2.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)

**Chat with Monkey D. Luffy - Future King of the Pirates!**

🌐 **Live Demo**
https://one-piece-chat-bot.vercel.app/

</div>

## 📖 About

An immersive, AI-powered chatbot application featuring Monkey D. Luffy from One Piece. Built with cutting-edge Next.js 16 and TypeScript, powered by Google's Gemini AI. Experience authentic Luffy personality with his signature catchphrases, love for meat, and dreams of becoming the King of the Pirates!

## 🚀 Features

### 🎭 **Core Functionality**
- **Authentic Luffy Personality**: Complete character emulation with catchphrases and mannerisms
- **Real-time Messaging**: Instant chat responses with typing indicators
- **Message Management**: Edit, delete, and undo message operations
- **Search Functionality**: Advanced chat history search with Ctrl+F shortcuts
- **Multilingual Support**: EN, ES, FR, JA language options
- **Conversation Starters**: Quick engagement with default questions
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Dark Theme Support**: Complete One Piece-themed dark interface

### 🎨 **Technical Highlights**
- **Modern Next.js 16**: App Router, Server Components, and Edge Runtime
- **TypeScript Strict Mode**: Full type safety with path aliases
- **Custom Hooks Architecture**: Modular state management with useChat, useEffects
- **Component-Based Design**: Reusable, maintainable React components
- **API Integration**: Google Gemini AI with streaming responses
- **Performance Optimizations**: Turbopack, image optimization, code splitting
- **Security Implementation**: Headers, CORS, input sanitization

### 🌟 **User Experience**
- **Animated Backgrounds**: Going Merry ship with parallax effects
- **Loading Experience**: Luffy wanted poster animation
- **Smooth Transitions**: Micro-interactions and hover states
- **Keyboard Shortcuts**: Ctrl+F search, Ctrl+K focus, Escape modals
- **Message Status Tracking**: Sent → Delivered → Read indicators
- **Typing Indicators**: Real-time Luffy typing animations
- **Glass Morphism UI**: Modern backdrop blur with transparency
- **Professional Animations**: CSS animations with spring physics

## �️ Technology Stack

### Frontend
- **Next.js 16.2.0** - React framework with App Router
- **TypeScript 5.0** - Type-safe JavaScript
- **React 18** - UI framework with hooks
- **Google Generative AI** - Gemini 2.5 Flash AI model
- **Next.js Image Optimization** - Automatic image optimization
- **CSS-in-JS** - Inline styles with animations

### Build Tools
- **Turbopack** - Fast development builds
- **Next.js Compiler** - React Compiler optimizations
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing

### Deployment
- **Vercel** - Serverless deployment platform
- **Edge Runtime** - Global CDN distribution
- **Environment Variables** - Secure API key management

## 📁 Project Structure

```
OnePiece-ChatBot/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/
│   │   │   └── chat/          # Chat API route
│   │   │       └── route.ts   # Gemini AI integration
│   │   ├── layout.tsx         # Root layout component
│   │   └── page.tsx           # Main application page
│   ├── components/            # Reusable UI components
│   │   ├── chat-section.tsx   # Main chat interface
│   │   ├── hero-section.tsx   # Landing section
│   │   ├── bounty-poster-loader.tsx  # Loading animation
│   │   ├── error-boundary.tsx # Error handling
│   │   └── skeleton-loader.tsx  # Chat skeleton
│   ├── hooks/                 # Custom React hooks
│   │   ├── use-chat.ts        # Chat state management
│   │   └── use-effects.ts     # Utility hooks
│   ├── lib/                   # Utilities and constants
│   │   ├── analytics.ts       # Google Analytics
│   │   ├── constants.ts       # App constants
│   │   └── styles.ts          # Global styles
│   ├── types/                 # TypeScript definitions
│   │   └── message.ts         # Message types
│   └── public/                # Static assets
│       ├── images.jpg         # Luffy avatar
│       ├── you.jpg            # User avatar
│       └── hero-bg.mp4        # Background video
├── docs/                      # Documentation
├── .env.example              # Environment variables template
├── vercel.json               # Vercel deployment config
├── next.config.ts            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## � Design System

### Color Palette
- **Primary**: Red gradient (#dc2626 → #991b1b)
- **Secondary**: Blue accents (#3b82f6)
- **Background**: Dark slate (#000414)
- **Text**: White with opacity variations
- **Glass Effects**: Backdrop blur with transparency

### Typography
- **Headings**: font-black with tight tracking
- **Body Text**: font-medium with relaxed leading
- **One Piece Theme**: Pirate-inspired typography
- **Responsive Scaling**: Mobile to desktop optimization

### Animations
- **Loading States**: Wanted poster reveal animation
- **Message Animations**: Slide-in effects with easing
- **Micro-interactions**: Hover states and transitions
- **Background Effects**: Parallax and video animations
- **Typing Indicators**: Bobbing animation dots

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Google Gemini API key

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Varun2045/OnePiece-ChatBot.git
cd OnePiece-ChatBot
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
```bash
cp .env.example .env.local
# Add your Gemini API key
```

4. **Start Development Server**
```bash
npm run dev
```

5. **Open [http://localhost:3000](http://localhost:3000)**

### Environment Variables

```env
GEMINI_API_KEY=your_gemini_api_key_here
GA_MEASUREMENT_ID=your_google_analytics_id # Optional
NEXT_PUBLIC_APP_URL=your_deployed_url # Optional
```

## � Configuration

### Next.js Configuration
- **Turbopack**: Fast development builds
- **Image Optimization**: WebP/AVIF formats
- **Security Headers**: XSS protection, CSP
- **Performance**: Code splitting, tree shaking

### TypeScript Configuration
- **Strict Mode**: Full type checking
- **Path Aliases**: @/ imports
- **React Components**: Proper typing

### Vercel Configuration
- **Regions**: Singapore (sin1) for Asian users
- **Functions**: 30s timeout for AI responses
- **Headers**: Security and caching rules
- **Rewrites**: Clean URL structure

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Mobile Optimizations
- **Touch Interactions**: Mobile-friendly buttons
- **Keyboard Support**: On-screen keyboard handling
- **Performance**: Optimized animations
- **Layout**: Responsive chat interface

## 🎯 Key Features Demonstrated

### React Expertise
- **Hooks Usage**: useState, useEffect, custom hooks
- **Component Composition**: Modular, reusable components
- **State Management**: Complex chat state with hooks
- **Event Handling**: User interactions and form submissions
- **Conditional Rendering**: Dynamic UI based on state
- **TypeScript**: Full type safety throughout

### Next.js Skills
- **App Router**: Modern routing with layouts
- **API Routes**: Server-side AI integration
- **Image Optimization**: Automatic image handling
- **Environment Variables**: Secure configuration
- **Deployment**: Vercel optimization

### AI Integration
- **Google Gemini**: AI chat responses
- **Streaming**: Real-time response streaming
- **Error Handling**: Graceful AI failures
- **Prompt Engineering**: Luffy personality prompts

### Design Implementation
- **Modern CSS**: Inline styles with animations
- **Responsive Design**: Mobile-first approach
- **Dark Theme**: Complete dark interface
- **Glass Morphism**: Modern UI effects
- **Animations**: CSS and JavaScript animations

### User Experience
- **Form Handling**: Message input validation
- **Navigation**: Smooth scrolling and search
- **Loading States**: Professional feedback
- **Error Handling**: Graceful error management
- **Accessibility**: Semantic HTML and ARIA

## 🔍 Component Showcase

### ChatSection Component
- **Dynamic Content**: Real-time message rendering
- **Interactive Elements**: Edit, delete, search functions
- **Professional UI**: Glass morphism design
- **Responsive Layout**: Mobile optimization
- **Message Status**: Typing indicators and timestamps

### HeroSection Component
- **Landing Experience**: Animated introduction
- **Call-to-Action**: Smooth scroll to chat
- **Background Effects**: Video and parallax
- **Typography**: One Piece-themed text

### Custom Hooks
- **useChat**: Complete chat state management
- **useEffects**: Keyboard shortcuts and utilities
- **useScrollToBottom**: Auto-scroll functionality
- **useKeyboardShortcuts**: Ctrl+F, Ctrl+K, Escape

## 🚀 Performance Optimizations

### Animation Performance
- **GPU Acceleration**: Transform and opacity animations
- **Reduced Reflows**: Efficient layout management
- **Animation Cleanup**: Proper cleanup on unmount
- **Spring Physics**: Natural motion with easing

### Bundle Optimization
- **Tree Shaking**: Unused code elimination
- **Code Splitting**: Lazy loading capabilities
- **Image Optimization**: Next.js Image component
- **Build Optimization**: Production builds

### API Performance
- **Streaming Responses**: Real-time AI responses
- **Error Handling**: Graceful failure management
- **Caching**: Response optimization
- **Timeout Management**: Prevent hanging requests

## 📊 Browser Support

- **Chrome/Edge**: Full support with latest features
- **Firefox**: Full support with fallbacks
- **Safari**: Full support with proper prefixes
- **Mobile**: iOS Safari and Chrome Mobile optimized

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## � License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## � Contact

**Portfolio Project**: Demonstrating advanced Next.js development with AI integration and modern web technologies.

**Key Technologies**: Next.js 16, TypeScript, Google Gemini AI, Vercel Deployment

**Features**: AI chat integration, real-time messaging, responsive design, professional UI/UX, performance optimization

**Built with passion for One Piece and cutting-edge web development, showcasing enterprise-grade full-stack capabilities.**

---

<div align="center">

**Made with ❤️ by [Varun2045](https://github.com/Varun2045)**

*"I'm gonna be King of the Pirates!" - Monkey D. Luffy*

</div>
