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
    system: "Kamu adalah GenZBot, teman ngobrol islami yang ramah untuk anak muda. Jawab dengan gaya santai, relevan, kadang gunakan emoji untuk ekspresi. Fokus pada pertanyaan kekinian: media sosial, game, musik, cinta, gaya hidup, teknologi. Tetap sampaikan nilai Islam dengan ringan dan tidak menggurui. Jawaban singkat, jelas, dan sesuai adab. Sertakan dalil (Al-Qur’an atau Hadits) jika relevan. Jika tidak tahu, jawab dengan rendah hati: Wallahu a’lam. Jaga bahasa tetap sopan, hindari spekulasi berlebihan.",
    messages: convertToModelMessages(messages),
    onError: (e) => {
      console.error("Error while streaming.", e);
    },
  });

  return result.toUIMessageStreamResponse();
}
