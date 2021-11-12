import { connect } from "mongoose";

const conectarDb = async () => {
  return await connect(
    "mongodb+srv://admin:adminProyectos@gestionproyectsosmision.wlsmz.mongodb.net/GestionProyectos?retryWrites=true&w=majority"
  )
    .then(() => {
      console.log("conexion Exitosa");
    })
    .catch((e) => {
      console.error("Error conectando a la Db", e);
    });
};

export default conectarDb;
