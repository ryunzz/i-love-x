'use client';

import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [noClickCount, setNoClickCount] = useState(0);
  const [isGifLoaded, setIsGifLoaded] = useState(false);
  const gifRef = useRef(null);

  const Phrases = [
    "no",
    "are you sure?",
    "stop being stinky!",
    "are u fr rn.",
    "stop pressing this bruh",
    "Say yes rn mf.",
    "fuk u 🖕"
  ];

  const handleNoClick = () => {
    setNoClickCount(prev => prev + 1);
  };

  const handleYesClick = () => {
    alert("ur booked on the 14th now! :3");
  };

  useEffect(() => {
    // Delay GIF size manipulation to after component mount
    setIsGifLoaded(true);

    // Adjust GIF size once Tenor GIF loads
    const interval = setInterval(() => {
      if (gifRef.current && gifRef.current.querySelector('iframe')) {
        // Resize the iframe of Tenor GIF
        const iframe = gifRef.current.querySelector('iframe');
        iframe.style.width = '200px';  // Set width here
        iframe.style.height = 'auto';  // Preserve aspect ratio
        clearInterval(interval);
      }
    }, 100); // Check every 100ms until it loads

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-center">
      {/* Conditionally render the GIF */}
      {isGifLoaded && (
        <div 
          className="tenor-gif-embed mb-8" // Add margin-bottom to space out the GIF from the text
          data-postid="7355347396987361923" 
          data-share-method="host" 
          data-aspect-ratio="1.23333" 
          data-width="100%"
          style={{
            width: '200px',  // Make sure the GIF is small
            height: 'auto',   // Keep aspect ratio intact
            maxWidth: '200px', // Ensure it does not grow too large
            maxHeight: '200px', // Keep the height small
            marginBottom: '20px', // Optional: add spacing between the GIF and text
          }}
          ref={gifRef}
        >
          <a href="https://tenor.com/view/mocha-bear-hearts-mocha-and-milk-bears-milk-mocha-bear-gif-love-gif-7355347396987361923">
            Mocha Bear Hearts Sticker
          </a> from 
          <a href="https://tenor.com/search/mocha+bear-stickers">Mocha Bear Stickers</a>
        </div>
      )}

      {/* Embed Tenor script only after the GIF is loaded */}
      {isGifLoaded && (
        <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
      )}

      <h1 className="text-4xl font-bold mb-8 text-black">Yuni, will you be my Valentine? :3</h1>
      <div className="flex gap-4">
        <button
          className="bg-green-500 text-white font-bold py-2 px-4 rounded transition-all text-lg hover:bg-green-600"
          onClick={handleYesClick}
        >
          Yes
        </button>
        <button
          className="bg-red-500 text-white font-bold py-2 px-4 rounded text-lg hover:bg-red-600"
          onClick={handleNoClick}
        >
          {Phrases[Math.min(noClickCount, Phrases.length - 1)]}
        </button>
      </div>
    </div>
  );
}
