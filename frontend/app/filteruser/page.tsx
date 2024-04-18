'use client';
import { FaMobileAlt } from 'react-icons/fa';
import { RiComputerLine } from 'react-icons/ri';
import { GiConsoleController } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import { Filter } from '../components/Filter/Filter';

const FilterUser = () => {
  const [inputValue, setInputValue] = useState('');
  const [tarjetas, setTarjetas] = useState([]);
  const [indice, setIndice] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  // const [username, setUsername] = useState('');
  // const [age, setAge] = useState('');
  // const [bio, Setbio] = useState('');
  // const [image, setImage] = useState('');
  // const [nameGame, setNameGame] = useState('');
  // const [categoryGame, setCategoryGame] = useState('');
  // const [skillLevel, setSkillLevel] = useState('');
  // const [favoritePlatform, setFavoritePlatform] = useState('');

  // useEffect(() => {
  //   const fetchCards = async () => {
  //     const res = await fetch(
  //       `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/signin`,
  //       {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           authorization: `Bearer ${session?.user?.token}`,
  //         },
  //       }
  //     );
  //     const cards = await res.json();
  //     console.log('router user', cards);
  //     setTarjetas(cards);
  //     if (cards.error) {
  //       throw new Error(cards.error.message);
  //     }
  //     return cards;
  //   };
  // });

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    //simulando un fetch
    const datosDePrueba = [
      { username: 'Perro', age: 25, bio: 'Descripción del usuario 1' },
      { username: 'Gato', age: 30, bio: 'dfhjytjyuhkuykuikuykuyku' },
      { username: 'Tortuga', age: 35, bio: 'AAAAAAAAAAAAAA' },
    ];

    setTarjetas(datosDePrueba);
  }, []);

  const tarjetaSeleccionada = tarjetas[indice];
  const tarjetaAnterior = () => {
    if (indice > 0) {
      setIndice(indice - 1);
    }
  };

  const tarjetaPosterior = () => {
    if (indice < tarjetas.length - 1) {
      setIndice(indice + 1);
    }
  };

  const handleButtonClick = () => {};

  return (
    <>
      <div className="h-screen w-screen bg-[#232222] flex">
        <div className="w-2/3 h-fullflex items-center justify-center">
          <div className="relative w-full h-full flex flex-col pt-32 pb-8 pr-16 pl-32">
            <Filter
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              toggleModal={toggleModal}
            />
            <div className="absolute bottom-80 text-2xl">
              <button
                className="bg-[#36343b] h-16 w-16"
                onClick={tarjetaAnterior}
              >
                &lt;
              </button>
              <button
                className="bg-[#36343b] h-16 w-16 absolute left-[480px]"
                onClick={tarjetaPosterior}
              >
                &gt;
              </button>
            </div>
            <div className="flex-1 bg-[url('/assets/avatar.jpg')] bg-cover mr-20 ml-20 max-w-sm">
              <div className="flex flex-col text-white h-full justify-end">
                <div className="backdrop-filter backdrop-blur-sm backdrop-saturate-100 bg-opacity-50 bg-opacity-50">
                  <div className="flex gap-3">
                    <p className="">{tarjetaSeleccionada?.username}</p>
                    <p className="">{tarjetaSeleccionada?.age}</p>
                  </div>
                  <p className="">{tarjetaSeleccionada?.bio}</p>
                </div>
              </div>
            </div>
            <div className="flex-1 mr-20 ml-20 h-full flex flex-col justify-around max-w-sm bg-[#201e1e]">
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
                <div className="relative flex justify-end">
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
