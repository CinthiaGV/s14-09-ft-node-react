'use client';
import { FaMobileAlt } from 'react-icons/fa';
import { RiComputerLine } from 'react-icons/ri';
import { GiConsoleController } from 'react-icons/gi';
import { BsSendPlusFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { differenceInYears, parseISO } from 'date-fns';
import './FilterModal.Module.css';
import './FilterModule.css';
import { Filter } from '../components/Filter/Filter';

interface ModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

// Types and Interfaces
interface UserInterest {
  image?: string;
  skill?: number;
}

interface UserCard {
  age: string | number;
  username?: string;
  name?: string;
  lastName?: string;
  skills?: string;
  id?: string;
  image?: string;
  bio?: string;
  interests?: UserInterest[];
  favoritePlatform?: string[];
}

const FilterUser = () => {
  const { data: session, status } = useSession();
  const [inputValue, setInputValue] = useState('');
  const [tarjetas, setTarjetas] = useState([]);
  const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState<UserCard>();
  const [indice, setIndice] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState<any>([]);
  const [filtroActivo, setFiltroActivo] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchCards = async () => {
      if (session) {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/list`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${session.user.meta.token}`,
              },
            }
          );
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          const cards = await res.json();
          console.log('router user', cards.data);
          setTarjetas(cards.data);
        } catch (error) {
          console.error('Error fetching cards:', error);
        }
      }
    };

    fetchCards();
  }, [session]);

  useEffect(() => {
    if (filtroActivo) {
      console.log('filtroActivo', filteredUsers.data);
      setTarjetaSeleccionada(filteredUsers.data[indice]);
    } else {
      setTarjetaSeleccionada(tarjetas[indice]);
      console.log('selectCard', tarjetaSeleccionada);
    }
  }, [tarjetas, indice, session, filtroActivo]);

  useEffect(() => {
    if (tarjetaSeleccionada && typeof tarjetaSeleccionada.age === 'string') {
      const fechaNacimiento = new Date(tarjetaSeleccionada.age);
      const edad = differenceInYears(new Date(), fechaNacimiento);

      const tarjetaConEdad = {
        ...tarjetaSeleccionada,
        age: edad,
      };
      setTarjetaSeleccionada(tarjetaConEdad);
    }
  }, [tarjetaSeleccionada]);

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

  const handleButtonClick = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/matches/add`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${session?.user.meta.token}`,
        },
        body: JSON.stringify({
          userReceptorId: tarjetaSeleccionada?.id,
          initialMessage: inputValue,
        }),
      }
    );
    const user = await res.json();
    console.log('match', user);
    if (user.error) {
      alert(user.error.message);
      setInputValue('');
    } else {
      alert('Esperando que el usuario reciba su mensaje...');
      setInputValue('');
    }
  };

  if (tarjetaSeleccionada) {
    return (
      <>
        <div className="h-screen w-screen flex">
          {/* Previous arrow/button */}
          <button
            className="relative h-[8%] w-[8%] top-[50%] left-[10%] text-white text-4xl  bg-gray-700 hover:bg-gray-800 transition ease-in-out rounded-md focus:outline-none z-10"
            onClick={tarjetaAnterior}
          >
            &#9664; {/* Unicode for left-pointing arrow */}
          </button>
          <div className="w-2/3 h-full flex items-center justify-center">
            <div className="h-screen w-screen flex  text-white">
              <div className="w-full max-w-md mx-auto my-auto ">
                <div className="flex flex-col mb-5 mr-[50%] ">
                  <Filter
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    toggleModal={toggleModal}
                    setFilteredUsers={setFilteredUsers}
                    setFiltroActivo={setFiltroActivo}
                    filtroActivo={filtroActivo}
                  />
                </div>

                <div className="rounded-lg overflow-hidden max-h-[720px] ">
                  <div
                    className="bg-cover bg-center h-[300px] flex items-end "
                    style={{
                      backgroundImage: `url(${tarjetaSeleccionada.image})`,
                    }}
                  >
                    <div className="bg-gradient-to-t from-[#000000dc] to-[#00000000] w-full">
                      <div className="p-2 rounded">
                        <h2 className="text-xl font-bold">
                          {tarjetaSeleccionada.username}
                        </h2>
                        <p>{tarjetaSeleccionada.age} años</p>
                        <div className="flex items-center">
                          {tarjetaSeleccionada.bio}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-2">
                    <h3 className="text-lg font-semibold mb-2">
                      Juegos favoritos
                    </h3>
                    <div className="flex -mx-2">
                      {tarjetaSeleccionada.interests?.length ? (
                        tarjetaSeleccionada?.interests?.map(
                          (interest, index) => (
                            <div key={index} className="px-2">
                              <div className="bg-gray-700 rounded p-2 flex flex-col items-center">
                                <img
                                  src={
                                    interest.image
                                      ? interest.image
                                      : 'https://cdn2.steamgriddb.com/icon/d8732349cbe3ba46021a86345bb98c4c.ico'
                                  }
                                  alt="Juego"
                                  className="w-16 h-16"
                                />
                                <div className="flex mt-1">
                                  {[...Array(interest.skill)].map((e, i) => (
                                    <img
                                      key={i}
                                      src="assets/star.png"
                                      alt="Estrella"
                                      className="h-4 w-4"
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                          )
                        )
                      ) : (
                        <div className="mx-auto border border-[#5c5959] rounded p-3">
                          <div className="flex items-center rounded ">
                            No hay juegos favoritos
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="px-4 py-2">
                    <h3 className="text-lg font-semibold mb-2">Plataforma</h3>
                    <div className="flex -mx-2">
                      {tarjetaSeleccionada?.favoritePlatform?.length ? (
                        tarjetaSeleccionada?.favoritePlatform?.map(
                          (platform) => (
                            <div className="flex flex-col items-center gap-2">
                              {platform === 'Mobile' && (
                                <>
                                  <FaMobileAlt className="ml-8" />
                                  <p className="ml-8">{platform}</p>
                                </>
                              )}
                              {platform === 'Pc' && (
                                <>
                                  <RiComputerLine className="ml-8" />
                                  <p className="ml-8">{platform}</p>
                                </>
                              )}
                              {platform === 'Console' && (
                                <>
                                  <GiConsoleController className="ml-8" />
                                  <p className="ml-8">{platform}</p>
                                </>
                              )}
                            </div>
                          )
                        )
                      ) : (
                        <div className="mx-auto border border-[#5c5959] rounded p-3">
                          <div className="flex items-center rounded ">
                            No hay plataformas favoritas
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="w-full px-1 py-2 mt-7">
                    <label htmlFor="message" className="block mb-2">
                      ¡Envíale una solicitud de mensaje!
                    </label>
                    <div className="flex items-center">
                      <input
                        id="message"
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="flex-1 p-2 rounded-xl bg-gray-800 border border-gray-600 text-sm"
                        placeholder={`Hola ${tarjetaSeleccionada.username}, vamos a jugar!`}
                      />
                      <button
                        onClick={handleButtonClick}
                        className="ml-2 bg-[#c2d64f] hover:bg-[#d1d4bb] text-black  p-2 rounded"
                        style={{
                          cursor: 'pointer',
                          backgroundImage:
                            'https://cdn-icons-png.flaticon.com/512/6652/6652725.png',
                        }}
                      >
                        <BsSendPlusFill />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Next arrow/button */}
            <button
              className="relative h-[8%] w-[16%] top-[4%] right-[15%] text-white text-4xl  bg-gray-700 rounded-md focus:outline-none z-10 hover:bg-gray-800 transition ease-in-out"
              onClick={tarjetaPosterior}
            >
              &#9654; {/* Unicode for right-pointing arrow */}
            </button>
          </div>

          <div className="w-1/3 h-full bg-blue-500 flex items-center justify-center">
            <h1 className="text-white">sector Wagner</h1>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div role="status">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    );
  }
};
export default FilterUser;