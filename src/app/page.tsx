
"use client";

import Sidebar from "../../components/layout/Sidebar";
import Header from "../../components/layout/Header";
import ChatWindow from "../../chat/components/ChatWindow";
import ChatInput from "../../chat/components/ChatInput";
import { useChat } from "../../chat/hooks/useChat";



export default function Home() {

  const {
    messages,
    sendMessage,
  } = useChat();


  return (

    <main className="flex min-h-screen">

      <Sidebar />


      <section className="flex flex-1 flex-col">

        <Header />


        <ChatWindow
          messages={messages}
        />


        <ChatInput
          onSend={sendMessage}
        />

      </section>


    </main>

  );

}