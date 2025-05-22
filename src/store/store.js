import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import clientReducer from "./clientSlice";
import propertyReducer from "./propertySlice";
import rentalContractsReducer from "./rentalContractSlice";
import brokerReducer from "./brokerSlice";
import viewReducer from "./viewSlice";
import communityReducer from "./communitySlice";
import subCommunityReducer from "./subCommunitySlice";
import typeReducer from "./typeSlice";
import developerReducer from "./developerSlice";
import bankReducer from "./bankSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        client: clientReducer,
        property: propertyReducer,
        rentalContract: rentalContractsReducer,
        broker: brokerReducer,
        view: viewReducer,
        community: communityReducer,
        subCommunity: subCommunityReducer,
        types: typeReducer,
        developer: developerReducer,
        bank: bankReducer
    },
});