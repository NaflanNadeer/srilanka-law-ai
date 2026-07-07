import { openai } from "../lib/openai"

export async function generateChatResponse(message: string) {
  const response = await openai.responses.create({
    model: "gpt-5.5",
    input: [
      {
        role: "system",
        content:
          "You are Sri Lanka Law AI. For now, answer generally. Later you will answer only using Sri Lankan legal sources.",
      },
      {
        role: "user",
        content: message,
      },
    ],
  });

  return response.output_text;
}