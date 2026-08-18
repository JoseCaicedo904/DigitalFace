# DigitalFace media drop zones

Generated website assets go into the exact paths documented in
`MEDIA_GENERATION_PROMPTS.md` at the project root. The website displays a
branded placeholder until a matching file exists, then loads the image or video
automatically.

Recommended delivery formats:

- Images: optimized WebP, sRGB, no baked-in text or logos unless the prompt says otherwise.
- Videos: MP4/H.264, muted, seamless loop, 6–10 seconds, ideally below 8 MB.
- Video posters: WebP still frame matching the video's composition.
