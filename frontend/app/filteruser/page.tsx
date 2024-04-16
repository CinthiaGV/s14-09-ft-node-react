'use client';
import { FaMobileAlt } from 'react-icons/fa';
import { RiComputerLine } from 'react-icons/ri';
import { GiConsoleController } from 'react-icons/gi';
import { useState } from 'react';

const FilterUser = () => {
  const [inputValue, setInputValue] = useState('');
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [bio, Setbio] = useState('');
  const [nameGame, setNameGame] = useState('');
  const [categoryGame, setCategoryGame] = useState('');
  const [skillLevel, setSkillLevel] = useState('');
  const [favoritePlatform, setFavoritePlatform] = useState('');

  const handleButtonClick = () => {};
  return (
    <>
      <div className="h-screen w-screen bg-black flex">
        <div className="w-2/3 h-fullflex items-center justify-center">
          <div className="w-full h-full flex flex-col pt-32 pb-8 pr-16 pl-32">
            <div className="flex-1 bg-[url('/assets/avatar.jpg')] bg-cover mr-20 ml-20 max-w[300px]">
              <div className="flex flex-col text-white h-full justify-end">
                <div className="flex">
                  <p className="">Perrito</p>
                  <p className="">18 años</p>
                </div>
                <p className="">Descripcion</p>
              </div>
            </div>
            <div className="flex-1 mr-20 ml-20 h-full flex flex-col justify-around max-w[300px]">
              <div className="flex flex-col gap-2">
                <h3 className="">Juegos</h3>
                <div className="flex gap-x-3">
                  <div className="flex flex-col gap-1">
                    <img
                      src="assets/valorant-logo.png"
                      alt="Nombre del juego"
                      className=""
                    />
                    <div className="flex gap-1">
                      <img
                        src="assets/star.png"
                        alt="Nombre del juego"
                        className="h-4 w-4"
                      />
                      <img
                        src="assets/star.png"
                        alt="Nombre del juego"
                        className="h-4 w-4"
                      />
                      <img
                        src="assets/star.png"
                        alt="Nombre del juego"
                        className="h-4 w-4"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <img
                      src="assets/valorant-logo.png"
                      alt="Nombre del juego"
                      className=""
                    />
                    <div className="flex gap-1">
                      <img
                        src="assets/star.png"
                        alt="Nombre del juego"
                        className="h-4 w-4"
                      />
                      <img
                        src="assets/star.png"
                        alt="Nombre del juego"
                        className="h-4 w-4"
                      />
                      <img
                        src="assets/star.png"
                        alt="Nombre del juego"
                        className="h-4 w-4"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <img
                      src="assets/valorant-logo.png"
                      alt="Nombre del juego"
                      className=""
                    />
                    <div className="flex gap-1">
                      <img
                        src="assets/star.png"
                        alt="Nombre del juego"
                        className="h-4 w-4"
                      />
                      <img
                        src="assets/star.png"
                        alt="Nombre del juego"
                        className="h-4 w-4"
                      />
                      <img
                        src="assets/star.png"
                        alt="Nombre del juego"
                        className="h-4 w-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="">Plataforma preferida</h3>
                <div className="flex gap-8">
                  <div className="flex flex-col items-center gap-2">
                    <FaMobileAlt />
                    <p className="">Mobile</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <RiComputerLine />
                    <p className="">Pc</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <GiConsoleController />
                    <p className="">Consola</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="pl-14">Enviale una solicitud de mensaje!</h3>
                <div className="relative flex">
                  <div className="w-5/6 max-w-[350px]">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      className="border rounded-full  w-full py-2 min-h-[3rem] pl-3 pr-12 max-w-[350px]"
                    />
                  </div>
                  <button
                    onClick={handleButtonClick}
                    className="relative rounded-full right-12 h-8 w-10 top-1"
                  >
                    <img
                      src="assets/button-send.png"
                      alt="boton para enviar mensaje"
                      className="h-12 w-12"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-full bg-blue-500 flex items-center justify-center">
          <h1 className="text-white">sector Wagner</h1>
        </div>
      </div>
    </>
  );
};

export default FilterUser;
