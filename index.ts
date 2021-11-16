import conectarDb from './db/db';
import { userModel } from './models/user';
import {
  Enum_EstadoUsuario,
  Enum_Rol,
  Enum_TipoObjetivo,
} from './models/enums';
import { projectModel } from './models/project';
import { ObjectiveModel } from './models/objective';
import { ObjectId } from 'mongoose';
// METODOLOGIA ON TO MANY # 1
const crearProyectoconObjetivos = async () => {
  const usuarioInicial = await userModel.create({
    nombre: 'David',
    apellido: 'Salguero',
    correo: 'dsp5502@gmail.com',
    identificacion: '10324447',
    rol: Enum_Rol.administrador,
    estado: Enum_EstadoUsuario.autorizado,
  });

  const proyecto = await projectModel.create({
    nombre: 'Proyecto Mision TIC',
    fechaInicio: new Date('2021/12/24'),
    fechaFin: new Date('2022/12/24'),
    presupuesto: 120000,
    lider: usuarioInicial._id,
  });

  const objetivoGeneral = await ObjectiveModel.create({
    descripcion: 'Este es el obj General',
    tipo: Enum_TipoObjetivo.general,
    proyecto: proyecto._id,
  });
  const objetivoEspecifico = await ObjectiveModel.create({
    descripcion: 'Este es el obj Especifico 1',
    tipo: Enum_TipoObjetivo.especifico,
    proyecto: proyecto._id,
  });
  const objetivoEspecifico2 = await ObjectiveModel.create({
    descripcion: 'Este es el obj Espescifico 2',
    tipo: Enum_TipoObjetivo.especifico,
    proyecto: proyecto._id,
  });
};

const consultaProyectoconObjetivos = async () => {
  const proyecto = await projectModel.findOne({
    _id: '61941ea87cf82212e146fbac',
  });
  console.log('El proyecto es:  ', proyecto);

  const objetivos = await ObjectiveModel.find({
    project: '61941ea87cf82212e146fbac',
  });
  console.log('Los Objetivos del proyecto  son:  ', objetivos);
  const proyectoconObjetivos = { ...proyecto, objetivos: objetivos };
  console.log('El Proyecto con Objetivos es ', proyectoconObjetivos);
};
const main = async () => {
  await conectarDb();
};

main();

//CRUD USUARIO

// crear un usuario

//  await userModel.create({
//     nombre: "David",
//     apellido: "Salguero",
//     correo: "dsp5502@gmail.com",
//     identificacion: "10324447",
//     rol: Enum_Rol.lider
//   }).then((u) => {
//       console.log("usuario Creado", u);
//     })
//     .catch((e) => {
//       console.error("Error creando el usuario", e);
//     });

// obtener los usuarios
// await userModel.find().then((u) => {
//       console.log("usuario ", u);
//     })
//     .catch((e) => {
//       console.error("Error obteniendo los usuario", e);
//     });

//OBTENER UN SOLO USUARIO

// await userModel.findOne({identificacion: "45464"}).then((u) => {
//       console.log("usuario Encontrado", u);
//     })
//     .catch((e) => {
//       console.error( e);
//     });

//EDITAR UN USUARIO:

// await userModel.findOneAndUpdate(
//   {correo: "dsp5502@gmail.com" },
//   {
//     nombre: "Daniel",
//     apellido:"Lopez",
//   }).then((u) => {
//       console.log("usuario Editado", u);
//     })
//     .catch((e) => {
//       console.error("Error Editando el usuario", e);
//     });

//eliminar Ususario
// await userModel.findOneAndDelete(
//   {correo: "dsp5502@gmail.com"},

//   ).then((u) => {
//       console.log("usuario Eliminado", u);
//     })
//     .catch((e) => {
//       console.error("Error Eliminado usuario", e);
//     });
