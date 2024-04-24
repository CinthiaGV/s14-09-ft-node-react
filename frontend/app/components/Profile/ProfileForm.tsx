import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';
import {
  AccountCircleIcon,
  CalendarIcon,
  CellphoneIcon,
  ComputerIcon,
  ConsoleIcon,
} from '../../assets';
import { PiUserListBold } from 'react-icons/pi';

import { GameSelector } from './GameSelector';
import GenreSelector from './GenreSelector';

const ProfileForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const [selectedGames, setSelectedGames] = useState<string[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const platforms = [
    { value: 'mobile', Icon: ConsoleIcon, label: 'Mobile' },
    { value: 'pc', Icon: ComputerIcon, label: 'PC' },
    { value: 'console', Icon: CellphoneIcon, label: 'Console' },
  ];

  useEffect(() => {
    console.log(selectedGames);
  }, [selectedGames]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Lógica para enviar los datos del formulario al backend
  };

  const handleProfilePicChange = (e: {
    target: { files: (Blob | MediaSource)[] };
  }) => {
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };

  const handlePlatformChange = (value: string) => {
    setSelectedPlatforms((prevSelectedPlatforms) =>
      prevSelectedPlatforms.includes(value)
        ? prevSelectedPlatforms.filter((platform) => platform !== value)
        : [...prevSelectedPlatforms, value]
    );
  };

  return (
    <div className="px-4 sm:pl-[82px] py-[104px] text-[#FFFFFF]">
      {' '}
      <h4 className=" pb-[41px] font-[700] text-4xl">Completá tu Perfil</h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 sm:w-[50%] text-white "
      >
        <label
          htmlFor="username"
          className="block sm:text-xs w-[628px]  opacity-90 "
        >
          Nombre de usuario
          <div
            style={{ transform: 'skewX(-10deg)' }}
            className=" border-[1.6px] border-[#FFFFFF] mb-2 py-2 sm:mb-10 flex sm:text-base items-center  w-[80%] mt-2"
          >
            <AccountCircleIcon classNames="pl-2" />
            <input
              type="text"
              id="username"
              placeholder="Nombre de Usuario"
              {...register('username', { required: true })}
              className="polygon pl-2 py-2 focus:border-none block w-full bg-transparent focus:outline-none sm:text-base"
            />
            {errors.username && (
              <span className="text-red-500">Este campo es requerido</span>
            )}
          </div>
        </label>

        <div className="flex w-[100%] z-[100]">
          <label htmlFor="date" className="w-[60%] text-xs">
            Fecha
            <div
              className="h-12 border-[1.6px] border-[#FFFFFF]  items-start justify-start text-base mt-2"
              style={{ transform: 'skewX(-10deg)' }}
            >
              <div className="">
                <DatePicker
                  id="date"
                  className="polygon  h-12 pl-3 text-md"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  placeholderText="mm/dd/aa"
                />
              </div>
            </div>
          </label>
          <label htmlFor="genre" className="w-[100%] ml-[7.5rem] text-xs">
            Género
            <div
              className="h-12  border-[1.6px] border-[#FFFFFF] w-[100%] mt-2"
              style={{ transform: 'skewX(-10deg)' }}
            >
              <GenreSelector
                selectedGenre={selectedGenre}
                setSelectedGenre={setSelectedGenre}
              />

              {errors.username && (
                <span className="text-red-500">Este campo es requerido</span>
              )}
            </div>
          </label>
        </div>

        <div>
          <label className="block sm:text-xs w-[628px]  opacity-90 ">
            <h5 className="font-[700] text-xl">Descripción</h5>
            <div
              style={{ transform: 'skewX(-10deg)' }}
              className=" border-[1.6px] border-[#FFFFFF] mb-2 py-2 sm:mb-10 flex sm:text-base items-center  w-[80%] mt-2"
            >
              <PiUserListBold className="pl-2 w-6" />
              <input
                type="text"
                placeholder="Estoy libre para jugar a las tardes"
                className="polygon pl-2 py-2 focus:border-none block w-full bg-transparent focus:outline-none sm:text-base"
              />
            </div>
          </label>
        </div>

        <div className="mt-10">
          <h5 className="pb-2 text-xl sm:mt-10 font-[700] mt-2">
            Plataformas preferidas
          </h5>
          <div className="flex gap-10 ">
            {platforms.map(({ value, Icon, label }) => (
              <label
                key={value}
                className={`w-fit flex flex-col items-center justify-center text-sm ${
                  selectedPlatforms.includes(value)
                    ? 'opacity-100'
                    : 'opacity-20'
                }`}
                htmlFor={value}
              >
                <input
                  type="checkbox"
                  name="platform"
                  className="hidden"
                  value={value}
                  id={value}
                  checked={selectedPlatforms.includes(value)}
                  onChange={() => handlePlatformChange(value)}
                />
                <Icon />
                {label}
              </label>
            ))}
          </div>
        </div>

        <div className="">
          <h4 className="font-[700] text-xl">
            Agrega los juegos que te gustan
          </h4>
          <div className="flex gap-1 pt-2">
            <GameSelector
              onSelectGame={setSelectedGames}
              selectedGames={selectedGames}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
