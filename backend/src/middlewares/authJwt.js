import config from "../config";
import User from "../models/user.models";
import Role from "../models/role.models.js";
import jwt from 'jsonwebtoken';

export const verifyToken = async (request, response, next) => {
  try {
    const token = request.headers["x-access-token"]
    if (!token) return response.status(403).json({ message: "No existe el token"})
    const decoded = jwt.verify(token, config.secretTokenGenerator);
    request.userId = decoded.id
    
    const user = await User.findById(request.userId, {password: 0});
    if(!user) return response.status(404).json({message: "Usuario no encontrado"})

    next()
  } catch(error){
    console.log(error)
    return response.status(401).json({message: "No tienes permisos"})
  }
}

export const isAdmin = async (request, response, next) => {
  const user = await User.findById(request.userId)
  const roleFound = await Role.findById(user.role._id)
  if(roleFound.name === "admin")
    next()
  else {
    return response.status(401).json({message: "No tienes permisos"})
  }
}