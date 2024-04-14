import { useState } from 'react';

const games = [
  'Simulation',
  'Action',
  'Adventure',
  'Strategy',
  'Role-Playing',
  'Sports',
];

interface GameSelectorProps {
  onSelectGame: (selectedGames: string[]) => void;
  selectedGames: string[];
}

export const GameSelector = ({
  onSelectGame,
  selectedGames,
}: GameSelectorProps) => {
  const handleGameChange = (game: string) => {
    const updatedSelectedGames = selectedGames.includes(game)
      ? selectedGames.filter((g) => g !== game)
      : [...selectedGames, game];

    onSelectGame(updatedSelectedGames);
  };
  return (
    <div className="flex flex-wrap gap-2">
      {games.map((game) => (
        <label
          key={game}
          className="flex items-center my-2 bg-white text-black px-4 py-2 border border-black rounded-3xl cursor-pointer"
        >
          <input
            type="checkbox"
            className="mr-2 hidden"
            value={game}
            checked={selectedGames.includes(game)}
            onChange={() => handleGameChange(game)}
          />
          {game}
        </label>
      ))}
    </div>
  );
};
