import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IConnection } from 'api/IAPI';
import { connectDatabase } from 'api/database'
import { IDatabaseSliceState } from '../ISlice';

export const connecterDatabase = createAsyncThunk(
    'database/connect',
    async (data: IConnection, thunkApi) => {
        try {
            const response = await connectDatabase(data)
            return response
        } catch (err) {
            return thunkApi.rejectWithValue(err)
        }
    }
);

// export const updaterUser = createAsyncThunk(
//     'user/updateUser',
//     async (data, thunkApi) => {
//         try {
//             const response = await updateUser(data)
//             return response
//         } catch (err) {
//             return thunkApi.rejectWithValue(err.response.data)
//         }
//     }
// );

// export const updateUserInfo = createAsyncThunk(
//     'user/getUserInfo',
//     async (data, thunkApi) => {
//         try {
//             const response = await getUserInfo(data)
//             return response
//         } catch (err) {
//             return thunkApi.rejectWithValue(err)
//         }
//     }
// );

const initialState: IDatabaseSliceState = {
    databases: []
}

export const databaseSlice = createSlice({
    name: 'database',
    initialState,
    reducers: {
        reset: () => initialState
    },
    extraReducers: builder => {
        builder
            .addCase(connecterDatabase.fulfilled, (state, action) => {
                // state.account = action.payload
                // state.isAuth = true
            })
    }
})


// export const { setWallet, reset, setWalletStatus } = userSlice.actions
