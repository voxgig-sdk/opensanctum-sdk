import { PlaceEntity } from './entity/PlaceEntity';
import { TraditionEntity } from './entity/TraditionEntity';
export type * from './OpensanctumTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { OpensanctumEntityBase } from './OpensanctumEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class OpensanctumSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Place(entopts?: Record<string, any>): PlaceEntity;
    Tradition(entopts?: Record<string, any>): TraditionEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): OpensanctumSDK;
    tester(testopts?: any, sdkopts?: any): OpensanctumSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof OpensanctumSDK;
export { stdutil, config, BaseFeature, OpensanctumEntityBase, OpensanctumSDK, SDK, };
