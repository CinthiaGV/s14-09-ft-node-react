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

import { GameSelector } from './GameSelector';
import GenreSelector from './GenreSelector';

const ProfileForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const [selectedGames, setSelectedGames] = useState<string[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const platforms = [
    { value: 'mobile', Icon: CellphoneIcon, label: 'Mobile' },
    { value: 'pc', Icon: ComputerIcon, label: 'PC' },
    { value: 'console', Icon: ConsoleIcon, label: 'Console' },
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

  const handleProfilePicChange = (e: { target: { files: (Blob | MediaSource)[]; }; }) => {
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
      <h4 className=" pb-[41px] text-4xl">Completá tu Perfil</h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 sm:w-[50%] text-white "
      >
        <label htmlFor="username" className="block sm:text-xs   opacity-90 ">
          Nombre de usuario
          <div className="polygon bg-gray mb-2 py-2 sm:mb-10 flex sm:text-base items-center  w-[80%] mt-2">
            <AccountCircleIcon classNames="pl-2" />
            <input
              type="text"
              id="username"
              {...register('username', { required: true })}
              className="polygon pl-2 py-2 focus:border-none block w-full bg-transparent focus:outline-none sm:text-base"
            />
            {errors.username && (
              <span className="text-red-500">Este campo es requerido</span>
            )}
          </div>
        </label>

        <div className="flex gap-2  w-[100%]   ">
          <label htmlFor="date" className="w-[60%] text-xs">
            Fecha
            <div className="h-12  items-start justify-start rounded-md text-base mt-2">
              <div className=" mt-1">
                <DatePicker
                  id="date"
                  className="polygon h-12 bg-gray pl-3 pt-2 text-md focus:outline-none "
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  placeholderText="mm/dd/aa"
                />
              </div>
            </div>
          </label>
          <label htmlFor="genre" className="w-[40%] text-xs">
            Género
            <div className="bg-gray h-12  rounded-md w-[100%] mt-2">
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
        <div className="mt-10">
          <h5 className="pb-2 text-xl sm:mt-10 mt-2">Plataforma preferida</h5>
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
          <h4>Agrega los juegos que te gustan</h4>
          <div className="flex gap-1 pt-2">
            <GameSelector
              onSelectGame={setSelectedGames}
              selectedGames={selectedGames}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="polygon inline-flex justify-center rounded-lg border border-white px-36 bg-transparent py-2  text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Finalizar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
