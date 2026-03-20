"use client";

import React from "react";
import Image from "next/image";
import { Message } from "@/types/message";
import SkeletonLoader from "./skeleton-loader";
import { STARTERS } from "@/lib/constants";

interface ChatSectionProps {
  messages: Message[];
  input: string;
  setInput: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isTyping: boolean;
  isOnline: boolean;
  selectedLanguage: string;
  setSelectedLanguage: (value: string) => void;
  showSearch: boolean;
  setShowSearch: (value: boolean) => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  isEditing: boolean;
  editingMessageId: string | null;
  editingContent: string;
  setEditingContent: (value: string) => void;
  startEditingMessage: (id: string, content: string) => void;
  cancelEditing: () => void;
  saveEdit: () => void;
  deleteMessage: (id: string, index: number) => void;
  clearMessages: () => void;
  bottomRef: React.RefObject<HTMLDivElement>;
}

const ChatSection: React.FC<ChatSectionProps> = ({
  messages,
  loading,
  error,
  isTyping,
  input,
  setInput,
  sendMessage,
  showSearch,
  searchQuery,
  setSearchQuery,
  setShowSearch,
  editingMessageId,
  editText,
  setEditText,
  saveEditedMessage,
  cancelEditing,
  deleteMessage,
  showUndo,
  undoDelete,
  clearMessages,
  selectedLanguage,
  setSelectedLanguage,
  isOnline,
  searchMessages,
  bottomRef,
}) => {
  // Function to format message content with paragraph styling and highlighting
  const formatMessageContent = (content: string, isUser: boolean = false) => {
    // Split content into paragraphs
    const paragraphs = content.split('\n').filter(p => p.trim());
    
    // Keywords to highlight
    const highlightKeywords = [
      'MEAT', 'ADVENTURE', 'NAKAMA', 'ONE PIECE', 'KING OF THE PIRATES',
      'STRONGEST', 'CREW', 'DREAM', 'GRAND LINE', 'DEVIL FRUIT',
      'HAKI', 'PONEGLYPH', 'YONKO', 'WANO', 'RALEIGH', 'ZORO', 'NAMI', 
      'USOPP', 'SANJI', 'CHOPPER', 'ROBIN', 'FRANKY', 'BROOK', 'JINBE'
    ];

    return paragraphs.map((paragraph, index) => {
      let formattedText = paragraph;
      
      // Highlight important keywords
      highlightKeywords.forEach(keyword => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
        formattedText = formattedText.replace(regex, 
          `<span style="color: #f5a623; font-weight: 600; text-shadow: 0 0 8px rgba(245,166,35,0.3);">${keyword}</span>`
        );
      });

      // Highlight Luffy's signature phrases
      const luffyPhrases = [
        'I\'m gonna be King of the Pirates!',
        'Shishishi!',
        'Meat!',
        'Let\'s go!',
        'Gomu Gomu no',
        'I\'m Luffy!',
        'Future King of the Pirates'
      ];

      luffyPhrases.forEach(phrase => {
        const regex = new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
        formattedText = formattedText.replace(regex, 
          `<span style="color: #ff6b35; font-weight: 700; font-style: italic; text-shadow: 0 0 10px rgba(255,107,53,0.4);">${phrase}</span>`
        );
      });

      return (
        <p key={index} style={{
          margin: index === 0 ? '0 0 12px 0' : '0 0 12px 0',
          lineHeight: '1.6',
          fontSize: '14px',
          color: isUser ? 'rgba(255,255,255,0.95)' : 'rgba(220,220,240,0.95)',
          textAlign: 'left',
        }}>
          <span dangerouslySetInnerHTML={{ __html: formattedText }} />
        </p>
      );
    });
  };
  return (
    <section style={{
      minHeight: "100vh",
      background: "#000",
      position: "relative",
      zIndex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 16px",
    }}>
      <video autoPlay muted loop playsInline style={{
        position: "absolute",
        top: 0, left: 0,
        width: "100%", height: "100%",
        objectFit: "fill",
        zIndex: 0, opacity: 0.7,
        filter: "brightness(0.9) saturate(1)",
      }}>
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        pointerEvents: "none",
        background: "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.7) 100%)",
      }} />

      {/* Chat Card */}
      <div style={{
        width: "100%", maxWidth: "520px",
        display: "flex", flexDirection: "column",
        borderRadius: "16px", overflow: "hidden",
        height: "88vh", maxHeight: "780px",
        position: "relative", zIndex: 3,
        border: "1px solid rgba(255,255,255,0.2)",
        outline: "1px solid rgba(196,30,58,0.4)",
        animation: "pulseGlow 4s ease-in-out infinite",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.2)",
      }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image 
            src="/images.jpg" 
            alt="Luffy Background" 
            width={520}
            height={780}
            loading="eager"
            style={{
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center 30%",
              display: "block",
              filter: "brightness(0.4) saturate(1.2)",
            }} 
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)",
          }} />
        </div>

        {/* Header */}
        <div style={{
          position: "relative", zIndex: 2,
          display: "flex", alignItems: "center", gap: "14px",
          padding: "16px 24px", flexShrink: 0,
          borderBottom: "1px solid rgba(196,30,58,0.2)",
          background: "rgba(4,8,20,0.7)",
          backdropFilter: "blur(10px)",
        }}>
          <div style={{
            width: "44px", height: "44px", borderRadius: "50%",
            overflow: "hidden", flexShrink: 0,
            border: "2px solid #f5a623",
            boxShadow: "0 4px 15px rgba(196,30,58,0.4)",
          }}>
            <Image 
              src="/images.jpg" 
              alt="Luffy" 
              width={44}
              height={44}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} 
            />
          </div>
          <div>
            <div style={{
              fontSize: "17px", fontWeight: "700",
              background: "linear-gradient(90deg, #f5a623, #ff6b35)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Monkey D. Luffy</div>
            <div style={{ fontSize: "11px", color: "#5566aa", marginTop: "2px" }}>
              Captain • Straw Hat Pirates • Grand Line
            </div>
            <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.3)", marginTop: "1px" }}>
              Created by Eiichiro Oda
            </div>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "8px" }}>
            {/* Search Button */}
            <button 
              onClick={() => setShowSearch(!showSearch)}
              title="Search (Ctrl+F)"
              style={{
                background: showSearch ? "rgba(59,130,246,0.15)" : "rgba(255,255,255,0.05)",
                border: showSearch ? "1px solid rgba(59,130,246,0.4)" : "1px solid rgba(255,255,255,0.15)",
                color: "#fff", padding: "4px 8px",
                borderRadius: "6px", fontSize: "11px", cursor: "pointer",
                transition: "all 0.2s ease",
                backdropFilter: "blur(10px)",
                display: "flex", alignItems: "center", gap: "4px"
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
            
            {/* Language Selector */}
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              style={{
                background: "rgba(168,85,247,0.15)",
                border: "1px solid rgba(168,85,247,0.4)",
                color: "#e9d5ff", padding: "4px 8px",
                borderRadius: "6px", fontSize: "11px", cursor: "pointer",
                transition: "all 0.2s ease",
                backdropFilter: "blur(10px)",
                outline: "none",
              }}
              title="Language"
            >
              <option value="en" style={{ background: "#1e1b4b", color: "#e9d5ff" }}>EN</option>
              <option value="es" style={{ background: "#1e1b4b", color: "#e9d5ff" }}>ES</option>
              <option value="fr" style={{ background: "#1e1b4b", color: "#e9d5ff" }}>FR</option>
              <option value="ja" style={{ background: "#1e1b4b", color: "#e9d5ff" }}>JA</option>
            </select>
            
            {/* Connection Status */}
            <div style={{
              display: "flex", alignItems: "center", gap: "6px",
              background: isOnline ? "rgba(34,197,94,0.08)" : "rgba(239,68,68,0.08)",
              border: isOnline ? "1px solid rgba(34,197,94,0.25)" : "1px solid rgba(239,68,68,0.25)",
              padding: "4px 10px", borderRadius: "20px",
            }}>
              <div style={{ 
                width: "7px", height: "7px", borderRadius: "50%", 
                background: isOnline ? "#22c55e" : "#ef4444", 
                boxShadow: `0 0 8px ${isOnline ? "#22c55e" : "#ef4444"}` 
              }} />
              <span style={{ 
                fontSize: "11px", 
                color: isOnline ? "#22c55e" : "#ef4444", 
                fontWeight: "500" 
              }}>
                {isOnline ? "Online" : "Offline"}
              </span>
            </div>
            
            {messages.length > 0 && (
              <button onClick={clearMessages} style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#5566aa", padding: "4px 10px",
                borderRadius: "20px", fontSize: "11px", cursor: "pointer",
                transition: "all 0.2s ease",
              }}>Clear</button>
            )}
          </div>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div style={{
            padding: "8px 20px",
            background: "rgba(59,130,246,0.08)",
            borderBottom: "1px solid rgba(59,130,246,0.25)",
          }}>
            <input
              type="text"
              placeholder="Search messages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "8px",
                padding: "8px 12px",
                fontSize: "13px",
                color: "#fff",
                outline: "none",
              }}
              autoFocus
            />
          </div>
        )}

        {/* Messages */}
        <div style={{
          position: "relative", zIndex: 2,
          flex: 1, overflowY: "auto",
          padding: "16px 20px 12px",
          display: "flex", flexDirection: "column", gap: "12px",
        }}>
          {messages.length === 0 && (
            <div style={{
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              height: "100%", gap: "10px",
            }}>
              <div style={{
                fontSize: "22px", fontWeight: "800",
                background: "linear-gradient(90deg, #f5a623, #ff6b35, #f5a623)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 3s linear infinite",
                letterSpacing: "2px",
              }}>⚓ KING OF THE PIRATES ⚓</div>
              <div style={{ fontSize: "12px", color: "#7788aa", textAlign: "center", lineHeight: 1.6 }}>
                I&apos;m Monkey D. Luffy — and I&apos;m gonna be King of the Pirates.<br />What do you wanna know, crew?
              </div>
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr",
                gap: "8px", width: "100%", maxWidth: "400px", marginTop: "4px",
              }}>
                {STARTERS.map((s) => (
                  <button key={s} onClick={() => sendMessage(s)} style={{
                    textAlign: "left", fontSize: "12px",
                    padding: "10px 12px", borderRadius: "12px",
                    background: "rgba(196,30,58,0.15)",
                    border: "1px solid rgba(196,30,58,0.35)",
                    color: "#aabbcc", lineHeight: "1.4",
                    backdropFilter: "blur(4px)",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                  }}>{s}</button>
                ))}
              </div>
            </div>
          )}

          {loading && messages.length === 0 && <SkeletonLoader />}
          
          {searchMessages().map((msg, i) => {
            if (msg.isDeleted) return null;
            
            const isEditing = editingMessageId === msg.id;
            
            return (
              <div key={msg.id} style={{
                display: "flex", gap: "10px",
                justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                alignItems: "flex-end",
                animation: msg.role === "user" ? "slideInRight 0.3s ease-out" : "slideInLeft 0.3s ease-out",
                opacity: msg.isDeleted ? 0.3 : 1,
              }}>
                {/* Avatar and message content */}
                {msg.role === "assistant" && (
                  <div style={{
                    width: "30px", height: "30px", borderRadius: "50%",
                    flexShrink: 0, border: "2px solid #f5a623", overflow: "hidden",
                  }}>
                    <Image 
                      src="/images.jpg" 
                      alt="Luffy" 
                      width={30}
                      height={30}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} 
                    />
                  </div>
                )}
                
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "72%" }}>
                  <div style={{
                    padding: "14px 18px",
                    borderRadius: msg.role === "user" ? "18px 18px 6px 18px" : "18px 18px 18px 6px",
                    fontSize: "14px", lineHeight: "1.6",
                    backdropFilter: "blur(12px)",
                    ...(msg.role === "user"
                      ? { 
                          background: "linear-gradient(135deg, #dc2626, #991b1b)", 
                          color: "white", 
                          boxShadow: "0 4px 20px rgba(220,38,38,0.4), 0 1px 3px rgba(0,0,0,0.3)",
                          border: "1px solid rgba(255,255,255,0.1)"
                        }
                      : { 
                          background: "rgba(15,25,45,0.85)", 
                          border: "1px solid rgba(255,255,255,0.15)", 
                          color: "#f8fafc",
                          boxShadow: "0 4px 20px rgba(0,0,0,0.3), 0 1px 3px rgba(0,0,0,0.2)"
                        }),
                  }}>
                    {isEditing && msg.role === "user" ? (
                      <div style={{ display: "flex", gap: "8px" }}>
                        <input
                          type="text"
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              saveEditedMessage(msg.id);
                            } else if (e.key === "Escape") {
                              cancelEditing();
                            }
                          }}
                          style={{
                            flex: 1,
                            background: "rgba(255,255,255,0.1)",
                            border: "1px solid rgba(255,255,255,0.3)",
                            borderRadius: "8px",
                            padding: "4px 8px",
                            fontSize: "13px",
                            color: "#fff",
                            outline: "none",
                          }}
                          autoFocus
                        />
                        <button
                          onClick={() => saveEditedMessage(msg.id)}
                          style={{
                            background: "#22c55e",
                            border: "none",
                            color: "#fff",
                            padding: "4px 8px",
                            borderRadius: "4px",
                            fontSize: "11px",
                            cursor: "pointer",
                          }}
                        >
                          ✓
                        </button>
                        <button
                          onClick={cancelEditing}
                          style={{
                            background: "#ef4444",
                            border: "none",
                            color: "#fff",
                            padding: "4px 8px",
                            borderRadius: "4px",
                            fontSize: "11px",
                            cursor: "pointer",
                          }}
                        >
                          ✕
                        </button>
                      </div>
                    ) : (
                      <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
                        {formatMessageContent(msg.content, msg.role === 'user')}
                      </div>
                    )}
                  </div>
                  
                  {/* Message actions */}
                  <div style={{ 
                    display: "flex", 
                    justifyContent: msg.role === "user" ? "flex-end" : "flex-start", 
                    alignItems: "center", 
                    gap: "8px", 
                    marginTop: "4px",
                    fontSize: "10px", 
                    color: "rgba(255,255,255,0.4)" 
                  }}>
                    {msg.editedAt && (
                      <span style={{ fontStyle: "italic" }}>
                        edited {msg.editedAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    )}
                    {msg.timestamp && !msg.editedAt && (
                      <span>{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    )}
                    {msg.role === "user" && !isEditing && (
                      <div style={{ display: "flex", gap: "4px" }}>
                        <button
                          onClick={() => {/* Edit functionality - needs message content */}}
                          style={{
                            background: "transparent",
                            border: "none",
                            color: "rgba(255,255,255,0.6)",
                            fontSize: "10px",
                            cursor: "pointer",
                            padding: "2px 4px",
                            borderRadius: "4px",
                          }}
                          title="Edit message"
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => deleteMessage(msg.id, i)}
                          style={{
                            background: "transparent",
                            border: "none",
                            color: "rgba(255,255,255,0.6)",
                            fontSize: "10px",
                            cursor: "pointer",
                            padding: "2px 4px",
                            borderRadius: "4px",
                          }}
                          title="Delete message"
                        >
                          🗑️
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                
                {msg.role === "user" && (
                  <div style={{
                    width: "30px", height: "30px", borderRadius: "50%",
                    flexShrink: 0, border: "2px solid #22c55e", overflow: "hidden",
                  }}>
                    <Image 
                      src="/you.jpg" 
                      alt="You" 
                      width={30}
                      height={30}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = '<div style="width:100%;height:100%;background:#22c55e;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:bold;color:#fff;">YOU</div>';
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}

          {isTyping && (
            <div style={{ 
              display: "flex", 
              gap: "10px", 
              alignItems: "flex-end",
              animation: "slideInLeft 0.3s ease-out"
            }}>
              <div style={{
                width: "30px", height: "30px", borderRadius: "50%",
                flexShrink: 0, border: "2px solid #f5a623", overflow: "hidden",
              }}>
                <Image 
                  src="/images.jpg" 
                  alt="Luffy" 
                  width={30}
                  height={30}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} 
                />
              </div>
              <div style={{
                padding: "12px 16px", borderRadius: "20px 20px 20px 4px",
                background: "rgba(10,20,40,0.75)", border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}>
                <span style={{ fontSize: "12px", color: "#aabbcc", fontStyle: "italic" }}>Luffy is typing</span>
                <div style={{ display: "flex", gap: "3px" }}>
                  {[0, 1, 2].map(j => (
                    <div key={j} style={{
                      width: "6px", height: "6px", borderRadius: "50%",
                      background: "#f5a623",
                      animation: "bob 0.9s ease-in-out infinite",
                      animationDelay: `${j * 0.18}s`,
                    }} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {loading && !isTyping && (
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-end" }}>
              <div style={{
                width: "30px", height: "30px", borderRadius: "50%",
                flexShrink: 0, border: "2px solid #f5a623", overflow: "hidden",
              }}>
                <Image 
                  src="/images.jpg" 
                  alt="Luffy" 
                  width={30}
                  height={30}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} 
                />
              </div>
              <div style={{
                padding: "12px 16px", borderRadius: "20px 20px 20px 4px",
                background: "rgba(10,20,40,0.75)", border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
              }}>
                <div style={{ display: "flex", gap: "5px" }}>
                  {[0, 1, 2].map(j => (
                    <div key={j} style={{
                      width: "8px", height: "8px", borderRadius: "50%",
                      background: "#f5a623",
                      animation: "bob 0.9s ease-in-out infinite",
                      animationDelay: `${j * 0.18}s`,
                    }} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {error && (
            <div style={{
              textAlign: "center", fontSize: "13px",
              padding: "12px 16px", borderRadius: "14px",
              background: "rgba(196,30,58,0.15)",
              border: "1px solid rgba(196,30,58,0.35)", color: "#ff7777",
              backdropFilter: "blur(8px)",
            }}>{error}</div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div style={{
          position: "relative", zIndex: 2,
          padding: "16px 24px 20px", flexShrink: 0,
          borderTop: "1px solid rgba(255,255,255,0.12)",
          background: "rgba(4,8,20,0.9)",
          backdropFilter: "blur(15px)",
        }}>
          <div style={{
            display: "flex", gap: "12px", alignItems: "flex-end",
          }}>
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage(input)}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "12px",
                padding: "14px 18px",
                fontSize: "14px",
                color: "#fff",
                outline: "none",
                transition: "all 0.2s ease",
                backdropFilter: "blur(10px)",
              }}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={loading || !input.trim()}
              style={{
                background: "linear-gradient(135deg, #dc2626, #991b1b)",
                color: "white", border: "none",
                padding: "14px 24px", borderRadius: "12px",
                fontSize: "14px", fontWeight: "600", cursor: "pointer",
                opacity: loading || !input.trim() ? 0.5 : 1,
                transition: "all 0.2s ease",
              }}>Send ⚡</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
