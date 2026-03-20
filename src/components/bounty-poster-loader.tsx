"use client";

import Image from "next/image";

interface BountyPosterLoaderProps {
  showLoader: boolean;
}

const BountyPosterLoader: React.FC<BountyPosterLoaderProps> = ({ showLoader }) => {
  if (!showLoader) return null;

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 99999,
      background: "#000",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexDirection: "column",
      overflow: "hidden",
    }}>
      {/* Dark red vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at center, transparent 30%, rgba(100,0,0,0.3) 70%, rgba(0,0,0,0.8) 100%)",
        pointerEvents: "none", zIndex: 2,
      }} />

      {/* Poster */}
      <div style={{
        position: "relative", zIndex: 4,
        maxWidth: "300px", width: "85%",
        animation: "revealPoster 1s ease 0.3s both, glitchLeft 4s ease-in-out infinite, redGlow 2s ease-in-out infinite",
      }}>
        <Image 
          src="/luffy.jpg" 
          alt="Luffy Wanted Poster" 
          width={300}
          height={450}
          loading="eager"
          priority
          style={{
            width: "100%", display: "block",
            animation: "flicker 5s ease-in-out infinite",
            filter: "contrast(1.1) brightness(0.95)",
          }} 
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(196,30,58,0.05)",
          borderRadius: "4px",
          mixBlendMode: "overlay",
        }} />
      </div>

      {/* Bottom bar */}
      <div style={{
        position: "relative", zIndex: 4,
        width: "85%", maxWidth: "300px",
        marginTop: "20px",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
          <span style={{
            fontSize: "10px", color: "rgba(196,30,58,0.8)",
            letterSpacing: "3px", fontWeight: "700",
            animation: "textReveal 0.5s ease 1s both",
          }}>LOADING</span>
          <span style={{
            fontSize: "10px", color: "rgba(255,255,255,0.3)",
            letterSpacing: "2px",
            animation: "textReveal 0.5s ease 1.2s both",
          }}>GRAND LINE</span>
        </div>
        <div style={{ height: "3px", background: "rgba(255,255,255,0.1)", borderRadius: "2px", overflow: "hidden" }}>
          <div style={{
            height: "100%",
            background: "linear-gradient(90deg, #8b0000, #c41e3a, #ff6b35)",
            borderRadius: "2px",
            animation: "loadBarGlow 3s ease forwards",
          }} />
        </div>
        <div style={{
          textAlign: "center", marginTop: "12px",
          fontSize: "9px", color: "rgba(255,255,255,0.6)",
          letterSpacing: "4px",
          animation: "textReveal 0.5s ease 1.5s both",
        }}>ORE WA MONKEY D. LUFFY</div>
        <div style={{
          textAlign: "center", marginTop: "4px",
          fontSize: "8px", color: "rgba(255,255,255,0.4)",
          letterSpacing: "2px",
          animation: "textReveal 0.5s ease 1.7s both",
        }}>Eiichiro Oda</div>
      </div>
    </div>
  );
};

export default BountyPosterLoader;
