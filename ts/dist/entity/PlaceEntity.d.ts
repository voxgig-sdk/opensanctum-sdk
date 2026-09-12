import { OpensanctumEntityBase } from '../OpensanctumEntityBase';
import type { OpensanctumSDK } from '../OpensanctumSDK';
import type { Control } from '../types';
import type { Place, PlaceListMatch } from '../OpensanctumTypes';
declare class PlaceEntity extends OpensanctumEntityBase<Place> {
    constructor(client: OpensanctumSDK, entopts: any);
    make(this: PlaceEntity): PlaceEntity;
    list(this: any, reqmatch?: PlaceListMatch, ctrl?: Control): Promise<PlaceEntity[]>;
}
export { PlaceEntity };
