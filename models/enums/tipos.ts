import { gql } from 'apollo-server-express';

const tipoEnum = gql`
  scalar Date

  enum Enum_EstadoUsuario {
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
  }

  enum Enum_Rol {
    ESTUDIANTE
    LIDER
    ADMINISTRADOR
  }

  enum Enum_EstadoProyecto {
    ACTIVO
    INACTIVO
  }

  enum Enum_FaseProyecto {
    INICIADO
    DESARROLLO
    TERMINADO
    NULA
  }

  enum Enum_TipoObjetivo {
    GENERAL
    ESPECIFICO
  }
`;

export { tipoEnum };
