import { projectModel } from '../models/project';
import { userModel } from '../models/user';

const resolvers = {
  Query: {
    Usuarios: async (parent, args) => {
      const usuarios = await userModel.find();
      return usuarios;
    },
    Usuario: async (parent, args) => {
      const usuario = await userModel.findOne();
      return usuario;
    },
    Proyectos: async (parent, args) => {
      const proyectos = await projectModel.find().populate('lider');
      return proyectos;
    },
  },
  Mutation: {
    crearUsuario: async (parent, args) => {
      const usuarioCreado = await userModel.create({
        nombre: args.nombre,
        apellido: args.apellido,
        correo: args.correo,
        identificacion: args.identificacion,
        rol: args.rol,
      });
      if (Object.keys(args).includes('estado')) {
        usuarioCreado.estado = args.estado;
      }
      return usuarioCreado;
      console.log('estoy ejecutando la mutacion de creacion de usuario');
    },

    editarUsuario: async (parent, args) => {
      const usuarioEditado = await userModel.findByIdAndUpdate(args._id, {
        nombre: args.nombre,
        apellido: args.apellido,
        correo: args.correo,
        identificacion: args.identificacion,
        rol: args.rol,
        estado: args.estado,
      });
      return usuarioEditado;
    },
    eliminarUsuario: async (parent, args) => {
      if (Object.keys(args).includes('_id')) {
        const usuarioEliminado = await userModel.findOneAndDelete({
          _id: args._id,
        });
        return usuarioEliminado;
      } else if (Object.keys(args).includes('correo')) {
        const usuarioEliminado = await userModel.findOneAndDelete({
          correo: args.correo,
        });
        return usuarioEliminado;
      }
    },
    crearProyecto: async (parent, args) => {
      const proyectoCreado = await projectModel.create({
        nombre: args.nombre,
        estado: args.estado,
        fase: args.fase,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        presupuesto: args.presupuesto,
        lider: args.lider,
        objetivos: [
          { descripcion: 'este es el objetivo General', tipo: 'GENERAL' },
        ],
      });
      return proyectoCreado;
    },
  },
};

export { resolvers };
