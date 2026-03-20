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
          maxWidth: "480px", 
          lineHeight: 1.7,
          textShadow: "0 2px 10px rgba(0,0,0,0.8)",
          textAlign: "center",
          marginBottom: "20px",
        }}>
          Chat with Monkey D. Luffy — future King of the Pirates. Ask him anything about the Grand Line, his crew, or his dream!
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
