enum Enum_Rol {
  estudiante = "Estudiante",
  lider = "Lider",
  administrador = "Administrador",
}
enum Enum_EstadoUsuario {
  Pendiente = "Pendiente",
  autorizado = "Autorizado",
  noAutorizado = "No Autorizado",
}
enum Enum_EstadoProyecto {
  activo = "Activo",
  inactivo = "Inactivo",
}

enum Enum_FaseProyecto {
  iniciado = "Iniciado",
  desarrollo = "Desarrollo",
  terminado = "Termiando",
  nula = " ",
}
enum Enum_TipoObjetivo {
  general = "General",
  especifico = "Especifico",
}

export {
  Enum_Rol,
  Enum_EstadoUsuario,
  Enum_EstadoProyecto,
  Enum_FaseProyecto,
  Enum_TipoObjetivo,
};
