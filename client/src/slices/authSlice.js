import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const createAccountSlice = createSlice( {
    name: 'createAccount',
    initialState: {
        data: null,
        error: null,
        loading: false,
        userForm: {},
    },
    reducers: {
        createAccountStart( state )
        {
            state.loading = true;
        },
        createAccountSuccess( state, action )
        {
            const { data } = action.payload;
            state.loading = false;
            state.data = data;
        },
        createAccountFailed( state, action )
        {
            const { error } = action.payload;
            state.loading = false;
            state.error = error;
        }
    }
} );

export const { createAccountStart, createAccountSuccess, createAccountFailed } = createAccountSlice.actions;
export default createAccountSlice.reducer;

export const createAccount = ( { userForm } ) => async dispatch =>
{
    dispatch( createAccountStart() );
    try
    {
        const result = await axios.post( '', userForm );
        dispatch( createAccountSuccess( result ) );
    } catch ( err )
    {
        dispatch( createAccountFailed( err.toString() ) );
    }
};