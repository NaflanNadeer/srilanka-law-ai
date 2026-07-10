"use client";

import { useState } from "react";


type Props = {
  onSend: (message: string) => void;
};


export default function ChatInput({
  onSend,
}: Props) {


  const [input, setInput] = useState("");


  function handleSubmit() {

    if (!input.trim()) return;


    onSend(input);

    setInput("");

  }


  return (

    <div className="border-t p-4 flex gap-3">

      <input

        value={input}

        onChange={(e)=>setInput(e.target.value)}

        placeholder="Ask a question about Sri Lankan law..."

        className="flex-1 rounded-lg border p-3"

      />


      <button

        onClick={handleSubmit}

        className="rounded-lg bg-blue-600 px-5 text-white"

      >

        Send

      </button>

    </div>

  );

}