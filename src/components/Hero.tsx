import { useState } from "react";
import { motion } from "framer-motion";
import {ReactTyped} from "react-typed"; // Importing ReactTyped
import confetti from "canvas-confetti"; // Importing ReactConfetti

export default function Hero() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 14;

  const Phrases = [
    "no",
    "are you sure?",
    "stop being stinky!",
    "are u fr rn.",
    "stop pressing this >:(",
    "Say yes rn.",
    "pls",
    "fuk u 🖕",
    "fuk u 🖕🖕",
    "stawpit 🥺",
  ];

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return Phrases[Math.min(noCount, Phrases.length - 1)];
  }

  const handleYesClick = () => {
    setYesPressed(true);

    // Trigger the confetti effect
    confetti({
      particleCount: 200, // Number of confetti particles
      spread: 70,         // How far the confetti spreads
      origin: { y: 0.6 }, // Origin of the confetti (adjust for where it starts)
    });
  };

  return (
    <div 
      className="flex flex-col items-center justify-center h-screen bg-pink-100 font-sans"
      style={{ backgroundImage: 'url("/back.png")', backgroundSize: 'cover' }}
    >
      {/* Typewriter Effect for initial typing & backspacing */}
      {!yesPressed && (
        <ReactTyped
          strings={[
            "Hey x,",
            "I know you've been waiting for this...",
            "Will you be my Valentine? :3",
          ]}
          typeSpeed={50}
          backSpeed={20}
          className="text-red-700 text-3xl font-bold text-center"
        />
      )}

      {yesPressed ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <img 
            alt="gif"
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDgzdm43Ym1jdjFvaTg0Mmc4NnM1dmpmM3NjanF1NDJxdWJ0OXUycSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/n3fRJJ6ovpKSpVhZX8/giphy.gif" 
          />
          <div className="text-xl font-bold mt-4">YAY I LOVE YOUUU! </div>
          <div>ur booked on the 14th now! {'>'}:D </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 8.3 }}  // Syncs with typing animation
          className="text-center"
        >
          <img 
            alt="gif" 
            src="https://media1.tenor.com/m/vDnz6cX_JdkAAAAC/%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B9%84%E0%B8%A1%E0%B9%89-flowers.gif"
            style={{ width: 300 , height: 300, paddingTop: '20px' }}
          />
          <div className="mt-4">
            {/* Yes Button */}
            <motion.button
              className="yesButton px-6 py-4 rounded-lg transition-all text-white bg-green-500 hover:bg-green-600"
              animate={{ fontSize: yesButtonSize, scaleY: 1.1, scaleX: 1.2 }}  // Adjust button size and scaling
              onClick={handleYesClick}  // Trigger confetti when clicked
              whileTap={{ scale: 0.95 }}  // Button tap effect
            >
              yes
            </motion.button>
            
            {/* No Button */}
            <button
              onClick={handleNoClick}
              className="noButton px-6 py-4 rounded-lg transition-all text-white bg-red-500 hover:bg-red-600"
            >
              {getNoButtonText()}
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
