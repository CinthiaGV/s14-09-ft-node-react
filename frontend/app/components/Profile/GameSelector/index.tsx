import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import '../styles.css'; 

interface GameSelectorProps {
  id: string;
  onSelectGame: (game: string) => void;
  selectedGames: string[];
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

  const gamesList = [
    {
      name: 'The Legend of Zelda: Breath of the Wild',
      category: 'Action',
      image:
        'https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg',
    },
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
  ];

  const profileImages = [
    'https://via.placeholder.com/199',
    'https://via.placeholder.com/200',
    // Agrega más URLs de imágenes de perfil aquí
  ];

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
      formData.append('id', id);
      formData.append('username', username);
      formData.append('lastName', lastName);
      formData.append('bio', bio);
      formData.append('skill', skill.toString());
      favoritePlatform.forEach((platform) =>
        formData.append('favoritePlatform', platform)
      );
      selectedGames.forEach((game) => formData.append('interests', game));
      schedule.forEach((time) => formData.append('schedule', time));
      if (selectedImage) {
        formData.append('image', selectedImage);
      }

      const headers = new Headers();
      const token = session && session.user.meta.token;
      if (token) {
        headers.append("authorization", `Bearer ${token}`);
      }
      
      console.log('Datos a enviar:', formData);
      const response = await fetch(
        `https://api-tinder-games.onrender.com/api/v1/users/updateProfile`,
        {
          method: 'PUT',
          headers: headers,
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }

      console.log('Datos enviados correctamente');
    } catch (error) {
      console.error('Hubo un error al enviar los datos:', error);
    }
  };

  return (
    <div>
      <div className="my-2">
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
      </div>
      <div>
        <label>Bio:</label>
        <input
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="my-2 px-4 py-2 border border-black rounded-3xl"
        />
      </div>
      <div className="my-2">
        <label>Nombre del juego:</label>
        <select
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
          className="my-2 px-4 py-2 border border-black rounded-3xl"
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
    className="my-2 px-4 py-2 border border-black rounded-3xl"
  >
    <option key="" value="">
      Selecciona una categoría
    </option>
    {gamesList.map((game, index) => (
      <option key={`${game.category}-${index}`} value={game.category}>
        {game.category}
      </option>
    ))}
  </select>
</div>
      <button
        onClick={() => handleAddGame(gameName, gameCategory)}
        className="my-2 px-4 py-2 border border-black rounded-3xl cursor-pointer bg-blue-500 text-white"
      >
        Agregar Juego
      </button>

      <div className="my-2">
        <label>Skill:</label>
        <select
          value={skill}
          onChange={(e) => setSkill(parseInt(e.target.value))}
          className="my-2 px-4 py-2 border border-black rounded-3xl cursor-pointer"
        >
          <option value={1}>★</option>
          <option value={2}>★★</option>
          <option value={3}>★★★</option>
        </select>
      </div>
      <div className="my-2">
        <label>Foto de Perfil:</label>
        <div className="profile-images-container">
          {profileImages.map((imageUrl) => (
            <img
              key={imageUrl}
              src={imageUrl}
              alt="Profile"
              className={`profile-image ${
                selectedImage === imageUrl ? 'selected' : ''
              }`}
              onClick={() => handleImageChange(imageUrl)}
            />
          ))}
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="my-2 px-4 py-2 border border-black rounded-3xl cursor-pointer bg-blue-500 text-white"
      >
        Enviar Datos
      </button>
    </div>
  );
};

