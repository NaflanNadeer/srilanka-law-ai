"use client";

import MessageBubble from "./MessageBubble";
import { Message } from "../types/chat";


type Props = {
  messages: Message[];
};


export default function ChatWindow({
  messages,
}: Props) {


  return (

    <div className="flex-1 overflow-y-auto p-6">

      {messages.map((message) => (

        <MessageBubble
          key={message.id}
          role={message.role}
          message={message.content}
        />

      ))}

    </div>

  );

}