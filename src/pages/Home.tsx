import React from "react";
import HeroVideo from "../components/HeroVideo";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen">
      <HeroVideo videoUrl="./videos/herovideo.mp4" />

      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-playfair mb-4">
            Elegância em cada detalhe
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra a curadoria exclusiva da Vicenzo, onde a tradição encontra
            o design contemporâneo em peças atemporais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className=" aspect-[3/4] flex items-center justify-center overflow-hidden">
            <img
              src="images/bag-hanging-from-furniture-item-indoors.jpg"
              alt=""
              className="w-[100%] transition duration-500 ease-in-out hover:scale-110"
            />
          </div>
          <div className=" aspect-[3/4] flex items-center justify-center overflow-hidden">
            <img
              src="images/bota.webp"
              alt=""
              className="w-[100%] transition duration-500 ease-in-out hover:scale-110"
            />
          </div>
          <div className=" aspect-[3/4] flex items-center justify-center overflow-hidden">
            <img
              src="images/outono1.jpg"
              alt=""
              className="w-[100%] transition duration-500 ease-in-out hover:scale-110"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
