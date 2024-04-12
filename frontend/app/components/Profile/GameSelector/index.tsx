const games = [
  {
    id: 1,
    name: 'Super Mario Bros.',
    image:
      'https://th.bing.com/th/id/R.d588a6537b3ac4d3ae5eed78f9db714f?rik=%2bqZKFuEGOWG8bg&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f07%2f19%2f11992-Super_Mario-Mario_Bros..jpg&ehk=CBpg7GmHDAt3KVRIsM4hVI9EdoPNQqwzz44Ft5TFnhs%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    id: 2,
    name: 'The Legend of Zelda',
    image:
      'https://th.bing.com/th/id/OIP.Wm9-vU0Z16ymtdEcZCB2rwHaKJ?rs=1&pid=ImgDetMain',
  },
];

// export const GameSelector = ({ games, onSelectGame }) => {
export const GameSelector = ({ onSelectGame }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {games.map((game) => (
        <div
          key={game.id}
          className="relative cursor-pointer"
          onClick={() => onSelectGame(game)}
        >
          <div className="w-32 h-32 overflow-hidden rounded">
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-full object-fill"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-200">
            <span className="text-white font-semibold">{game.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
