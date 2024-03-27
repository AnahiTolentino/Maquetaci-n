import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//Obtenemos del storage los datos del usuario
const user = JSON.parse (localStorage.getItem('user'))

const initialState = {  //ésta es una rebanada
    user: user ? user: null,  //Lo que tenemos aquí a lado es un operador terniariossss
    isError: false,
    isSuccess: false,
    isLoalding: false,
    message: ''
}

//Registrar un nuevo usuario
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        return await authServices.register(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString ()
        return thunkAPI.rejectWithValue(message)        
    }
})

export const authSlice = createSlice ({
    name: 'auth',
        initialState,
            reducers: {
                reset: (state) => {
                    state.isLoading = false
                    state.isError = false
                    state.isSucess = false
                    state.message = ''
                }
    },
    extrareducers: (builder) => {
        builder
        .addCase(register.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(register.rejected, (state, action) => {
            state.isLoading = false
        })
    }
})

export const { reset } =authSlice.actions
export default authSlice.reducer

//En el localStorage cuando yo cierro el navegador se guardan los datos
//SessionStorage: al cerra el navegador se borran los datos