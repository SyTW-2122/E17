import User from '../models/user.models';
import Role from '../models/role.models';
import jwt from 'jsonwebtoken';
import config from '../config';


export const signUp = async (request, response) => {
  const content = request.body

  const newUser = new User({
    email: content.email,
    password: await User.encryptPassword(content.password),
    name: content.name,
    surname: content.surname
  });

  if(content.role){
    const foundRole = await Role.findOne({name: content.role})
    newUser.role = foundRole._id;
  }
  else {
    const foundRole = await Role.findOne({name: "user"})
    newUser.role = foundRole._id;
  }

  console.log(newUser);

  newUser.save()
  .then(result => {
    const token = jwt.sign({id: result._id},config.secretTokenGenerator,{
      expiresIn: 86400 // 24 horas
    });
    response.status(201).json({token})
  });
}

export const signIn = async (request, response) => {
  const content = request.body;
  const userFound = await User.findOne({"email": content.email}).populate('role');

  if(!userFound) return response.status(404).json("Usuario no encontrado");
  
  if(!await User.comparePassword(content.password, userFound.password)){
    return response.status(401).json({"token": null, message: "Contraseña incorecta"});
  }

  const token = jwt.sign({id: userFound._id},config.secretTokenGenerator,{
    expiresIn: 86400 // 24 horas
  });
  response.status(201).json({token})
}

export const profileData = async (request, response) => {
  const token = request.body.token;
  if (!token) return response.status(403).json({ message: "No existe el token"})
  var decoded;
  try {
    decoded = jwt.verify(token, config.secretTokenGenerator);
  } catch(err) {
    return response.status(400).json({message: "Token no valido"})
  }
  const userFound = await User.findById(decoded.id)
  if(!userFound) return response.status(400).json({message: "Usuario no encontrado"})

  const data = {
    "email" : userFound.email,
    "name" : userFound.name,
    "surname" : userFound.surname
  }
  response.status(200).json(data)
}