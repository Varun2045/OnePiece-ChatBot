"use client";
import React, { useState, useEffect } from "react";
import ErrorBoundary from "@/components/error-boundary";
import BountyPosterLoader from "@/components/bounty-poster-loader";
import HeroSection from "@/components/hero-section";
import ChatSection from "@/components/chat-section";
import { useChat } from "@/hooks/use-chat";
import { useSparkleEffect, useKeyboardShortcuts, useOnlineStatus, useScrollToBottom, usePageLoad } from "@/hooks/use-effects";
import { trackEvent } from "@/lib/analytics";
import { STARTERS } from "@/lib/constants";
import { globalStyles } from "@/lib/styles";
import { Message } from "@/types/message";

export default function Home() {
  // Fixed TypeScript error - added missing setShowSearch prop
  const {
    messages,
    input,
    setInput,
    loading,
    error,
    isTyping,
    sendMessage,
    clearMessages,
    searchQuery,
    setSearchQuery,
    showSearch,
    setShowSearch,
    editingMessageId,
    editText,
    setEditText,
    startEditingMessage,
    saveEditedMessage,
    cancelEditing,
    deleteMessage,
    deletedMessage,
    showUndo,
    undoDelete,
    searchMessages,
  } = useChat();

  const [showLoader, setShowLoader] = useState(true);
  const [isOnline, setIsOnline] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [showAccessibilityMenu, setShowAccessibilityMenu] = useState(false);
  const [reacting, setReacting] = useState(false);

  const bottomRef = useScrollToBottom(messages, loading);
  const chatRef = React.useRef<HTMLDivElement>(null);

  // Set online status after hydration
  useEffect(() => {
    setIsOnline(navigator.onLine);
  }, []);

  usePageLoad();
  useSparkleEffect();
  useOnlineStatus(setIsOnline);
  useKeyboardShortcuts(showSearch, setShowSearch, showAccessibilityMenu, setShowAccessibilityMenu, editingMessageId, (id: string | null) => {
    if (id) startEditingMessage(id, "");
    else cancelEditing();
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
      trackEvent('loader_complete', 'UI');
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToChat = () => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ErrorBoundary>
      <main style={{ fontFamily: "'Segoe UI', sans-serif", background: "#000" }}>
        <style>{globalStyles}</style>

        {/* ── BOUNTY POSTER LOADER ── */}
        <BountyPosterLoader showLoader={showLoader} />

        {/* ── HERO SECTION ── */}
        <HeroSection scrollToChat={scrollToChat} />

        {/* ── CHAT SECTION ── */}
        <div ref={chatRef}>
          <ChatSection
            messages={messages}
            loading={loading}
            error={error}
            isTyping={isTyping}
            input={input}
            setInput={setInput}
            sendMessage={sendMessage}
            showSearch={showSearch}
            setShowSearch={setShowSearch}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            editingMessageId={editingMessageId}
            editText={editText}
            setEditText={setEditText}
            saveEditedMessage={saveEditedMessage}
            cancelEditing={cancelEditing}
            deleteMessage={deleteMessage}
            showUndo={showUndo}
            undoDelete={undoDelete}
            clearMessages={clearMessages}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            isOnline={isOnline}
            searchMessages={searchMessages}
            bottomRef={bottomRef}
          />
        </div>
      </main>
    </ErrorBoundary>
  );
}