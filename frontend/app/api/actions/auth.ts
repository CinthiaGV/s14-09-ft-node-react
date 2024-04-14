import axios from "axios"
import { endpoint } from "./endpoint"


export const registerUser = async (values:Object) => {
  try {
    const info = {userData: values}
  const {data}= await axios.post(`${endpoint}/users/signup`||"", info)
  console.log(data)
} catch (error) {
    console.log('Registro no exitoso', error)
    
  }
}