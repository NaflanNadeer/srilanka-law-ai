import { NextResponse } from "next/server";
import { generateChatResponse } from "../../../../chat/services/chat.service";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { message } = body;

    if (!message) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const response = await generateChatResponse(message);

    return NextResponse.json({
      response,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}