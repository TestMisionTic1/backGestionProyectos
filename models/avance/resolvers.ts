import { advancementModel } from './avance';

const resolversAvances = {
  Query: {
    Avances: async (parent, args) => {
      const avances = await advancementModel
        .find()
        .populate('proyecto')
        .populate('creadoPor');
      return avances;
    },
    FiltrarAvances: async (parent, args) => {
      const avancefiltrado = await advancementModel
        .find({ proyecto: args.idProyecto })
        .populate('proyecto')
        .populate('creadoPor');
      return avancefiltrado;
    },
  },

  Mutation: {
    crearAvance: async (parent, args) => {
      const avanceCreado = await advancementModel.create({
        fecha: args.fecha,
        descripcion: args.descripcion,
        proyecto: args.proyecto,
        creadoPor: args.creadoPor,
      });
      return avanceCreado;
    },
  },
};

export { resolversAvances };
