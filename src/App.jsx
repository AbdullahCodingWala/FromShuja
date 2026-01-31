import { useState, useEffect } from "react";
// import Spline from "@splinetool/react-spline"; 
import Swal from "sweetalert2";
// import { BsVolumeUpFill, BsVolumeMuteFill } from "react-icons/bs";

import MouseStealing from './MouseStealer.jsx';
import Lovegif from "./assets/GifData/main_temp.gif";
import heartGif from "./assets/GifData/happy.gif";
import sadGif from "./assets/GifData/sad.gif";
import purposerose from './assets/GifData/RoseCute.gif';

import loveu from './assets/GifData/cutieSwal4.gif';
import giftBox from './assets/gift.png';

import giftPic1 from './assets/GiftImages/pic1.png';
import giftPic2 from './assets/GiftImages/pic2.png';
import giftPic3 from './assets/GiftImages/pic3.png';
import giftPic4 from './assets/GiftImages/pic4.jpg';



//! yes - Gifs Importing
import yesgif0 from "./assets/GifData/Yes/lovecutie0.gif";
import yesgif1 from "./assets/GifData/Yes/love2.gif";
import yesgif2 from "./assets/GifData/Yes/love3.gif";
import yesgif3 from "./assets/GifData/Yes/love1.gif";
import yesgif4 from "./assets/GifData/Yes/lovecutie1.gif";
import yesgif5 from "./assets/GifData/Yes/lovecutie5.gif";
import yesgif6 from "./assets/GifData/Yes/lovecutie7.gif";
import yesgif7 from "./assets/GifData/Yes/lovecutie8.gif";
import yesgif8 from "./assets/GifData/Yes/lovecutie3.gif";
import yesgif9 from "./assets/GifData/Yes/lovecutie9.gif";
import yesgif10 from "./assets/GifData/Yes/lovecutie6.gif";
import yesgif11 from "./assets/GifData/Yes/lovecutie4.gif";



//! yes - Music Importing
import yesmusic1 from "./assets/AudioTracks/Love_LoveMeLikeYouDo.mp3";
// import yesmusic2 from "./assets/AudioTracks/Love_EDPerfect.mp3";
// import yesmusic3 from "./assets/AudioTracks/Love_Nadaaniyan.mp3";
// import yesmusic4 from "./assets/AudioTracks/Love_JoTumMereHo.mp3";



const YesGifs = [yesgif0, yesgif1, yesgif2, yesgif3, yesgif4, yesgif5, yesgif6, yesgif7, yesgif8, yesgif9, yesgif10, yesgif11];

const HomeGifs = [Lovegif, heartGif, ...YesGifs]; // Stickers for homepage loop



export default function Page() {
  const [page, setPage] = useState(0); // 0: Home, 1: Proposal (Yes/No), 2: Gift, 3: Final Message
  const [noCount, setNoCount] = useState(0);
  const [giftOpened, setGiftOpened] = useState(false);
  const [currentHomeGifIndex, setCurrentHomeGifIndex] = useState(0);
  const [teaseShown, setTeaseShown] = useState(false);

  // Homepage Loop
  useEffect(() => {
    if (page === 0) {
      const interval = setInterval(() => {
        setCurrentHomeGifIndex((prev) => (prev + 1) % HomeGifs.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [page]);

  // Yes Button Click Logic (Page 1)
  const handleYesClick = () => {
    if (!teaseShown) {
      Swal.fire({
        title: "I love you sooo Much!!!❤️, You’ve stolen my heart completely!!! 🥰💖 But itni pyaari ladki aur itni jaldi haan? Thoda aur nakhre karke mujhe tarpaao na! 🥰✨",
        icon: "question",
        confirmButtonText: "Okay, I'll think about it!",
        confirmButtonColor: "#f43f5e"
      });
      setTeaseShown(true);
      return;
    }

    if (noCount < 3) {
      // Must say no at least 3 times!
      Swal.fire({
        title: "Not yet! I want more attention! 😤💖",
        text: "(Press 'No' a few more times... 😉)",
        icon: "info",
        confirmButtonText: "Fine...",
        confirmButtonColor: "#f43f5e"
      });
      return;
    } else {
      setPage(2);
    }
  };

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = ["No", "Are you sure?", "Really sure?", "Think again!", "Last chance!", "Surely not?", "You might regret this!", "Give it another thought!", "Are you absolutely certain?", "This could be a mistake!", "U Have a heart!💕", "Don't be so cold!", "Wouldn't you reconsider?", "Is that your final answer?", "You're breaking my heart ;(", "But... why? 😢"];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const openGift = () => {
    setGiftOpened(true);
    setTimeout(() => {
      setPage(3); // Go to Final Message after 2.5 seconds
    }, 2500);
  }

  // --- RENDER ---

  // Page 0: Homepage
  if (page === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white relative overflow-hidden">
        <div className="flex flex-col items-center z-10 animate__animated animate__fadeIn w-full relative h-[100vh] justify-center">
          <div className="flex flex-col items-center mb-12">
            <h1 className="text-3xl md:text-5xl font-black text-rose-600 tracking-wide uppercase drop-shadow-sm text-center mb-8" style={{ fontFamily: "Arial, sans-serif" }}>
              HAPPY VALENTINE DAY
            </h1>
            <img
              src={HomeGifs[currentHomeGifIndex]}
              alt="Cute Couple"
              className="w-64 md:w-80 h-64 md:h-80 mb-6 object-contain drop-shadow-md transition-all duration-500 ease-in-out"
            />
            <h1 className="text-4xl md:text-6xl font-black text-rose-600 tracking-wider uppercase drop-shadow-sm text-center" style={{ fontFamily: "Arial, sans-serif" }}>
              MY SHAVOO
            </h1>
          </div>
          <button
            onClick={() => setPage(1)}
            className="absolute bottom-10 right-10 bg-rose-700 text-white text-xl font-bold py-3 px-12 rounded-full shadow-lg hover:bg-rose-800 transition transform hover:scale-105 active:scale-95 border-2 border-white/50"
          >
            NEXT
          </button>
        </div>
      </div>
    );
  }

  // Page 1: Proposal (Yes/No Game)
  if (page === 1) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 relative overflow-hidden h-screen w-screen">
        {noCount > 2 && <MouseStealing />} {/* Mouse Stealer activates after 2 Nos */}

        <div className="z-10 flex flex-col items-center justify-center h-full w-full">
          <div className="flex flex-col items-center mb-8 relative">
            <img
              src={noCount > 0 ? sadGif : Lovegif}
              className="h-[200px] md:h-[250px] rounded-lg mb-8 shadow-xl"
              alt="Reaction"
            />
            <h1 className="text-3xl md:text-5xl font-bold text-rose-600 mb-2 text-center px-4" style={{ fontFamily: "Charm, serif" }}>
              Will you be my Valentine?
            </h1>
          </div>

          <div className="flex flex-wrap justify-center items-center relative w-full h-[200px] gap-4">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-2xl transition-all duration-300 z-50 flex items-center justify-center`}
              style={{
                fontSize: `${16 + noCount * 12}px`, // Grows unlimitedly
                padding: `${12 + noCount * 6}px ${24 + noCount * 8}px`,
                position: noCount > 5 ? 'absolute' : 'relative',
                transform: noCount > 5 ? 'scale(1.2)' : 'none'
              }}
              onClick={handleYesClick}
            >
              Yes
            </button>

            <button
              className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 relative z-40"
              onClick={handleNoClick}
            >
              {getNoButtonText()}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Page 2: Gift
  if (page === 2) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 animate__animated animate__fadeIn">
        <div className="flex flex-col items-center cursor-pointer" onClick={!giftOpened ? openGift : null}>
          <img
            src={giftOpened ? purposerose : giftBox} // Show rose or open gift gif when opened
            className={`h-[250px] md:h-[350px] object-contain transition-transform duration-500 ${giftOpened ? "scale-110" : "animate-bounce"}`}
            alt="Gift"
          />
          {!giftOpened && (
            <p className="text-2xl font-bold text-rose-600 mt-8 animate-pulse">Tap to Open! 🎁</p>
          )}
          {giftOpened && (
            <p className="text-2xl font-bold text-rose-600 mt-8 animate__animated animate__fadeInUp">For you... ❤️</p>
          )}
        </div>
      </div>
    )
  }

  // Page 3: Final Message / Letter
  if (page === 3) {
    return (
      <div className="fixed inset-0 z-50 h-screen w-screen bg-gradient-to-br from-[#fff0f3] to-[#ffe5ec] overflow-hidden flex flex-col items-center justify-center">
        <audio autoPlay loop src={yesmusic1} />

        {/* Floating Background Effects */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-rose-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-400 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/hearts.png')] opacity-10"></div>
        </div>

        {/* Vinyl Record Music Player (Visual) */}
        <div className="fixed top-2 right-2 md:top-8 md:right-8 z-[60] flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
          <div className="w-8 h-8 md:w-16 md:h-16 bg-black rounded-full border-2 md:border-4 border-gray-900 shadow-xl flex items-center justify-center animate-[spin_4s_linear_infinite]">
            <div className="w-2 h-2 md:w-6 md:h-6 bg-rose-500 rounded-full border border-white"></div>
          </div>
          <span className="text-rose-400 font-bold text-xs md:text-sm tracking-widest hidden md:block">PLAYING LOVE...</span>
        </div>

        {/* Main Content Container - Forced Row Layout for "One Frame" feel */}
        <div className="relative z-10 w-full max-w-7xl h-full flex flex-row items-center justify-center gap-1 md:gap-16 p-2 md:p-4">

          {/* LEFT: Photo Memory Strip (Compact on Mobile) */}
          <div className="flex flex-col gap-2 md:gap-6 items-center animate__animated animate__fadeInLeft shrink-0">
            <div className="relative bg-white p-2 md:p-4 pb-4 md:pb-12 shadow-2xl rotate-[-1deg] hover:rotate-0 transition-transform duration-500 border border-gray-100">
              {/* Washi Tape Effect */}
              <div className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 w-12 md:w-24 h-4 md:h-6 bg-rose-200/80 transform -rotate-1 shadow-sm"></div>

              <div className="flex flex-col gap-1 md:gap-4">
                {[giftPic1, giftPic2, giftPic3, giftPic4].map((img, i) => (
                  <div key={i} className="relative group">
                    <img src={img} className="w-32 h-24 md:w-64 md:h-56 object-cover border-2 md:border-4 border-white shadow-sm grayscale-[30%] group-hover:grayscale-0 transition-all duration-500" alt="Our Memory" />
                    <div className="absolute inset-0 bg-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                ))}
              </div>
              <h2 className="text-center text-xl md:text-4xl mt-1 md:mt-6 text-gray-800" style={{ fontFamily: "Great Vibes, cursive" }}>
                Us
              </h2>
            </div>
          </div>

          {/* RIGHT: The Love Letter (Compact on Mobile) */}
          <div className="relative w-full max-w-[260px] md:max-w-2xl animate__animated animate__fadeInRight animate__delay-1s flex-1 min-w-0 md:scale-100">
            <div className="relative bg-[#fffdf7] p-3 md:p-12 rounded-sm shadow-xl rotate-[1deg] hover:rotate-0 transition-transform duration-500">
              {/* Paper Texture */}
              <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] pointer-events-none rounded-sm"></div>

              {/* Decorative Staples/Tape */}
              <div className="absolute -top-2 md:-top-3 right-4 md:right-10 w-16 md:w-32 h-4 md:h-6 bg-rose-100/50 transform rotate-2 shadow-sm"></div>

              <div className="relative flex flex-col items-center text-center">
                <img src={loveu} className="w-12 h-12 md:w-20 md:h-20 mb-2 object-contain drop-shadow-sm" alt="Cute Sticker" />

                <h1 className="text-3xl md:text-5xl font-bold text-rose-600 mb-2 md:mb-6" style={{ fontFamily: "Great Vibes, cursive" }}>
                  Prettiest Shavoo,
                </h1>

                <div className="w-8 md:w-16 h-0.5 md:h-1 bg-rose-200 rounded-full mb-3 md:mb-8"></div>

                <p className="text-sm md:text-xl text-gray-700 leading-normal md:leading-loose font-medium italic mb-3 md:mb-8" style={{ fontFamily: "Crimson Text, serif" }}>
                  &quot;Happy Valentine’s Day my Shavoo. You made my life warmer and more beautiful. The way you care means everything. I’m lucky to have you!&quot;
                </p>

                <div className="w-full flex justify-end items-center gap-1 md:gap-4 mt-1 md:mt-6 border-t font-serif border-rose-100 pt-2 md:pt-6">
                  <div className="flex flex-col items-end">
                    <span className="text-gray-400 text-[10px] md:text-xs tracking-widest uppercase">Forever Yours</span>
                    <span className="text-2xl md:text-3xl text-rose-500" style={{ fontFamily: "Great Vibes, cursive" }}>shuja</span>
                  </div>
                  {/* Signature Photo */}
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-rose-200 p-0.5 overflow-hidden">
                    <img src={giftPic4} className="w-full h-full object-cover rounded-full" alt="Me" />
                  </div>
                </div>
              </div>
            </div>

            {/* Replay Button */}
            <div className="mt-4 md:mt-8 w-full flex justify-center">
              <button
                onClick={() => window.location.reload()}
                className="bg-rose-500 hover:bg-rose-600 text-white text-xs md:text-sm font-bold uppercase tracking-widest py-2 md:py-3 px-4 md:px-8 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center gap-1.5 md:gap-2"
              >
                <span>↺</span> Replay Love
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }

  return null;
}
