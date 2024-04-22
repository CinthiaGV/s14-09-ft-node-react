'use client';
import { FaMobileAlt } from 'react-icons/fa';
import { RiComputerLine } from 'react-icons/ri';
import { GiConsoleController } from 'react-icons/gi';
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

const FilterUser = () => {
  const { data: session, status } = useSession();
  const [inputValue, setInputValue] = useState('');
  const [tarjetas, setTarjetas] = useState([]);
  const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState();
  const [indice, setIndice] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  // const [username, setUsername] = useState('');
  // const [age, setAge] = useState('');
  // const [bio, Setbio] = useState('');
  // const [image, setImage] = useState('');
  // const [nameGame, setNameGame] = useState('');
  // const [categoryGame, setCategoryGame] = useState('');
  // const [skillLevel, setSkillLevel] = useState('');
  // const [favoritePlatform, setFavoritePlatform] = useState('');
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
    setTarjetaSeleccionada(tarjetas[indice]);
    console.log('selectCard', tarjetaSeleccionada);
  }, [tarjetas, indice, session]);

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

  // const handleButtonClick = () => {
  //   const res = fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/matches/add`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       authorization: `Bearer ${session?.user.meta.token}`,
  //     },
  //     body: JSON.stringify({
  //       userReceptorId: session?.user.id,
  //       initialMessage: inputValue,
  //     }),
  //   });
  //   setInputValue('');
  // };

  // const handleButtonClick = async () => {
  //   try {
  //     const res = await fetch(
  //       `${process.env.NEXT_PUBLIC_BACKEND_URL}/matches/add`,
  //       {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           authorization: `Bearer ${session.user.meta.token}`,
  //         },
  //         body: JSON.stringify({
  //           userReceptorId: session?.user.id,
  //           initialMessage: inputValue,
  //         }),
  //       }
  //     );
  //     const user = await res.json();
  //     console.log('router error', user);
  //     if (user.error) {
  //       setInputValue('');
  //       // Mostrar el mensaje de error devuelto por el backend
  //       alert(user.error.message);
  //     } else {
  //       setInputValue('');
  //       return user;
  //     }
  //   } catch (error) {
  //     console.error('Error en la solicitud fetch:', error);
  //   }
  // };

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
          userReceptorId: tarjetaSeleccionada.id,
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
  //   const user = await res.json();
  //   console.log('router error', user);
  //   if (user.error) {
  //     throw new Error(user.error.message);
  //   }
  //   return user;
  // };

  if (tarjetaSeleccionada) {
    return (
      <>
        <div className="h-screen w-screen flex">
          <div className="w-2/3 h-fullflex items-center justify-center">
            <div className="relative w-full h-full flex flex-col pt-32 pb-8 pr-16 pl-32">
              <Filter
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                toggleModal={toggleModal}
                setFilteredUsers={setFilteredUsers}
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
              {/* <div className="flex-1 bg-[url('/assets/avatar.jpg')] bg-cover mr-20 ml-20 max-w-sm"> */}
              <div
                className="flex-1 bg-cover mr-20 ml-20 pl-4 max-w-sm"
                style={{
                  backgroundImage: `url(${
                    tarjetaSeleccionada.image ??
                    'url(https://st2.depositphotos.com/2498595/5613/v/450/depositphotos_56138187-stock-illustration-profile-icon-white-on-the.jpg)'
                  })`,
                }}
              >
                <div className="flex flex-col text-white h-full justify-end">
                  <div className="backdrop-filter backdrop-blur-sm backdrop-saturate-100 bg-opacity-50 bg-opacity-50">
                    <div className="flex gap-3">
                      <p className="">
                        {tarjetaSeleccionada.username ?? 'Usuario'}
                      </p>
                      <p className="">
                        {tarjetaSeleccionada.age + ' años' ?? 'Edad'}
                      </p>
                    </div>
                    <p className="">
                      {tarjetaSeleccionada.bio ?? 'Descripción'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 mr-20 ml-20  pl-4 h-full flex flex-col justify-around max-w-sm bg-[#201e1e]">
                <div className="flex flex-col gap-2">
                  <h3 className="">Juegos</h3>
                  <div className="flex gap-x-4">
                    {/* <div className="flex flex-col gap-1">
                      <img
                        src="interests[tarjetaSeleccionada.interests.[0].urlgame"
                        alt="Nombre del juego"
                        className="w-16 h-14"
                      />
                      <div className="flex gap-1">
                        {tarjetaSeleccionada.interests.[0].skill >= 1 && (
                          <img
                            src="assets/star.png"
                            alt="Nombre del juego"
                            className="h-4 w-4"
                          />
                        )}
                        {tarjetaSeleccionada.interests.[0].skill >= 2 && (
                          <img
                            src="assets/star.png"
                            alt="Nombre del juego"
                            className="h-4 w-4"
                          />
                        )}
                        {tarjetaSeleccionada.interests.[0].skill === 3 && (
                          <img
                            src="assets/star.png"
                            alt="Nombre del juego"
                            className="h-4 w-4"
                          />
                        )}
                      </div>
                    </div> */}
                    <div className="flex flex-col gap-1">
                      <img
                        src="https://picsum.photos/200"
                        alt="Nombre del juego"
                        className="w-16 h-14"
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
                        className="w-16 h-14"
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
                        className="w-16 h-14"
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
                  <div className="flex gap">
                    {tarjetaSeleccionada.favoritePlatform.map((platform) => (
                      <div
                        className="flex flex-col items-center gap-2"
                        key={platform.id}
                      >
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
                    ))}
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
  }
};
export default FilterUser;
