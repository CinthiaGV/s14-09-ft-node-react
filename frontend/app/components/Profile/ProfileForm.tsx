'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';
import {
  CellphoneIcon,
  ComputerIcon,
  ConsoleIcon,
  PlusIcon,
} from '../../assets';
import addGameImage from '../../assets/addGame.png';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from '@nextui-org/react';
import { GameSelector } from './GameSelector';

const ProfileForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState('mobile');
  const [selectedGames, setSelectedGames] = useState([]);

  useEffect(() => {
    console.log(selectedPlatform);
  }, [selectedPlatform]);

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
    <div className="pl-[82px] py-[104px] text-[#FFFFFF]">
      {' '}
      <h4 className=" pb-[41px] text-4xl">Termina de completar tu Perfil</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-[50%] ">
        <div className="border-2 mb-10 border-gray-200 rounded-lg w-[80%]">
          <div className="px-6 py-2">
            <label
              htmlFor="username"
              className="block sm:text-md text-gray-400 opacity-90 "
            >
              Nombre completo
            </label>
            <div className="mt-1">
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

        <div className="flex gap-2   ">
          <div className="w-[60%] border-gray-300 border-2 rounded-md">
            <div className="mt-1 px-2">
              <DatePicker
                className=" bg-transparent pl-2 text-md focus:outline-none "
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
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
        <div className="!mt-0 pl-4">MM/DD/YYYY</div>

        <div>
          <h5 className="pb-2 text-xl mt-10">Plataforma preferida</h5>
          <div className="flex gap-10 ">
            <label
              className={`w-fit flex flex-col items-center justify-center text-sm ${
                selectedPlatform === 'mobile' &&
                'border-[1px] border-red-700 rounded-md m-[-1px]'
              }`}
              htmlFor="mobile"
            >
              <input
                type="radio"
                name="platform"
                value="mobile"
                id="mobile"
                checked={selectedPlatform === 'mobile'}
                onChange={(e) => setSelectedPlatform(e.target.value)}
              />
              <CellphoneIcon />
              Mobile
            </label>
            <label
              className={`w-fit flex flex-col items-center justify-center text-sm ${
                selectedPlatform === 'pc' &&
                'border-[1px] border-red-700 rounded-md m-[-1px]'
              }`}
              htmlFor="pc"
            >
              <input
                type="radio"
                name="platform"
                value="pc"
                id="pc"
                checked={selectedPlatform === 'pc'}
                onChange={(e) => setSelectedPlatform(e.target.value)}
              />
              <ComputerIcon />
              PC
            </label>
            <label
              className={`w-fit flex flex-col items-center justify-center text-sm ${
                selectedPlatform === 'console' &&
                'border-[1px] border-red-700 rounded-md m-[-1px]'
              }`}
              htmlFor="console"
            >
              <input
                type="radio"
                name="platform"
                value="console"
                id="console"
                checked={selectedPlatform === 'console'}
                onChange={(e) => setSelectedPlatform(e.target.value)}
              />
              <ConsoleIcon />
              Console
            </label>
          </div>
        </div>

        <div>
          <h4>Agrega los juegos que te gustan</h4>
          <div className="flex gap-1">
            <Popover placement="bottom" offset={0}>
              <PopoverTrigger>
                <Button>
                  <Image
                    src={addGameImage}
                    alt="Add Game"
                    width={90}
                    height={75}
                  />
                  <PlusIcon classNames="absolute translate-y-[-50%]" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <GameSelector onSelectGame={setSelectedGames} />
                </div>
              </PopoverContent>
            </Popover>
            <Popover placement="bottom" offset={0}>
              <PopoverTrigger>
                <Button>
                  <Image
                    src={addGameImage}
                    alt="Add Game"
                    width={90}
                    height={75}
                  />
                  <PlusIcon classNames="absolute translate-y-[-50%]" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <GameSelector onSelectGame={setSelectedGames} />
                </div>
              </PopoverContent>
            </Popover>
            <Popover placement="bottom" offset={0}>
              <PopoverTrigger>
                <Button>
                  <Image
                    src={addGameImage}
                    alt="Add Game"
                    width={90}
                    height={75}
                  />
                  <PlusIcon classNames="absolute translate-y-[-50%]" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <GameSelector onSelectGame={setSelectedGames} />
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* <div>
          <label htmlFor="profilePic" className="block text-sm font-medium ">
            Foto de perfil
          </label>
          <div className="mt-1 flex items-center">
            <input
              type="file"
              id="profilePic"
              accept="image/*"
              onChange={handleProfilePicChange}
              className="block w-full text-sm  file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
            {profilePic && (
              <Image
                src={profilePic}
                alt="Profile"
                className="ml-4 h-16 w-16 rounded-full"
                width={64}
                height={64}
              />
            )}
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium ">
            Breve descripción personal
          </label>
          <div className="mt-1">
            <textarea
              id="description"
              rows={3}
              {...register("description")}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div> */}

        <div>
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Guardar cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
