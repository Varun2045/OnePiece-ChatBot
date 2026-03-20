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
          background: "linear-gradient(135deg, #f5a623 0%, #ff6b35 25%, #f5a623 50%, #ff6b35 75%, #f5a623 100%)",
          backgroundSize: "300% 300%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation: "shimmer 4s ease-in-out infinite, textGlow 2s ease-in-out infinite alternate",
          letterSpacing: "-2px",
          lineHeight: 1.1,
          textTransform: "uppercase",
          textShadow: "0 0 30px rgba(245,166,35,0.5)",
          marginBottom: "8px",
        }}>Talk to Luffy</h1>

        <div style={{
          fontSize: "clamp(16px, 3vw, 20px)",
          fontWeight: "600",
          color: "rgba(255,255,255,0.9)",
          maxWidth: "500px", 
          lineHeight: 1.6,
          textAlign: "center",
          marginBottom: "24px",
          padding: "16px 24px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "12px",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        }}>
          <span style={{ 
            display: "block", 
            marginBottom: "8px",
            fontSize: "clamp(18px, 3.5vw, 22px)",
            color: "#f5a623",
            fontWeight: "700"
          }}>
            🏴‍☠️ Monkey D. Luffy
          </span>
          <span style={{ 
            display: "block", 
            fontSize: "clamp(14px, 2.5vw, 16px)",
            color: "rgba(220,220,240,0.8)",
            lineHeight: 1.5
          }}>
            Future King of the Pirates
          </span>
        </div>

        <p style={{
          color: "rgba(200,200,220,0.85)",
          fontSize: "clamp(14px, 2.5vw, 16px)",
          maxWidth: "520px", 
          lineHeight: 1.8,
          textAlign: "center",
          marginBottom: "32px",
          padding: "20px 24px",
          background: "linear-gradient(135deg, rgba(245,166,35,0.1) 0%, rgba(255,107,53,0.05) 100%)",
          border: "1px solid rgba(245,166,35,0.2)",
          borderRadius: "16px",
          backdropFilter: "blur(8px)",
          borderStyle: "dashed",
        }}>
          <span style={{ 
            display: "block", 
            marginBottom: "12px",
            fontSize: "18px",
            fontWeight: "600"
          }}>
            ⚓ **Ask Me Anything!**
          </span>
          Chat with the future King of the Pirates about his adventures, crew, Devil Fruit powers, and dreams of finding the legendary **One Piece**!
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
