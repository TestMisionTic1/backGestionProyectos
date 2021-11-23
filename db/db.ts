import { connect } from 'mongoose';

const conectarDb = async () => {
  return await connect(process.env.DATABASE_URL)
    .then(() => {
      console.log('conexion Exitosa');
    })
    .catch((e) => {
      console.error('Error conectando a la Db', e);
    });
};

export default conectarDb;
