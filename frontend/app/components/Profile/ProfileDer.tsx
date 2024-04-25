import Image from 'next/image';

const ProfileDer = () => {
  return (
    <>
      <>
        <div className="h-screen ">
          <div className="h-full flex items-center justify-center">
            <div className="h-screen w-screen flex  text-white">
              <div className="w-full max-w-md mx-auto my-auto ">
                <div className="rounded-lg overflow-hidden max-h-[790px] ">
                  <div
                    className="bg-cover bg-center h-[400px] min-h-[600px] max-h-[400px] flex items-end "
                    style={{
                      backgroundImage: `url(https://hips.hearstapps.com/hmg-prod/images/el-gato-con-botas-1551289404.jpg?crop=1.00xw:0.753xh;0,0.0969xh&resize=2048:*)`,
                    }}
                  >
                    <div className="bg-gradient-to-t p-5 from-[#000000dc] to-[#00000000] w-full">
                      <div className="rounded">
                        <h2 className="text-xl font-bold mb-2">nombre</h2>
                        <p className="text-sm font-extralight">años</p>
                        <div className="text-sm font-extralight">
                          contratennos porfa
                        </div>
                      </div>
                      <div className="px-4 py-2">
                        <h3 className="text-lg font-semibold mb-2">💻</h3>
                        <div className="flex -mx-2"></div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-2">
                    <h3 className="text-lg font-semibold mb-5">
                      Juegos favoritos
                    </h3>
                    <div className='w-[100%]'>
                      <div className="px-2  flex flex-row items-center gap-9">
                        <div className="bg-[#414141] shadow-[#000] shadow-lg rounded p-2 ">

                          <Image
                            src={
                              'https://cdn2.steamgriddb.com/icon/d8732349cbe3ba46021a86345bb98c4c.ico'
                            }
                            alt="Juego"
                            className="w-16 h-16"
                          />
                          </div>
                        <div className="bg-[#414141] shadow-[#000] shadow-lg rounded p-2 ">

                          <Image
                            src={
                              'https://cdn2.steamgriddb.com/icon/d8732349cbe3ba46021a86345bb98c4c.ico'
                            }
                            alt="Juego"
                            className="w-16 h-16"
                          />
                          </div>
                        <div className="bg-[#414141] shadow-[#000] shadow-lg rounded p-2 ">

                          <Image
                            src={
                              'https://cdn2.steamgriddb.com/icon/d8732349cbe3ba46021a86345bb98c4c.ico'
                            }
                            alt="Juego"
                            className="w-16 h-16"
                          />
                          </div>
                         
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default ProfileDer;
