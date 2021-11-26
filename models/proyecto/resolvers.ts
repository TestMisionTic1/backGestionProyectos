import { projectModel } from './proyecto';

const resolversProyectos = {
  Query: {
    Proyectos: async (parent, args) => {
      const proyectos = await projectModel.find().populate('lider');
      return proyectos;
    },
  },
  Mutation: {
    crearProyecto: async (parent, args) => {
      const proyectoCreado = await projectModel.create({
        nombre: args.nombre,
        estado: args.estado,
        fase: args.fase,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        presupuesto: args.presupuesto,
        lider: args.lider,
        objetivos: args.objetivos,
      });
      return proyectoCreado;
    },
  },
};

export { resolversProyectos };
