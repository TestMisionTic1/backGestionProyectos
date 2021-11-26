import { gql } from 'apollo-server-express';
import { tiposProyecto } from '../models/proyecto/tipos';

import { tiposUsuario } from '../models/usuario/tipos';

import { tipoEnum } from '../models/enums/tipos';
import { tipoAvance } from '../models/avance/tipos';

const tiposGlobales = gql`
  scalar Date
`;
export const tipos = [
  tiposGlobales,
  tiposProyecto,
  tiposUsuario,
  tipoEnum,
  tipoAvance,
];
