import conectarDb from "./db/db";
import { userModel } from "./models/user";
import { Enum_Rol, Enum_TipoObjetivo } from "./models/enums";
import { projectModel } from "./models/project";
import { ObjectiveModel } from "./models/objective";


const main = async () => {
  await conectarDb();

  // const object =  await ObjectiveModel.create({
  //   descripcion: " Este es el Objetivo Especifico",
  //   tipo: Enum_TipoObjetivo.especifico
  // })

//Crear Proyecto
  // await projectModel.create({
  // nombre: "Mintic",
  // presupuesto: 10.000,
  // fechaInicio: Date.now(),
  // fechaFin: new Date("2021/11/10"),
  // lider: "618eb4cb8ae752bc9d191b80",
  // objetivos:[ "618eeb00f9695afa5a6443de", "618eeb7222e8cf5ede833025"]
  // })

//consultar proyecto
const proyecto= await projectModel.find({nombre: "Mintic"}).populate("lider").populate("objetivos")
console.log("El proyecto es:  ", JSON.stringify(proyecto))

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
