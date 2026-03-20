export const globalStyles = `
  * { box-sizing: border-box; margin: 0; padding: 0; }

  @keyframes skeleton-shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  @keyframes shipRock {
    0% { transform: rotate(-0.3deg) translateY(0px); }
    25% { transform: rotate(0deg) translateY(-3px); }
    50% { transform: rotate(0.3deg) translateY(0px); }
    75% { transform: rotate(0deg) translateY(-3px); }
    100% { transform: rotate(-0.3deg) translateY(0px); }
  }

  @keyframes bob {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }

  @keyframes react {
    0% { transform: scale(1); }
    25% { transform: scale(1.03) rotate(-1deg); }
    50% { transform: scale(1.02) rotate(1deg); }
    100% { transform: scale(1); }
  }

  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-30px); }
    to { opacity: 1; transform: translateX(0); }
  }

  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(30px); }
    to { opacity: 1; transform: translateX(0); }
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  @keyframes pulseGlow {
    0%, 100% { box-shadow: 0 0 20px rgba(196,30,58,0.3), 0 30px 80px rgba(0,0,0,0.4); }
    50% { box-shadow: 0 0 60px rgba(196,30,58,0.6), 0 30px 80px rgba(0,0,0,0.4); }
  }

  @keyframes wave1 {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(-40px); }
  }

  @keyframes wave2 {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(40px); }
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); opacity: 1; }
    50% { transform: translateY(8px); opacity: 0.5; }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes sparkle-fade {
    0% { opacity: 1; transform: translate(-50%, -50%) scale(0.5); }
    50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.2); }
    100% { opacity: 0; transform: translate(-50%, -50%) scale(1.8); }
  }

  @keyframes pulseBtn {
    0%, 100% { box-shadow: 0 4px 20px rgba(196,30,58,0.4), 0 0 0 0 rgba(196,30,58,0.4); }
    50% { box-shadow: 0 4px 20px rgba(196,30,58,0.6), 0 0 0 12px rgba(196,30,58,0); }
  }

  @keyframes scanline {
    0% { top: -10%; }
    100% { top: 110%; }
  }

  @keyframes flicker {
    0%, 95%, 100% { opacity: 1; }
    96% { opacity: 0.4; }
    98% { opacity: 0.8; }
  }

  @keyframes revealPoster {
    0% { clip-path: inset(100% 0 0 0); opacity: 0; }
    30% { clip-path: inset(0 0 0 0); opacity: 1; }
    100% { clip-path: inset(0 0 0 0); opacity: 1; }
  }

  @keyframes glitchLeft {
    0%, 90%, 100% { transform: translateX(0); }
    92% { transform: translateX(-4px); }
    94% { transform: translateX(4px); }
    96% { transform: translateX(-2px); }
  }

  @keyframes redGlow {
    0%, 100% { box-shadow: 0 0 30px rgba(196,30,58,0.4), 0 0 60px rgba(196,30,58,0.2); }
    50% { box-shadow: 0 0 60px rgba(196,30,58,0.8), 0 0 100px rgba(196,30,58,0.4); }
  }

  @keyframes textReveal {
    0% { opacity: 0; letter-spacing: 8px; }
    100% { opacity: 1; letter-spacing: 3px; }
  }

  @keyframes loadBarGlow {
    from { width: 0%; }
    to { width: 100%; box-shadow: 0 0 10px #c41e3a, 0 0 20px rgba(196,30,58,0.5); }
  }

  .msg-appear { animation: fadeUp 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards; }
  .chat-scroll::-webkit-scrollbar { width: 4px; }
  .chat-scroll::-webkit-scrollbar-thumb { background: rgba(196,30,58,0.3); border-radius: 4px; }
  .starter-btn { transition: all 0.2s ease; cursor: pointer; }
  .starter-btn:hover { background: rgba(196,30,58,0.28) !important; transform: translateY(-2px); border-color: rgba(196,30,58,0.7) !important; }
  .send-btn { transition: all 0.2s ease; }
  .send-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(196,30,58,0.5); }
  input::placeholder { color: rgba(150,150,180,0.5); }
  .scroll-btn:hover { background: rgba(196,30,58,0.95) !important; transform: scale(1.05); }
  .scroll-btn { transition: all 0.2s ease; }
  .clear-btn:hover { border-color: rgba(196,30,58,0.5) !important; color: #ff7777 !important; }
  .clear-btn { transition: all 0.2s ease; }
  .prose-content p { margin: 0; display: inline; }
  .prose-content strong { color: #f5a623; }
  .prose-content em { color: #aabbcc; font-style: italic; }
`;
