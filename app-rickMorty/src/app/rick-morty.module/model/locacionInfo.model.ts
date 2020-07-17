import { InfoModel } from './info.model';
import { LocacionModel } from './locacion.model';

export interface LocacionInfoModel {
    info: InfoModel;
    results: LocacionModel[];
}
