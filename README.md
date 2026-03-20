# 🏴‍☠️ OnePiece ChatBot - Talk to Luffy

<div align="center">

![Luffy Chat](https://img.shields.io/badge/Luffy-ChatBot-red?style=for-the-badge&logo=onepiece)
![Next.js](https://img.shields.io/badge/Next.js-16.2.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)

**Chat with Monkey D. Luffy - Future King of the Pirates!**

[Live Demo](https://one-piece-chat-bot.vercel.app) • [Report Bug](https://github.com/Varun2045/OnePiece-ChatBot/issues) • [Request Feature](https://github.com/Varun2045/OnePiece-ChatBot/issues)

</div>

## 📖 About

An interactive chatbot application featuring Monkey D. Luffy from One Piece. Built with Next.js 16, TypeScript, and powered by Google's Gemini AI. Experience authentic Luffy personality with his signature catchphrases, love for meat, and dreams of becoming the King of the Pirates!

## ✨ Features

### 🎭 **Authentic Luffy Personality**
- Simple-minded, cheerful, and energetic responses
- Loves meat and mentions it randomly
- Talks about his crew (Zoro, Nami, Usopp, Sanji, Chopper, Robin, Franky, Brook, Jinbe)
- Signature catchphrases: "Ore wa Monkey D. Luffy!", "YOSH!!", "GOMU GOMU NO!!"
- Never breaks character - responds as Luffy would

### 💬 **Advanced Chat Features**
- **Real-time messaging** with typing indicators
- **Message editing** and **deletion** with undo functionality
- **Search through chat history** with Ctrl+F
- **Message status tracking** (sent → delivered → read)
- **Conversation starters** for quick engagement

### 🌍 **Multilingual Support**
- English (EN)
- Spanish (ES) 
- French (FR)
- Japanese (JA)

### 🎨 **Beautiful UI/UX**
- Stunning animated background with Going Merry ship
- Luffy wanted poster loading screen
- Responsive design for all devices
- Smooth animations and transitions
- Dark theme with One Piece aesthetics

### 🔧 **Developer Features**
- TypeScript for type safety
- Component-based architecture
- Custom hooks for state management
- Analytics tracking
- SEO optimized
- PWA ready

## 🚀 Quick Start

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

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` and add:
```env
GEMINI_API_KEY=your_gemini_api_key_here
GA_MEASUREMENT_ID=your_google_analytics_id # Optional
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open [http://localhost:3000](http://localhost:3000)**

## 🗝️ Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Google Gemini AI API key | ✅ Yes |
| `GA_MEASUREMENT_ID` | Google Analytics ID | ❌ No |
| `NEXT_PUBLIC_APP_URL` | Your deployed app URL | ❌ No |

### Getting Gemini API Key
1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create a new API key
3. Add it to your `.env.local` file

## 🏗️ Project Structure

```
OnePiece-ChatBot/
├── docs/                    # Documentation files
├── public/                  # Static assets (images, videos)
├── src/
│   ├── app/                # Next.js app router
│   │   ├── api/           # API routes
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Main page
│   ├── components/        # Reusable UI components
│   │   ├── bounty-poster-loader.tsx
│   │   ├── chat-section.tsx
│   │   ├── error-boundary.tsx
│   │   ├── hero-section.tsx
│   │   └── skeleton-loader.tsx
│   ├── hooks/             # Custom React hooks
│   │   ├── use-chat.ts
│   │   └── use-effects.ts
│   ├── lib/               # Utilities and constants
│   │   ├── analytics.ts
│   │   ├── constants.ts
│   │   └── styles.ts
│   └── types/             # TypeScript definitions
│       └── message.ts
├── .env.example           # Environment variables template
├── vercel.json           # Vercel deployment config
├── next.config.ts        # Next.js configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎮 Usage

### Basic Chat
1. Click on any starter button to begin
2. Type your message and press Enter or click Send
3. Luffy will respond in his authentic personality!

### Advanced Features
- **Search**: Press `Ctrl+F` or click the search icon
- **Edit Messages**: Click the ✏️ icon on your messages
- **Delete Messages**: Click the 🗑️ icon with undo option
- **Clear Chat**: Use the Clear button in the header
- **Switch Language**: Use the language selector dropdown

### Keyboard Shortcuts
- `Ctrl+F` - Toggle search
- `Ctrl+K` - Focus input field
- `Ctrl+/` - Toggle accessibility menu
- `Escape` - Close modals/search

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Deploy on Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "Add New..." → "Project"
- Import your repository
- Add environment variables
- Click "Deploy"

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2.0 with App Router
- **Language**: TypeScript
- **Styling**: CSS-in-JS with inline styles
- **AI**: Google Generative AI (Gemini 2.5 Flash)
- **Deployment**: Vercel
- **Analytics**: Google Analytics (optional)
- **Images**: Next.js Image Optimization

## 🎯 Performance Optimizations

- ⚡ **Turbopack** for fast development builds
- 🖼️ **Image optimization** with WebP/AVIF formats
- 🗜️ **Code splitting** and tree shaking
- 📦 **Bundle optimization** with webpack
- 🚀 **Static generation** where possible
- 🌐 **Global CDN** via Vercel

## 🔒 Security Features

- 🛡️ **Security headers** (XSS protection, content type options)
- 🔒 **Environment variable protection**
- 🚫 **CSRF protection**
- 🌐 **CORS configuration**
- 📊 **Input sanitization**

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Eiichiro Oda** - Creator of One Piece
- **Google** - For the amazing Gemini AI
- **Vercel** - For the excellent hosting platform
- **Next.js Team** - For the awesome framework

## 📞 Support

If you have any questions or need help, feel free to:

- 📧 Email: [your-email@example.com]
- 🐛 Report issues: [GitHub Issues](https://github.com/Varun2045/OnePiece-ChatBot/issues)
- 💬 Start a discussion: [GitHub Discussions](https://github.com/Varun2045/OnePiece-ChatBot/discussions)

---

<div align="center">

**Made with ❤️ by [Varun2045](https://github.com/Varun2045)**

*"I'm gonna be King of the Pirates!" - Monkey D. Luffy*

</div>
