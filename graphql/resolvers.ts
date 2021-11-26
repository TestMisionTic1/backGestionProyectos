import { resolversProyectos } from '../models/proyecto/resolvers';
import { resolversUsuario } from '../models/usuario/resolvers';
import { resolversAvances } from '../models/avance/resolvers';

export const resolvers = [
  resolversProyectos,
  resolversUsuario,
  resolversAvances,
];
