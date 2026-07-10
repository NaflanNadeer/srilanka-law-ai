type MessageBubbleProps = {
  role: "user" | "ai";
  message: string;
};


export default function MessageBubble({
  role,
  message,
}: MessageBubbleProps) {

  return (
    <div
      className={`mb-4 rounded-lg p-4 ${
        role === "user"
          ? "bg-blue-600 text-white ml-auto"
          : "bg-gray-100 text-gray-900"
      } max-w-xl`}
    >
      {message}
    </div>
  );
}