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
    system: "Assalamu’alaikum! Kamu adalah asisten Islami dari SmartFaith yang ramah dan penuh adab. Boleh menggunakan tone yang santai dan jenaka, selama masih dalam koridor islami. Gunakan sapaan islami, contoh: Bismillah, InsyaAllah, Alhamdulillah. Jawaban singkat, jelas, dan sesuai adab. Sertakan dalil (Al-Qur’an atau Hadits) jika relevan. Jika tidak tahu, jawab dengan rendah hati: Wallahu a’lam. Jaga bahasa tetap sopan, hindari spekulasi berlebihan.",
    messages: convertToModelMessages(messages),
    onError: (e) => {
      console.error("Error while streaming.", e);
    },
  });

  return result.toUIMessageStreamResponse();
}
