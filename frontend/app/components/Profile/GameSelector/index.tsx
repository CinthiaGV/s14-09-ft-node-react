import React from 'react';

export const GameSelector = ({ onSelectGame, selectedGames }) => {
  const gamesList = [
    { nameGame: 'The Legend of Zelda: Breath of the Wild', categoryName: 'Action', image: 'https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg' },
    { nameGame: 'Cyberpunk 2077', categoryName: 'Adventure', image: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg' },
    { nameGame: 'Red Dead Redemption 2', categoryName: 'Action', image: 'https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg' },
    { nameGame: 'Super Mario Odyssey', categoryName: 'Platform', image: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg' },
    { nameGame: 'Minecraft', categoryName: 'Sandbox', image: 'https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png' },
    { nameGame: 'Fortnite', categoryName: 'Battle Royale', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Fortnite.jpg/220px-Fortnite.jpg' },
    { nameGame: 'The Witcher 3: Wild Hunt', categoryName: 'RPG', image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg' },
    { nameGame: 'Dark Souls III', categoryName: 'RPG', image: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Dark_Souls_III_cover_art.jpg' },
    { nameGame: 'Overwatch', categoryName: 'FPS', image: 'https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg' },
    { nameGame: 'Stardew Valley', categoryName: 'Simulation', image: 'https://upload.wikimedia.org/wikipedia/en/6/67/Stardew_Valley.jpg' },
    { nameGame: 'Sekiro: Shadows Die Twice', categoryName: 'Action-adventure', image: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Sekiro_art.jpg' },
    { nameGame: 'Animal Crossing: New Horizons', categoryName: 'Simulation', image: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Animal_Crossing_New_Horizons.jpeg' }
  ];

  const handleAddGame = (selectedGame) => {
    if (selectedGame) {
      onSelectGame([...selectedGames, selectedGame]);
    }
  };
  return (
    <div className="game-selector">
      <select onChange={(e) => handleAddGame(gamesList.find(game => game.nameGame === e.target.value))} className="game-select text-black">
        <option value="" className='text-black'>Seleccione un juego...</option>
        {gamesList.map((game, index) => (
          <option key={index} value={game.nameGame} className='text-black'>
            {game.nameGame} ({game.categoryName})
          </option>
        ))}
      </select>
    </div>
  );
};
