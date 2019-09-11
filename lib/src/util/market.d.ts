/// <reference types="lodash" />
export declare let getExtremes: (...args: any[]) => {
    lowest: unknown;
    highest: unknown;
};
export declare let normalizeMarketData: import("lodash").CurriedFunction2<any, any, {
    open: any;
    high: any;
    low: any;
    close: any;
}[]>;
export declare let denormalizeMarketData: import("lodash").CurriedFunction2<any, any, {
    open: any;
    high: any;
    low: any;
    close: any;
}[]>;
