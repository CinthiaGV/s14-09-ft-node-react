'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';
import { CellphoneIcon, ComputerIcon, ConsoleIcon } from '../../assets';

import { GameSelector } from './GameSelector';

const ProfileForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState('mobile');
  const [selectedGames, setSelectedGames] = useState<string[]>([]);

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

  return (
    <div className="px-4 sm:pl-[82px] py-[104px] text-[#FFFFFF]">
      {' '}
      <h4 className=" pb-[41px] text-4xl">Termina de completar tu Perfil</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:w-[50%] ">
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
                className=" bg-transparent pl-2 pt-2 text-md focus:outline-none "
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                placeholderText="MM/DD/YYYY"
              />
            </div>
          </div>
          <div></div>
          <div className=" py-3  border-2 border-gray-300 rounded-md w-[30%]">
            <div className=" px-2">
              <select
                id="genre"
                {...register('genre', { required: true })}
                className="appearance-none block w-full bg-transparent focus:outline-none  sm:text-sm"
              >
                <option value="" disabled selected>
                  Género
                </option>
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
                <option value="Otros">Otros</option>
              </select>
              {errors.username && (
                <span className="text-red-500">Este campo es requerido</span>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h5 className="pb-2 text-xl sm:mt-10 mt-2">Plataforma preferida</h5>
          <div className="flex gap-10 ">
            {platforms.map(({ value, Icon, label }) => (
              <label
                key={value}
                className={` w-fit flex flex-col items-center justify-center text-sm ${
                  selectedPlatform === value ? 'opacity-100' : 'opacity-20'
                }`}
                htmlFor={value}
              >
                <input
                  type="radio"
                  name="platform"
                  value={value}
                  id={value}
                  checked={selectedPlatform === value}
                  onChange={(e) => setSelectedPlatform(e.target.value)}
                />
                <Icon />
                {label}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h4>Agrega los juegos que te gustan</h4>
          <div className="flex gap-1">
            <GameSelector
              onSelectGame={setSelectedGames}
              selectedGames={selectedGames}
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Finalizar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
