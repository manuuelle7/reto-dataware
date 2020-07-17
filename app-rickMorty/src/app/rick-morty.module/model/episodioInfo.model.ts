import { InfoModel } from './info.model';
import { EpisodioModel } from './episodio.model';

export interface EpisodioInfoModel {
    info: InfoModel;
    results: EpisodioModel[];
}
