import { Schema, model } from 'mongoose';
import { Enum_EstadoInscipcion } from './enums';
import { projectModel } from './project';
import { userModel } from './user';

interface Inscription {
  estado: Enum_EstadoInscipcion;
  fechaIngreso: Date;
  FechaEgreso: Date;
  proyecto: Schema.Types.ObjectId;
  estudiante: Schema.Types.ObjectId;
}

const inscriptionSchema = new Schema<Inscription>({
  estado: {
    type: String,
    enum: Enum_EstadoInscipcion,
    required: true,
  },
  fechaIngreso: {
    type: Date,
    required: true,
  },
  FechaEgreso: {
    type: Date,
    required: true,
  },
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: projectModel,
    required: true,
  },
  estudiante: {
    type: Schema.Types.ObjectId,
    ref: userModel,
    required: true,
  },
});

const inscriptionModel = model('Inscription', inscriptionSchema);
export { inscriptionModel };
