"use client";

import Script from "next/script";

export default function TenorGif() {
  return (
    <>
      <div
        className="tenor-gif-embed"
        data-postid="11392563176292764275"
        data-share-method="host"
        data-aspect-ratio="1"
        data-width="100%"
      >
        <a href="https://tenor.com/view/doyoumoose-do-you-moose-do-you-moose-moose-moosie-gif-11392563176292764275">
          Doyoumoose GIF
        </a>
      </div>

      <Script
        src="https://tenor.com/embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}
