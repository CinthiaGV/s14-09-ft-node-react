import Image from 'next/image';
import { getProfile } from '../../api/actions/messages';
import { useSession } from 'next-auth/react';

const ProfileDer = ({
  username,
  description,
  selectedDate,
  selectedGenre,
  selectedGames,
  selectedPlatforms
}) => {
  const { data: session, status } = useSession();
  const user = getProfile(session)

  return (
<>
  <div className="h-full flex items-center justify-center">
    <div className="w-full max-w-md mx-auto my-auto">
      <div className="rounded-lg overflow-hidden shadow-lg">
        {/* Imagen de fondo con información del usuario */}
        <div
          className="bg-cover bg-center h-[400px] flex items-end"
          style={{
            backgroundImage: `url(https://hips.hearstapps.com/hmg-prod/images/el-gato-con-botas-1551289404.jpg?crop=1.00xw:0.753xh;0,0.0969xh&resize=2048:*)`,
          }}
        >
          <div className="bg-gradient-to-t p-5 from-[#000000dc] to-[#00000000] w-full">
            <h2 className="text-xl font-bold mb-2">{username ? username : 'Username'}</h2>
            <p className="text-sm font-light">{selectedDate && selectedDate.toLocaleDateString()}</p>
            <p className="text-sm font-light">{description? description : 'Description'}</p>
          </div>
        </div>

        {/* Sección de tecnologías y habilidades */}
        <div className="px-4 py-2">
          <h3 className="text-lg font-semibold mb-2">{selectedGenre}</h3>
          <div className="flex flex-wrap gap-2">
            {/* Iconos o etiquetas de tecnologías */}
          </div>
        </div>

        {/* Sección de juegos favoritos */}
        <div className="px-4 py-2">
          <h3 className="text-lg font-semibold mb-2">Juegos favoritos</h3>
          <div className="flex overflow-x-auto pb-2">
            {/* Iterar sobre los juegos */}
            <div className="w-[100%]">
                      <div className="px-2  flex flex-row items-center gap-9">
                        <div className="bg-[#414141] shadow-[#000] shadow-lg rounded p-2 ">
                          <Image
                            src={
                              'https://cdn2.steamgriddb.com/icon/d8732349cbe3ba46021a86345bb98c4c.ico'
                            }
                            alt="Juego"
                            className="w-16 h-16"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="bg-[#414141] shadow-[#000] shadow-lg rounded p-2 ">
                          <Image
                            src={
                              'https://cdn2.steamgriddb.com/icon/d8732349cbe3ba46021a86345bb98c4c.ico'
                            }
                            alt="Juego"
                            className="w-16 h-16"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="bg-[#414141] shadow-[#000] shadow-lg rounded p-2 ">
                          <Image
                            src={
                              'https://cdn2.steamgriddb.com/icon/d8732349cbe3ba46021a86345bb98c4c.ico'
                            }
                            alt="Juego"
                            className="w-16 h-16"
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>
                    </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
  );
};

export default ProfileDer;
