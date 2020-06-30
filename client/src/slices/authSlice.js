import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const createAccountSlice = createSlice( {
    name: 'createAccount',
    initialState: {
        data: null,
        error: null,
        currentUser: {},
    },
    reducers: {
        setCurrentUser( state, action )
        {
            state.currentUser = action.payload;
        },

    }
} );

export const { setCurrentUser } = createAccountSlice.actions;
export default createAccountSlice.reducer;

export const setCurrentUserAction = ( { currentUser } ) => async dispatch =>
{
    dispatch( setCurrentUser( { currentUser } ) );
};