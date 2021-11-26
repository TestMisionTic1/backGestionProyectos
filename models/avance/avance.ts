import { Schema, model } from 'mongoose';
import { projectModel } from '../proyecto/proyecto';
import { userModel } from '../usuario/usuario';

interface Advancement {
  fecha: Date;
  descripcion: string;
  observaciones: [string];
  proyecto: Schema.Types.ObjectId;
  creadoPor: Schema.Types.ObjectId;
}

const advancementSchema = new Schema<Advancement>({
  fecha: {
    type: Date,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  observaciones: [
    {
      type: String,
    },
  ],
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: projectModel,
    required: true,
  },
  creadoPor: {
    type: Schema.Types.ObjectId,
    ref: userModel,
    required: true,
  },
});

const advancementModel = model('Advance', advancementSchema);
export { advancementModel };
