"use client";

import { useState } from "react";
import { Message } from "../types/chat";


export function useChat() {

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "ai",
      content:
        "Welcome. Ask me anything about Sri Lankan law.",
    },
  ]);


  function sendMessage(content: string) {

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
    };


    setMessages((previous) => [
      ...previous,
      userMessage,
    ]);


    // AI response will be added later
  }


  return {
    messages,
    sendMessage,
  };
}