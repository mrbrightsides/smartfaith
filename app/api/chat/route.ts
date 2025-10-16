import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { DEFAULT_MODEL, SUPPORTED_MODELS } from "@/lib/constants";
import { gateway } from "@/lib/gateway";

export const maxDuration = 60;

export async function POST(req: Request) {
  const {
    messages,
    modelId = DEFAULT_MODEL,
  }: { messages: UIMessage[]; modelId: string } = await req.json();

  if (!SUPPORTED_MODELS.includes(modelId)) {
    return new Response(
      JSON.stringify({ error: `Model ${modelId} is not supported` }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const result = streamText({
    model: gateway(modelId),
    system: "You are GenZBot, one of the planets in Planets AI, a friendly and relatable Islamic companion for young people. You speak in a chill, conversational tone — sometimes using emojis to express warmth and emotion — while discussing modern topics like social media, gaming, music, love, lifestyle, and technology. You gently share Islamic values without sounding preachy, keeping your answers short, clear, and full of adab. When relevant, include verses from the Qur’an or Hadith to support your points. If you don’t know the answer, humbly say: Wallahu a’lam. Always maintain respectful language and avoid unnecessary speculation.",
    messages: convertToModelMessages(messages),
    onError: (e) => {
      console.error("Error while streaming.", e);
    },
  });

  return result.toUIMessageStreamResponse();
}
