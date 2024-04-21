import axios from 'axios';
import { signIn } from 'next-auth/react';
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

export let validToken:Boolean = false

/*export const LoginUser = async (values: ILogIn) => {
  try {
    console.log("values", values)
    const info:ILogIn = values
    const { data } = await axios.post(`${endpoint}/users/signin`, info);
    console.log('loginData', data)
    if(data.meta.token) validToken = true
    return data
  } catch (error) {
    console.log('Unsucessful login!', error);
    // Aquí podrías manejar el error de alguna otra manera o lanzarlo de nuevo
    throw error;
  }
};*/


export const LoginUser = async (values:ILogIn) => {
  try {
    const {email, password} = values
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl: '/',
    });

    /*if (result.error) {
      console.log('result error componente signin', result);
      setError(result.error);
    } else {
      router.push('/');
    }*/
  } catch (error) {
    /*setError('Failed to login');*/

    console.log('Unsucessful login!', error);
    // Aquí podrías manejar el error de alguna otra manera o lanzarlo de nuevo
    throw error;
  }
};