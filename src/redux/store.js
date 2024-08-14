import { appReducer } from './appReducer'
import logger from 'redux-logger'
import { configureStore } from "@reduxjs/toolkit";

export const appStore = configureStore({
    reducer: {
        appReducer
    },
    middleware: () => {
        return [logger]
    }
});
