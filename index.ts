import conectarDb from "./db/db";
import { userModel } from "./models/user";
import { Enum_Rol } from "./models/enums";


const main = async () => {
  await conectarDb();

  // crear un usuario
  
 await userModel.create({
    nombre: "David",
    apellido: "Salguero",
    correo: "dsp5502@hotmail.com",
    identificacion: "45464",
    rol: Enum_Rol.lider
  }).then((u) => {
      console.log("usuario Creado", u);
    })
    .catch((e) => {
      console.error("Error creando el usuario", e);
    });


// obtener los usuarios 
// await userModel.find().then((u) => {
//       console.log("usuario ", u);
//     })
//     .catch((e) => {
//       console.error("Error obteniendo los usuario", e);
//     });

};
  main();
