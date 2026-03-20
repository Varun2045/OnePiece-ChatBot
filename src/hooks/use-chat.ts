"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Message, DeletedMessage } from "@/types/message";
import { trackEvent } from "@/lib/analytics";

interface UseChatReturn {
  messages: Message[];
  input: string;
  setInput: (value: string) => void;
  loading: boolean;
  error: string;
  isTyping: boolean;
  sendMessage: (text: string) => Promise<void>;
  clearMessages: () => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  showSearch: boolean;
  setShowSearch: (value: boolean) => void;
  editingMessageId: string | null;
  editText: string;
  setEditText: (value: string) => void;
  startEditingMessage: (messageId: string, content: string) => void;
  saveEditedMessage: (messageId: string) => void;
  cancelEditing: () => void;
  deleteMessage: (messageId: string, index: number) => void;
  deletedMessage: DeletedMessage | null;
  showUndo: boolean;
  undoDelete: () => void;
  searchMessages: () => Message[];
}

export const useChat = (): UseChatReturn => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const [deletedMessage, setDeletedMessage] = useState<DeletedMessage | null>(null);
  const [showUndo, setShowUndo] = useState(false);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    setError("");
    
    trackEvent('message_sent', 'Chat', `Length: ${text.length}`);
    
    const messageId = Date.now().toString();
    const userMessage: Message = { 
      role: "user", 
      content: text,
      timestamp: new Date(),
      status: "sending",
      id: messageId
    };
    
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    setIsTyping(true);
    
    // Simulate message status updates
    setTimeout(() => {
      setMessages(prev => prev.map(msg => 
        msg.id === messageId ? { ...msg, status: "sent" as const } : msg
      ));
    }, 500);
    
    setTimeout(() => {
      setMessages(prev => prev.map(msg => 
        msg.id === messageId ? { ...msg, status: "delivered" as const } : msg
      ));
    }, 1000);
    
    await new Promise(r => setTimeout(r, Math.random() * 400 + 200));
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      
      const assistantMessage: Message = { 
        role: "assistant", 
        content: data.message,
        timestamp: new Date(),
        reactions: [],
        status: "delivered",
        id: (Date.now() + 1).toString()
      };
      
      setMessages([...newMessages, assistantMessage]);
      
      // Mark user message as read when assistant responds
      setTimeout(() => {
        setMessages(prev => prev.map(msg => 
          msg.id === messageId ? { ...msg, status: "read" as const, readAt: new Date() } : msg
        ));
      }, 500);
      
      trackEvent('message_received', 'Chat', `Response length: ${data.message.length}`);
    } catch (err) {
      setError("Oi! Something broke! Sanji's gonna be mad. Try again!");
      setMessages(prev => prev.map(msg => 
        msg.id === messageId ? { ...msg, status: "sent" as const } : msg
      ));
      trackEvent('error', 'Chat', 'API Error');
    } finally {
      setLoading(false);
      setIsTyping(false);
    }
  };

  const clearMessages = () => {
    setMessages([]);
  };

  const startEditingMessage = (messageId: string, content: string) => {
    setEditingMessageId(messageId);
    setEditText(content);
    trackEvent('message_edit_start', 'Chat');
  };

  const saveEditedMessage = (messageId: string) => {
    if (!editText.trim()) return;
    
    setMessages(prev => prev.map(msg => 
      msg.id === messageId 
        ? { ...msg, content: editText, editedAt: new Date(), isEditing: false }
        : msg
    ));
    
    setEditingMessageId(null);
    setEditText("");
    trackEvent('message_edit_save', 'Chat');
  };

  const cancelEditing = () => {
    setEditingMessageId(null);
    setEditText("");
  };

  const deleteMessage = (messageId: string, index: number) => {
    const messageToDelete = messages[index];
    if (!messageToDelete) return;
    
    setDeletedMessage({ message: messageToDelete, index });
    
    setMessages(prev => prev.map(msg => 
      msg.id === messageId ? { ...msg, isDeleted: true } : msg
    ));
    
    setShowUndo(true);
    trackEvent('message_delete', 'Chat');
    
    setTimeout(() => {
      if (showUndo) {
        permanentlyDeleteMessage(messageId);
      }
    }, 5000);
  };

  const permanentlyDeleteMessage = (messageId: string) => {
    setMessages(prev => prev.filter(msg => msg.id !== messageId));
    setDeletedMessage(null);
    setShowUndo(false);
  };

  const undoDelete = () => {
    if (deletedMessage) {
      setMessages(prev => prev.map(msg => 
        msg.id === deletedMessage.message.id 
          ? { ...msg, isDeleted: false }
          : msg
      ));
      setDeletedMessage(null);
      setShowUndo(false);
      trackEvent('message_delete_undo', 'Chat');
    }
  };

  const searchMessages = () => {
    if (!searchQuery.trim()) return messages;
    
    return messages.filter(msg => 
      msg.content.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !msg.isDeleted
    );
  };

  return {
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
  };
};
