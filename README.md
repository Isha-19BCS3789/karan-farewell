# Karan.exe — Farewell Website

A polished, static farewell website for Karan from Reporting, GS.

## Preview locally

You can double-click `index.html`, but videos may behave more reliably through a local server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy with Vercel

1. Create a new GitHub repository.
2. Upload **the contents of this folder** to the repository root.
3. Sign in to Vercel with GitHub.
4. Click **Add New → Project**.
5. Import the repository.
6. Leave **Framework Preset** as `Other`.
7. Leave Build Command empty.
8. Leave Output Directory empty.
9. Click **Deploy**.

Vercel will publish it as a static site and give you a live URL.

## Replace the final signature video

The final ending uses:

`assets/videos/final-line.mp4`

To replace it:

1. Rename your desired video to `final-line.mp4`.
2. Replace the existing file in `assets/videos/`.
3. Commit and push the change to GitHub.
4. Vercel redeploys automatically.

For best loading performance, use MP4 (H.264 video + AAC audio), ideally under 25 MB.

## Change text

Open `index.html` in any text editor. Search for:
- `Karan.exe`
- `Reporting: GS`
- `16 JULY 2026`
- the quotes and farewell message

## Add photos

1. Put the image in `assets/photos/`.
2. Copy one of the `<figure class="memory">...</figure>` blocks in `index.html`.
3. Update the image path, alt text, caption, and `data-caption`.

## Project structure

- `index.html` — content and sections
- `styles.css` — full visual design and responsive layout
- `script.js` — boot animation, terminal, gallery, ending video and confetti
- `assets/photos/` — images
- `assets/videos/` — videos

No npm installation or build step is required.
