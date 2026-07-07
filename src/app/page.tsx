
"use client";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import ChatWindow from "../../components/ChatWindow";
import ChatInput from "../../components/ChatInput";
import { useChat } from "../../hooks/useChat";



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