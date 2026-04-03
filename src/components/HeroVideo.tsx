import React, { useRef, useState } from "react";

interface HeroVideoProps {
  videoUrl: string;
}

const HeroVideo: React.FC<HeroVideoProps> = ({ videoUrl }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Como tem autoplay, o estado inicial é 'true'
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    // O aspect-[5/4] aplica no mobile e o md:aspect-[21/9] a partir de telas médias (desktop)
    <div className="relative w-full max-w-[1920px] mx-auto aspect-[5/4] md:aspect-[21/9] bg-gray-900 overflow-hidden">
      {/* Vídeo */}
      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Botão Play/Pause no canto inferior esquerdo */}
      <button
        onClick={togglePlayPause}
        className="absolute bottom-4 left-4 w-8 h-8 flex items-center justify-center bg-black/50 text-white rounded-full backdrop-blur-sm hover:bg-black/70 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label={isPlaying ? "Pausar" : "Reproduzir"}
      >
        {isPlaying ? (
          // Ícone de Pause
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          // Ícone de Play (com margin-left para alinhar visualmente o triângulo no centro)
          <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default HeroVideo;
