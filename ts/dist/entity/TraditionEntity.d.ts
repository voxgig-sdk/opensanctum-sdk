import { OpensanctumEntityBase } from '../OpensanctumEntityBase';
import type { OpensanctumSDK } from '../OpensanctumSDK';
import type { Control } from '../types';
import type { Tradition, TraditionListMatch } from '../OpensanctumTypes';
declare class TraditionEntity extends OpensanctumEntityBase<Tradition> {
    constructor(client: OpensanctumSDK, entopts: any);
    make(this: TraditionEntity): TraditionEntity;
    list(this: any, reqmatch?: TraditionListMatch, ctrl?: Control): Promise<TraditionEntity[]>;
}
export { TraditionEntity };
