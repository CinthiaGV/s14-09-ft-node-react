'use client';
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

  const onSubmit = (data) => {
    console.log(data);
    // Lógica para enviar los datos del formulario al backend
  };

  const handleProfilePicChange = (e) => {
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
          <div className="polygon border-2 mb-2 sm:mb-10 flex sm:text-base items-center px-4 border-gray-200  w-[80%] mt-2">
            <AccountCircleIcon />
            <div className="px-4 py-5 ">
              <div>
                <input
                  type="text"
                  id="username"
                  {...register('username', { required: true })}
                  className="block w-full bg-transparent focus:outline-none sm:text-base"
                />
                {errors.username && (
                  <span className="text-red-500">Este campo es requerido</span>
                )}
              </div>
            </div>
          </div>
        </label>

        <div className="flex gap-2 items-center w-[100%]   ">
          <label htmlFor="date" className="w-[60%] text-xs">
            Fecha
            <div className="h-12 border-gray-300 border-2 rounded-md text-base mt-2">
              <div className="mt-1 px-2">
                <DatePicker
                  id="date"
                  icon={<CalendarIcon />}
                  showIcon
                  className=" bg-transparent pl-3 pt-2 text-md focus:outline-none "
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  placeholderText="mm/dd/aa"
                />
              </div>
            </div>
          </label>
          <label htmlFor="genre" className="w-[40%] text-xs">
            Género
            <div className="h-12 border-2 border-gray-300 rounded-md w-[100%] mt-2">
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
