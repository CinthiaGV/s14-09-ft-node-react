import { Router } from "express";
import { prisma } from "../../../../database.js";

const router = Router();

export const getAllImage = async (req, res) => {
  try {
  const response = await prisma.image.findMany();
  console.log(response);
  res.status(200).json({
    status: "success",
    message: "Trae todas las imagenes",
    data: response,
  })
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Existe un problema al obtener todas las imagenes",
      msg: error.message,
    })
  }
}

export const getByImageId = async (req, res) => {
  try {
  const response = await prisma.image.findUnique({
    where: {
      id: req.params.id
    }
  });
  if(!image) {
    return res.status(404).json({
      status:'error',
      message:'No se encontro la imagen',
    })
  }
  res.status(200).json({
    status:'success',
    message:'Trae la imagen por id es obtenida',
    data:response
  })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      status:'success',
      message:'Error en la busqueda de la imagen por id',
      error:error.message
      
    })
  }
}

// export const UpdateImage = async (req, res) => {
//   try {
  
//   } catch (error) {
    
//   }
// }

// export const DeleteImage = async (req, res) => {
//   try {
  
//   } catch (error) {
    
//   }
// }
