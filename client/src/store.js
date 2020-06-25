import { configureStore } from '@reduxjs/toolkit';

import loginReducer from './slices/authSlice';


export default configureStore( {
    reducer: {
        auth: loginReducer,

    },
    devTools: true,
} );