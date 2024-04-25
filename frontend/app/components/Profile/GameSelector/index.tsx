import React from 'react';

export const GameSelector = ({ onSelectGame, selectedGames }) => {
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
    {
      name: 'Super Mario Odyssey',
      category: 'Platform',
      image:
        'https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg',
    },
    {
      name: 'Minecraft',
      category: 'Sandbox',
      image:
        'https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png',
    },
    {
      name: 'Fortnite',
      category: 'Battle Royale',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Fortnite.jpg/220px-Fortnite.jpg',
    },
    {
      name: 'The Witcher 3: Wild Hunt',
      category: 'RPG',
      image:
        'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
    },
    {
      name: 'Dark Souls III',
      category: 'RPG',
      image:
        'https://upload.wikimedia.org/wikipedia/en/d/d3/Dark_Souls_III_cover_art.jpg',
    },
    {
      name: 'Overwatch',
      category: 'FPS',
      image:
        'https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg',
    },
    {
      name: 'Stardew Valley',
      category: 'Simulation',
      image:
        'https://upload.wikimedia.org/wikipedia/en/6/67/Stardew_Valley.jpg',
    },
    {
      name: 'Sekiro: Shadows Die Twice',
      category: 'Action-adventure',
      image: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Sekiro_art.jpg',
    },
    {
      name: 'Animal Crossing: New Horizons',
      category: 'Simulation',
      image:
        'https://upload.wikimedia.org/wikipedia/en/7/7a/Animal_Crossing_New_Horizons.jpeg',
    },
  ];

  const handleAddGame = (selectedGame) => {
    if (selectedGame) {
      onSelectGame([...selectedGames, selectedGame]);
    }
  };
  return (
    <div className="game-selector">
      <select
        onChange={(e) =>
          handleAddGame(gamesList.find((game) => game.name === e.target.value))
        }
        className="game-select text-black"
      >
        <option value="" className="text-black">
          Seleccione un juego...
        </option>
        {gamesList.map((game, index) => (
          <option key={index} value={game.name} className="text-black">
            {game.name} ({game.category})
          </option>
        ))}
      </select>
    </div>
  );
};
