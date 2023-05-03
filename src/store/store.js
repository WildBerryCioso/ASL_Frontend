import { configureStore} from '@reduxjs/toolkit';

import {authSlice} from './';
import { productoslice } from './ASL/productoSlice';
import { uiSlice } from './';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        producto: productoslice.reducer,
        ui: uiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})