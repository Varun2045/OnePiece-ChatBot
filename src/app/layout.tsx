import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://luffy-chat.vercel.app'),
  title: {
    default: "Talk to Luffy | One Piece AI Chat",
    template: "%s | Luffy Chat"
  },
  description: "Chat with Monkey D. Luffy, the future King of the Pirates! Experience an immersive One Piece conversation with AI-powered responses. Ask about his adventures, crew, Devil Fruit powers, and dreams.",
  keywords: [
    "One Piece",
    "Monkey D. Luffy",
    "Anime Chat",
    "Manga Conversation",
    "AI Chat",
    "King of the Pirates",
    "Straw Hat Pirates",
    "Devil Fruit",
    "Grand Line",
    "Anime AI"
  ],
  authors: [{ name: "One Piece Fan Chat" }],
  creator: "One Piece Fan Chat",
  publisher: "One Piece Fan Chat",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://luffy-chat.vercel.app',
    title: 'Talk to Luffy | One Piece AI Chat',
    description: 'Chat with Monkey D. Luffy, the future King of the Pirates! Experience an immersive One Piece conversation with AI-powered responses.',
    siteName: 'Luffy Chat',
    images: [
      {
        url: '/12.png',
        width: 1200,
        height: 630,
        alt: 'Monkey D. Luffy - King of the Pirates Chat',
      },
      {
        url: '/luffy.jpg',
        width: 400,
        height: 600,
        alt: 'Luffy Wanted Poster',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talk to Luffy | One Piece AI Chat',
    description: 'Chat with Monkey D. Luffy, the future King of the Pirates! 🏴‍☠️',
    images: ['/12.png'],
    creator: '@onepiece',
    site: '@luffy_chat',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'theme-color': '#c41e3a',
    'msapplication-TileColor': '#c41e3a',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Luffy Chat',
    'mobile-web-app-capable': 'yes',
    'application-name': 'Luffy Chat',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="data:," />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: 'Luffy Chat',
                page_location: window.location.href,
                content_group1: 'One Piece Chat',
                content_group2: 'AI Conversation'
              });
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Talk to Luffy - One Piece AI Chat",
              "description": "Chat with Monkey D. Luffy, the future King of the Pirates! Experience an immersive One Piece conversation with AI-powered responses.",
              "url": "https://luffy-chat.vercel.app",
              "applicationCategory": "EntertainmentApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "creator": {
                "@type": "Organization",
                "name": "One Piece Fan Chat",
                "url": "https://luffy-chat.vercel.app"
              },
              "mainEntity": {
                "@type": "Person",
                "name": "Monkey D. Luffy",
                "description": "Future King of the Pirates, Captain of the Straw Hat Pirates",
                "knowsAbout": [
                  "Devil Fruits",
                  "Grand Line",
                  "Straw Hat Pirates",
                  "One Piece",
                  "Piracy",
                  "Adventure"
                ]
              },
              "featureList": [
                "AI-powered conversation",
                "Real-time chat responses",
                "Mobile responsive design",
                "No registration required",
                "Free to use"
              ],
              "screenshot": "https://luffy-chat.vercel.app/12.png",
              "softwareVersion": "1.0.0",
              "datePublished": "2024-01-01",
              "dateModified": "2024-01-01",
              "inLanguage": "en-US",
              "isAccessibleForFree": true,
              "isFamilyFriendly": true
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}