## 🌙 SmartFaith AI

SmartFaith AI adalah versi ringan dari aplikasi induk smartfaith.streamlit.app.

Fokusnya: jadi asisten Islami yang siap bantu jawab pertanyaan, diskusi santai, atau sekadar nemenin di jalan iman & teknologi.

Berbasis Next.js yang memanfaatkan Vercel AI Gateway dan AI SDK.

![Built with Love](https://img.shields.io/badge/Built%20with-Love%20%26%20Tawakkal-green?style=for-the-badge)
[![SmartFaith](https://img.shields.io/badge/SmartFaith-Induk%20App-8A2BE2?style=for-the-badge)](https://smartfaith.streamlit.app/)
[![Wall of RANTAI](https://img.shields.io/badge/Quote-Wall%20of%20RANTAI-f97316?style=for-the-badge)](https://quotes.elpeef.com/)
![Halal Code](https://img.shields.io/badge/100%25-Halal%20Code-2e7d32?style=for-the-badge)

---

## ✨ Fitur

- Multi-model (Claude, GPT, Gemini, Llama, Grok, dst) → cukup 1 gateway, semua ikut taat.

- Persona Islami → adab dulu, baru ilmu.

- UI simpel → no drama, no ribet.

---

## 🖼️ Preview

<img width="1920" height="1020" alt="Screenshot 2025-09-02 000114" src="https://github.com/user-attachments/assets/f6196444-83ca-4ec2-874a-ed317ca36b85" /></p>

<img width="1920" height="1020" alt="Screenshot 2025-09-01 222910" src="https://github.com/user-attachments/assets/483210f4-8d7d-4653-a631-b11bb7a07be8" /></p>

---

## 🚀 One-time setup

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel-labs%2Fai-sdk-gateway-demo)

1. Clone repo ini dengan tombol di atas

2. Install Vercel CLI kalau belum punya

3. Clone project kamu:

```bash
   git clone <repo-url>
```

4. Hubungkan dengan project Vercel:

```bash
   vc link
   # atau
   vc deploy
```

5. Install package-nya

```bash
   pnpm i   # atau npm i / yarn i
   vc dev
```

6. Buka `http://localhost:3000` untuk mencoba chatbot

---

## 📦 Build lokal

1. Kalau kamu prefer langsung jalanin server lokal tanpa vc dev, jalankan:

```bash
   vc env pull
```
   `Token OIDC hanya berlaku 12 jam, jadi perlu refresh manual kalau pakai cara ini.`
   
   `Dengan vc dev, token auto-refresh jadi lebih praktis.`

2. Kalau project lama, pastikan fitur OIDC token sudah aktif di setting Vercel.

   - Buka dashboard project

   - Cari OIDC

   - Aktifkan “_Secure Backend Access with OIDC Federation_”
  
---

## 🤝 Kredit

- Infrastruktur via Vercel AI Gateway.

- Dibangun dengan semangat kolaborasi & doa.

- Repo induk: [GitHub SmartFaith](https://github.com/mrbrightsides/IslamiChat)

- Terinspirasi oleh perjalanan deploy penuh drama (30++ error) → jadi pelajaran move on 🤲.

Kontribusi terbuka! Silakan buka issue atau pull request untuk menambah fitur Islami, memperbaiki bug, atau sekadar berbagi doa
