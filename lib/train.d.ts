import brain from 'brain.js';
export declare let train: ({ brainType, prepocessor, retrain, name, options, trainingOptions }: {
    brainType: any;
    prepocessor?: ((x: any) => any) | undefined;
    retrain: any;
    name: any;
    options?: {} | undefined;
    trainingOptions?: {} | undefined;
}) => brain.INeuralNetworkJSON;
