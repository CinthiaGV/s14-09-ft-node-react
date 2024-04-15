import Boludo from '../components/boludo/Boludo';
import data from './../components/boludo/data.json';

export default function Page() {
  return (
    <div className="mt-[5.5rem]">
      <div className="h-screen w-screen bg-black flex">
        <div className="w-2/3 h-full bg-red-500 flex items-center justify-center">
          <h1 className="text-white">sector Matias</h1>
        </div>
        <div className="h-full flex items-center justify-center">
          <Boludo user={data.user} messages={data.messages} />
        </div>
      </div>
    </div>
  );
}
