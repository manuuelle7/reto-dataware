import { InfoModel } from './info.model';
import { PersonajeModel } from './personaje.model';

export interface PersonajeInfoModel {
    info: InfoModel;
    results: PersonajeModel[];
}
