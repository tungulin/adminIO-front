import { configureStore } from '@reduxjs/toolkit'
import { defaultSlice } from './slice/defaultSlice'
import { userSlice } from './slice/userSlice'

export const store = configureStore({
    reducer: {
        default: defaultSlice.reducer,
        user: userSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})
