// api/latest.js

export default async function handler(req, res) {
  const channelId = "UCl1aw55WR8En2xpj0x4UIYQ"; // Your channel ID
  const apiKey = process.env.YT_API_KEY; // We'll set this up on Vercel, not in the code

  // Compose the API request
  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&order=date&maxResults=1&part=snippet&type=video`;

  const ytRes = await fetch(url);
  const data = await ytRes.json();

  res.status(200).json(data);
}
