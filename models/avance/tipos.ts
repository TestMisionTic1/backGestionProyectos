import { gql } from 'apollo-server-express';

const tipoAvance = gql`
  type Avance {
    id: ID!
    fecha: Date!
    descripcion: String!
    observaciones: [String]
    proyecto: Proyecto!
    creadoPor: Usuario!
  }

  type Query {
    Avances: [Avance]
    FiltrarAvances(idProyecto: String!): [Avance]
  }

  type Mutation {
    crearAvance(
      fecha: Date!
      descripcion: String!
      proyecto: String!
      creadoPor: String!
    ): Avance
  }
`;
export { tipoAvance };
