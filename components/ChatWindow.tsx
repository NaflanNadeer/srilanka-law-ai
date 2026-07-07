import MessageBubble from "./MessageBubble";


export default function ChatWindow() {

  return (
    <div className="flex-1 p-6">

      <MessageBubble
        role="ai"
        message="Welcome. Ask me anything about Sri Lankan law."
      />

      <MessageBubble
        role="user"
        message="Can an employer terminate an employee without notice?"
      />

    </div>
  );
}