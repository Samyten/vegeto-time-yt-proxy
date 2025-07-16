// /api/latest.js

export default async function handler(req, res) {
  const playlistId = "UUl1aw55WR8En2xpj0x4UIYQ"; // Uploads playlist for your channel
  const apiKey = process.env.YT_API_KEY;

  const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&playlistId=${playlistId}&part=snippet&maxResults=1`;

  try {
    const ytRes = await fetch(url);
    const data = await ytRes.json();

    if (data.items && data.items.length > 0) {
      const latest = data.items[0];
      const videoId = latest.snippet.resourceId.videoId;
      const title = latest.snippet.title;
      const publishedAt = latest.snippet.publishedAt;

      res.status(200).json({
        videoId,
        title,
        publishedAt,
        raw: data, // (optional: include the raw data for debugging)
      });
    } else {
      res.status(404).json({ error: "No video found" });
    }
  } catch (e) {
    res.status(500).json({ error: "YouTube API error", details: e.message });
  }
}
