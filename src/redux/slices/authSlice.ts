import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
    user: { id: string, name: string } | null;
    token: string | null,
    loading: boolean
}

const initialState: AuthState = {
    user: null,
    token: null,
    loading: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action: PayloadAction<{ user: AuthState['user']; token: string }>) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            AsyncStorage.setItem('token', action.payload.token);
            AsyncStorage.setItem('user', JSON.stringify(action.payload.user));
        },
        loginFailure: (state) => {
            state.loading = false;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            AsyncStorage.removeItem('token');
            AsyncStorage.removeItem('user');
        },
        setAuthFromStorage: (state, action: PayloadAction<{ user: AuthState['user']; token: string}>) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        }
    },
});

export const { loginStart, loginSuccess, loginFailure, logout, setAuthFromStorage } = authSlice.actions;
export default authSlice.reducer;