'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';
import { CellphoneIcon, ComputerIcon, ConsoleIcon } from '../../assets';

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
      <h4 className=" pb-[41px] text-4xl">Termina de completar tu Perfil</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 sm:w-[50%] ">
        <div className="border-2 mb-2 sm:mb-10  border-gray-200 rounded-lg w-[80%]">
          <div className="px-6 py-1">
            <label
              htmlFor="username"
              className="block sm:text-md text-gray-400 opacity-90 "
            >
              Nombre completo
            </label>
            <div>
              <input
                type="text"
                id="username"
                {...register('username', { required: true })}
                className="block w-full bg-transparent focus:outline-none  sm:text-md"
              />
              {errors.username && (
                <span className="text-red-500">Este campo es requerido</span>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2   ">
          <div className="w-[60%] h-12 border-gray-300 border-2 rounded-md">
            <div className="mt-1 px-2">
              <DatePicker
                className=" bg-transparent pl-3 pt-2 text-md focus:outline-none "
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                placeholderText="MM / DD / YYYY"
              />
            </div>
          </div>
          <div></div>
          <div className="  border-2 border-gray-300 rounded-md w-[30%]">
            <GenreSelector
              selectedGenre={selectedGenre}
              setSelectedGenre={setSelectedGenre}
            />

            {errors.username && (
              <span className="text-red-500">Este campo es requerido</span>
            )}
          </div>
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
            className="inline-flex justify-center rounded-lg border border-white px-36 bg-transparent py-2  text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Finalizar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
