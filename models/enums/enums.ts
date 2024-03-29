enum Enum_Rol {
  ESTUDIANTE = 'ESTUDIANTE',
  LIDER = 'LIDER',
  ADMINISTRADOR = 'ADMINISTRADOR',
}
enum Enum_EstadoUsuario {
  PENDIENTE = 'PENDIENTE',
  AUTORIZADO = 'AUTORIZADO',
  NO_AUTORIZADO = 'NO_AUTORIZADO',
}
enum Enum_EstadoProyecto {
  ACTIVO = 'ACTIVO',
  INACTIVO = 'INACTIVO',
}

enum Enum_FaseProyecto {
  INICIADO = 'INICIADO',
  DESARROLLO = 'DESARROLLO',
  TERMINADO = 'TERMINADO',
  NULA = ' ',
}
enum Enum_TipoObjetivo {
  GENERAL = 'GENERAL',
  ESPECIFICO = 'ESPECIFICO',
}
enum Enum_EstadoInscipcion {
  aceptada = 'Aceptada',
  rechazada = 'Rechazada',
}

export {
  Enum_Rol,
  Enum_EstadoUsuario,
  Enum_EstadoProyecto,
  Enum_FaseProyecto,
  Enum_TipoObjetivo,
  Enum_EstadoInscipcion,
};
