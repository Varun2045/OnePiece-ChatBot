"use client";

import { useEffect, useRef, RefObject } from "react";
import { trackEvent, trackPageView } from "@/lib/analytics";

export const useSparkleEffect = () => {
  useEffect(() => {
    const createSparkle = (x: number, y: number) => {
      const sparkle = document.createElement("div");
      const size = Math.random() * 8 + 4;
      sparkle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: ${size * 14}px;
        height: ${size * 14}px;
        border-radius: 50%;
        pointer-events: none;
        z-index: 99996;
        transform: translate(-50%, -50%);
        background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(200,220,255,0.04) 40%, transparent 70%);
        mix-blend-mode: screen;
        animation: sparkle-fade 1.2s ease-out forwards;
      `;
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 800);
    };

    let lastX = 0;
    let lastY = 0;
    let throttle = false;

    const handleMove = (e: MouseEvent) => {
      if (throttle) return;
      throttle = true;
      setTimeout(() => { throttle = false; }, 30);
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
        createSparkle(e.clientX, e.clientY);
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
};

export const useKeyboardShortcuts = (
  showSearch: boolean,
  setShowSearch: (value: boolean) => void,
  showAccessibilityMenu: boolean,
  setShowAccessibilityMenu: (value: boolean) => void,
  editingMessageId: string | null,
  setEditingMessageId: (id: string | null) => void
) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 'f':
            e.preventDefault();
            setShowSearch(!showSearch);
            break;
          case 'k':
            e.preventDefault();
            document.querySelector('input')?.focus();
            break;
          case '/':
            e.preventDefault();
            setShowAccessibilityMenu(!showAccessibilityMenu);
            break;
        }
      }
      
      if (e.key === 'Escape') {
        setShowSearch(false);
        setEditingMessageId(null);
        setShowAccessibilityMenu(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showSearch, showAccessibilityMenu, editingMessageId, setShowSearch, setShowAccessibilityMenu, setEditingMessageId]);
};

export const useOnlineStatus = (setIsOnline: (value: boolean) => void) => {
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      trackEvent('connection_online', 'System');
    };
    
    const handleOffline = () => {
      setIsOnline(false);
      trackEvent('connection_offline', 'System');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [setIsOnline]);
};

export const useScrollToBottom = <T extends HTMLElement = HTMLDivElement>(messages: any[], loading: boolean): RefObject<T> => {
  const bottomRef = useRef<T>(null) as RefObject<T>;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return bottomRef;
};

export const usePageLoad = () => {
  useEffect(() => {
    trackPageView();
  }, []);
};
