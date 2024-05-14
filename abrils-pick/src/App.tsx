import React, { useEffect, useState } from "react";

import "./App.css";

const options = [
  {
    title: "Opción 1",
    description:
      "Experiencia de una noche de alojamiento en luxury glamping, con hermosa vista, desayuno incluido, asado en la noche, + more",
  },
  {
    title: "Opción 2",
    description:
      "Bono que completa para rack de pesas e instrumentos de gimnasio, + more",
  },
  {
    title: "Opción 3",
    description:
      "Bono de que completa para introducir a ragnar a tu vida, + more",
  },
];

const App = () => {
  const [showCards, setShowCards] = useState(false);
  const [showOpt1, setShowOpt1] = useState(false);
  const [showOpt2, setShowOpt2] = useState(false);
  const [showOpt3, setShowOpt3] = useState(false);

  return (
    <div className="bg-fuchsia-400 h-screen px-4 !font-mono">
      {!showCards ? (
        <div className="py-6 max-w-800 m-auto text-yellow-500">
          <h1 className="text-6xl font-extrabold mx-auto text-center mt-12 mb-6 font-mono">
            FELIZ CUMPLE!!
            <br />
          </h1>
          <span className="pt-8 text-6xl mx-auto mb-12 block text-center">
            🥳 🎉
          </span>

          <p className="text-black text-lg font-bold pb-4">
            Admiro demasiado tu fuerza tu, tu voluntad, tu determinacion y ganas
            de comerte el 🌎! Me siento demasiado afortunada de tenerte en mi
            vida, pues no solo me encantas por la persona q soy cuando estoy
            contigo, pero me fascina la persona que eres.
          </p>
          <p className="text-black text-lg font-bold pb-4">
            Aprendo cada dia mas de ti y de como ves el mundo, y me llenas de
            ganas y motivacion para ser mejor persona cada dia.
          </p>
          <p className="text-black text-lg font-bold pb-4">
            Espero que este dia sea tan especial y lleno de magia como tu ✨, y
            que te sientas extremadamente feliz, amado y bendecido, que la vida
            solo te regale las mejores sonrisas en cada uno de los dias q se
            vienen, y que cada uno de tus propositos los alcances sin tropiezos.
          </p>

          <p className="text-black text-lg font-bold pb-4">
            El cielo es el limite para ti bebe, y estoy segura que lo que se te
            viene es solo lo mejor de lo mejor, por que no hay nadie mas
            merecedor de todo lo bueno que tu.
          </p>

          <p className="text-black text-xl font-bold pb-4 text-center">
            TE QUIERO TANTO!! 🥰
          </p>

          <button
            className="bg-cyan-400 text-black w-60 h-11 b font-bold rounded-md border-black border-2 m-auto block active:border-4 hover:bg-cyan-500"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setShowCards(!showCards);
            }}
          >
            Click me 👀
          </button>
        </div>
      ) : (
        <div className="py-3">
          <button
            onClick={() => setShowCards(!showCards)}
            className="bg-cyan-400 py-1 ml-3 px-3  rounded-md border-black border-2 active:outline-black active:border-4 hover:bg-cyan-500 hover:text-black"
          >
            <span className="font-2xl">←</span>
          </button>
          <p className="text-black text-lg font-bold my-8 max-w-800 m-auto">
            En un intento de ser creativa y darte una sorpresa en tu dia (Que no
            sera ni tan sorpresa despues de todo 🥲), he creado 3 opciones para
            que elijas la que mas te guste, y asi poder disfrutar de un 🎁 que
            vaya mas acorde a ti y que te haga sentir mas especial y a gusto.
          </p>
          <div className="flex gap-5 flex-col pb-14 lg:flex-row lg:w-80 lg:m-auto lg:mt-20">
            {/* Option 1 */}
            <button
              onClick={() => setShowOpt1(!showOpt1)}
              className="bg-cyan-400 text-black w-80 !lg:h-78 mx-auto py-8 lg:py-12 px-8 rounded-md border-black border-2 active:border-4"
            >
              {showOpt1 ? (
                <>
                  <h2 className="text-black text-3xl mb-14 font-bold">
                    {options[0].title}
                  </h2>
                  <p className="text-black text-xl mb-20 font-bold">
                    {options[0].description}
                    <br />
                  </p>
                  <span className="pt-8 text-5xl">🏕️</span>
                </>
              ) : (
                <div className="flex gap-1 lg:gap-5 flex-col">
                  <h2 className="text-black text-3xl font-bold">
                    {options[0].title}
                  </h2>
                  <span className="lg:mt-15 text-xl lg:text-5xl">🔮</span>
                </div>
              )}
            </button>
            {/* Option 2 */}
            <button
              onClick={() => setShowOpt2(!showOpt2)}
              className="bg-cyan-400 text-black w-80 !lg:h-78 mx-auto py-8 lg:py-12 px-8 rounded-md border-black border-2 active:border-4"
            >
              {showOpt2 ? (
                <>
                  <h2 className="text-black text-3xl mb-14 font-bold">
                    {options[1].title}
                  </h2>
                  <p className="text-black text-xl mb-20 font-bold">
                    {options[1].description}
                    <br />
                  </p>
                  <span className="pt-8 text-5xl">🏋️</span>
                </>
              ) : (
                <div className="flex gap-1 flex-col">
                  <h2 className="text-black text-3xl font-bold">
                    {options[1].title}
                  </h2>
                  <span className="lg:mt-15 text-xl lg:text-5xl">🪄</span>
                </div>
              )}
            </button>
            {/* Option 3 */}
            <button
              onClick={() => setShowOpt3(!showOpt3)}
              className="bg-cyan-400 text-black w-80 !lg:h-78 mx-auto py-8 lg:py-12 px-8 active:border-4 rounded-md border-black border-2"
            >
              {showOpt3 ? (
                <>
                  <h2 className="text-black text-3xl mb-14 font-bold">
                    {options[2].title}
                  </h2>
                  <p className="text-black text-xl mb-20 font-bold">
                    {options[2].description}
                    <br />
                  </p>
                  <span className="pt-8 text-5xl">🐶</span>
                </>
              ) : (
                <div className="flex gap-1 flex-col">
                  <h2 className="text-black text-3xl font-bold">
                    {options[2].title}
                  </h2>
                  <span className="lg:mt-15 text-xl lg:text-5xl">🎩</span>
                </div>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
