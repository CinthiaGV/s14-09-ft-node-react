import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import '../styles.css';

interface GameSelectorProps {
  id?: string;
  onSelectGame?: any;
  selectedGames?: string[];
}

export const GameSelector = ({ id }: GameSelectorProps) => {
  const [selectedGames, setSelectedGames] = useState<string[]>([]);
  const [skill, setSkill] = useState<number>(1);
  const [username, setUsername] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [favoritePlatform, setFavoritePlatform] = useState<string[]>([]);
  const [schedule, setSchedule] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Cambiado a string para almacenar la URL
  const [gameName, setGameName] = useState<string>('');
  const [gameCategory, setGameCategory] = useState<string>(''); // Estado para la categoría del juego
  const { data: session } = useSession();

  const router = useRouter();

  const gamesList = [
    {
      name: 'Cyberpunk 2077',
      category: 'Adventure',
      image:
        'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg',
    },
    {
      name: 'Red Dead Redemption 2',
      category: 'Action',
      image:
        'https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg',
    },
    // Juegos multijugador agregados
    {
      name: 'Call of Duty: Warzone',
      category: 'Shooter',
      image:
        'https://upload.wikimedia.org/wikipedia/en/2/2e/COD_Warzone_cover_art.jpg',
    },
    // Juegos multijugador adicionales
    {
      name: 'Fortnite',
      category: 'Battle Royale',
      image:
        'https://upload.wikimedia.org/wikipedia/en/9/90/Fortnite_cover.png',
    },
  ];

  // Ejemplo de como debes enviar favoritePlatform
  const favoritePlatformExample = ['PC', 'Mobile', 'Console'];

  //ejemplo de como debes enviar interest

  const interests = [
    {
      nameGame: 'Titanic',
      categoryGame: 'Action',
      skill: 5,
    },
    {
      nameGame: 'Combat2',
      categoryGame: 'Action',
      skill: 1,
    },
  ];

  const profileImages = [
    'https://via.placeholder.com/199',
    'https://via.placeholder.com/200',
    // Agrega más URLs de imágenes de perfil aquí
  ];

  const handleImageUpload = async (event: any) => {
    const file = event.target.files[0]; // Obtén el archivo del input
    if (file) {
      const formData = new FormData();
      formData.append('imageProfile', file); // Usa el mismo nombre que espera el backend

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/updateProfilePhoto`,
          {
            method: 'PUT',
            headers: {
              authorization: `Bearer ${session?.user.meta.token}`,
            },
            body: formData, // Envía el formulario como cuerpo
          }
        );

        const info = await res.json();

        if (res.ok) {
          console.log('Imagen subida con éxito:', info);
          // Aquí podrías hacer algo con la respuesta, como mostrar un mensaje al usuario
        } else {
          throw new Error(info.message || 'Error al subir la imagen');
        }
      } catch (error) {
        console.error('Error en la subida de la imagen:', error);
        // Aquí podrías manejar el error, como mostrar un mensaje al usuario
      }
    }
  };

  const handlePlatformChange = (platform: string) => {
    setFavoritePlatform((prevFavoritePlatforms) =>
      prevFavoritePlatforms.includes(platform)
        ? prevFavoritePlatforms.filter(
            (favPlatform) => favPlatform !== platform
          )
        : [...prevFavoritePlatforms, platform]
    );
  };

  const handleScheduleChange = (selectedSchedule: string) => {
    setSchedule((prevSchedule) =>
      prevSchedule.includes(selectedSchedule)
        ? prevSchedule.filter((schedule) => schedule !== selectedSchedule)
        : [...prevSchedule, selectedSchedule]
    );
  };

  const handleImageChange = (imageUrl: string) => {
    console.log('Imagen seleccionada:', imageUrl);
    setSelectedImage(imageUrl);
  };

  const handleAddGame = (gameName: string, gameCategory: string) => {
    const game = `${gameName} (${gameCategory})`;
    setSelectedGames((prevSelectedGames) => [...prevSelectedGames, game]);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      if (id) {
        formData.append('id', id);
      }
      formData.append('name', username);
      formData.append('lastName', lastName);
      formData.append('bio', bio);

      // formData.append('skill', skill.toString());
      // favoritePlatform.forEach((platform) =>
      //   formData.append('favoritePlatform', platform)
      // );
      // selectedGames.forEach((game) => formData.append('interests', game));
      // schedule.forEach((time) => formData.append('schedule', time));
      // if (selectedImage) {
      //   formData.append('image', selectedImage);
      // }

      const jsonObject: { [key: string]: string | Blob } | any = {};
      formData.forEach((value, key) => {
        jsonObject[key] = value;
      });

      const headers = new Headers();
      const token = session && session.user.meta.token;
      if (token) {
        headers.append('authorization', `Bearer ${token}`);
        headers.append('Content-Type', 'application/json');
      }

      //TODO Por ejemplo aqui mejor como objeto agrego las demas propiedades, deberias eliminar el FormData

      jsonObject.favoritePlatform = favoritePlatformExample;
      jsonObject.interests = interests;
      let payload: any = JSON.stringify(jsonObject);

      console.log('Payload:', payload);

      const response = await fetch(
        `https://api-tinder-games.onrender.com/api/v1/users/updateProfile`,
        {
          method: 'PUT',
          headers: headers,

          body: payload, // Convertir el objeto JSON a una cadena JSON
        }
      );

      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }

      console.log('Datos enviados correctamente');
      router.push('/filteruser');
    } catch (error) {
      console.error('Hubo un error al enviar los datos:', error);
    }
  };

  return (
    <div>
      {/* <div className="my-2">
        <label>Nombre:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="my-2 px-4 py-2 border border-black rounded-3xl"
        />
      </div>
      <div className="my-2">
        <label>Apellido:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="my-2 px-4 py-2 border border-black rounded-3xl"
        />
      </div> */}
      {/* <label className="block sm:text-xs w-[628px]  opacity-90 ">
        <h5 className="font-[700] text-xl">Descripción:</h5>
        <div
          style={{ transform: 'skewX(-10deg)' }}
          className=" border-[1.6px] border-[#FFFFFF] mb-2 py-2 sm:mb-10 flex sm:text-base items-center  w-[80%] mt-2"
        >
          <PiUserListBold className="pl-2 w-6" />
          <input
            type="text"
            value={bio}
            placeholder="Estoy libre para jugar a las tardes"
            onChange={(e) => setBio(e.target.value)}
            className="polygon pl-2 py-2 focus:border-none block w-full bg-transparent focus:outline-none sm:text-base"
          />
        </div>
      </label> */}
      <div className="my-2">
        <label>Nombre del juego:</label>
        <select
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
          className="my-2 px-4 py-2 border border-black rounded-3xl text-black"
        >
          <option value="">Selecciona un juego</option>
          {gamesList.map((game, index) => (
            <option
              key={`${game.name}-${game.category}-${index}`}
              value={game.name}
            >
              {game.name}
            </option>
          ))}
        </select>
      </div>
      <div className="my-2">
        <label>Categoría del juego:</label>
        <select
          value={gameCategory}
          onChange={(e) => setGameCategory(e.target.value)}
          className="my-2 px-4 py-2 border border-black rounded-3xl text-black"
        >
          <option key="" value="">
            Selecciona una categoría
          </option>
          {gamesList.map((game, index) => (
            <option
              key={`${game.category}-${index}`}
              value={game.category}
              className=" text-black"
            >
              {game.category}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={() => handleAddGame(gameName, gameCategory)}
        className="btn yellowBtn glitch  place-self-center"
      >
        Agregar Juego
      </button>

      <div className="my-2">
        <label>Skill:</label>
      </div>
      <select
        value={skill}
        onChange={(e) => setSkill(parseInt(e.target.value))}
        className="my-2 px-4 py-2 border border-black rounded-3xl cursor-pointer text-black"
      >
        <option value={1}>★</option>
        <option value={2}>★★</option>
        <option value={3}>★★★</option>
      </select>
      <button
        onClick={handleSubmit}
        className="btn yellowBtn glitch place-self-center"
      >
        Enviar Datos
      </button>
    </div>
  );
};
