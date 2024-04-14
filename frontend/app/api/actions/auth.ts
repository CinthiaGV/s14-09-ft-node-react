import axios from 'axios';
import { ILogIn, IUser, Iregister } from '../../models/auth';
import { endpoint } from './endpoint';

export const registerUser = async (values: IUser) => {
  try {
    const info:Iregister = {userData:values}
    const { data } = await axios.post(`${endpoint}/users/signup`, info);
    return data
  } catch (error) {
    console.log('Unsucessful register!', error);
    // Aquí podrías manejar el error de alguna otra manera o lanzarlo de nuevo
    throw error;
  }
};

export const LoginUser = async (values: ILogIn) => {
  console.log('values: ', values);
  window.alert(JSON.stringify(values));
  try {
    const info = values;
    console.log('info: ', info);
    const { data } = await axios.post(`${endpoint}/users/signin` || '', info);
    return data;
  } catch (error) {
    console.log('Login no exitoso', error);
  }
};
