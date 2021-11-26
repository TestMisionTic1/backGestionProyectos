import { userModel } from './usuario';

const resolversUsuario = {
  Query: {
    Usuarios: async (parent, args) => {
      const usuarios = await userModel.find();
      return usuarios;
    },
    Usuario: async (parent, args) => {
      const usuario = await userModel.findOne();
      return usuario;
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
  },
};

export { resolversUsuario };
