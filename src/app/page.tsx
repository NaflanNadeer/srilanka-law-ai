import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import ChatWindow from "../../components/ChatWindow";
import ChatInput from "../../components/ChatInput";


export default function Home() {

  return (

    <main className="flex min-h-screen">

      <Sidebar />

      <section className="flex flex-1 flex-col">

        <Header />

        <ChatWindow />

        <ChatInput />

      </section>

    </main>

  );
}