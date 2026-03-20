"use client";

import Image from "next/image";

interface HeroSectionProps {
  scrollToChat: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToChat }) => {
  return (
    <section style={{
      position: "relative",
      height: "100vh",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#000",
      zIndex: 1,
    }}>
      <div style={{
        position: "absolute", inset: 0,
        animation: "shipRock 7s ease-in-out infinite",
        transformOrigin: "center 80%",
      }}>
        <Image 
          src="/12.png" 
          alt="Going Merry" 
          width={1440}
          height={810}
          style={{
            width: "100%", height: "100%",
            objectFit: "cover",
            objectPosition: "center 55%",
            display: "block",
            filter: "brightness(0.65) saturate(1.3)",
          }} 
        />
      </div>

      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.0) 30%, rgba(0,0,0,0.0) 60%, rgba(0,0,0,0.8) 85%, rgba(0,0,0,1) 100%)",
      }} />

      <div style={{
        position: "relative", zIndex: 2,
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: "16px",
        textAlign: "center", padding: "0 20px",
        animation: "fadeIn 1.2s ease forwards",
      }}>
        <h1 style={{
          fontSize: "clamp(40px, 9vw, 80px)",
          fontWeight: "900",
          background: "linear-gradient(90deg, #f5a623, #ff6b35, #f5a623)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation: "shimmer 3s linear infinite",
          letterSpacing: "-1px",
          lineHeight: 1.1,
        }}>Talk to Luffy</h1>

        <p style={{
          color: "rgba(220,220,240,0.85)",
          fontSize: "clamp(14px, 2.5vw, 18px)",
          maxWidth: "480px", lineHeight: 1.7,
          textShadow: "0 2px 10px rgba(0,0,0,0.8)",
        }}>
          Chat with Monkey D. Luffy — future King of the Pirates. Ask him anything about Grand Line, his crew, or his dream!
            marginBottom: "8px",
            fontSize: "14px",
            fontWeight: "600",
            color: "#f5a623"
          }}>
            We're gonna find One Piece!
          </span>
          <span style={{ 
            display: "block", 
            marginBottom: "4px",
            fontSize: "13px",
            color: "rgba(200,200,220,0.8)"
          }}>
            First, there's **Zoro**! He's super strong, a swordsman! He sleeps a lot, but he's always there for me! And he gets lost! HAHAHA!
          </span>
          <span style={{ 
            display: "block", 
            marginBottom: "4px",
            fontSize: "13px",
            color: "rgba(200,200,220,0.8)"
          }}>
            Then **Nami**! She's our navigator! She can draw maps of the whole world! And she hits me when I do something silly! But she's the best!
          </span>
          <span style={{ 
            display: "block", 
            marginBottom: "4px",
            fontSize: "13px",
            color: "rgba(200,200,220,0.8)"
          }}>
            **Usopp**! He's our sniper! He's got a big nose! And he tells big stories! But he's a brave warrior of the sea!
          </span>
          <span style={{ 
            display: "block", 
            marginBottom: "4px",
            fontSize: "13px",
            color: "rgba(200,200,220,0.8)"
          }}>
            **Sanji**! He's our cook! He makes the BEST FOOD! I love his meat! MEAT! He's always fighting Zoro, but his food is amazing!
          </span>
          <span style={{ 
            display: "block", 
            marginBottom: "4px",
            fontSize: "13px",
            color: "rgba(200,200,220,0.8)"
          }}>
            **Chopper**! He's our doctor! He's a reindeer, but he's a man too! He can turn into different forms! He's so cute! And he can heal anything!
          </span>
          <span style={{ 
            display: "block", 
            marginBottom: "4px",
            fontSize: "13px",
            color: "rgba(200,200,220,0.8)"
          }}>
            **Robin**! She's our archaeologist! She knows everything about history! And she can make a thousand arms! SO COOL!
          </span>
          <span style={{ 
            display: "block", 
            marginBottom: "4px",
            fontSize: "13px",
            color: "rgba(200,200,220,0.8)"
          }}>
            **Franky**! He's our shipwright! He made our ship, Thousand Sunny! He's SUPER! And he drinks cola! SUUUUPER!
          </span>
          <span style={{ 
            display: "block", 
            marginBottom: "4px",
            fontSize: "13px",
            color: "rgba(200,200,220,0.8)"
          }}>
            **Brook**! He's our musician! A skeleton! He plays violin! And he asks to see ladies' panties! YO HO HO HO!
          </span>
          <span style={{ 
            display: "block", 
            marginBottom: "4px",
            fontSize: "13px",
            color: "rgba(200,200,220,0.8)"
          }}>
            And **Jinbe**! He's our helmsman! A fish-man! He's super strong and can fight in the water! He's a big brother!
          </span>
          <span style={{ 
            display: "block", 
            fontSize: "14px",
            fontWeight: "600",
            color: "#f5a623"
          }}>
            They're all my nakama! We're gonna have SO MANY ADVENTURES!
          </span>
          <span style={{ 
            display: "block", 
            fontSize: "16px",
            fontWeight: "700",
            color: "#ff6b35"
          }}>
            And I'm gonna be King of the Pirates!! Let's GOOOOOO!! GOMU GOMU NO!!
          </span>
        </p>

        <button className="scroll-btn" onClick={scrollToChat} style={{
          marginTop: "60px",
          background: "rgba(196,30,58,0.8)",
          border: "1px solid rgba(196,30,58,0.6)",
          color: "white", padding: "14px 40px",
          borderRadius: "50px", fontSize: "15px",
          fontWeight: "700", cursor: "pointer",
          letterSpacing: "0.5px",
          animation: "pulseBtn 2s ease-in-out infinite",
        }}>Start Chatting ↓</button>
      </div>

      <div style={{
        position: "absolute", bottom: "80px",
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: "8px", zIndex: 2,
      }}>
        <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "11px", letterSpacing: "3px" }}>SCROLL</span>
        <div style={{ animation: "bounce 1.5s ease-in-out infinite", color: "rgba(245,166,35,0.8)", fontSize: "18px" }}>▼</div>
      </div>
    </section>
  );
};

export default HeroSection;
