import { configureStore } from '@reduxjs/toolkit'
import { defaultSlice } from './slice/defaultSlice'
import { databaseSlice } from './slice/database'
// import { defaultSlice } from './slice/defaultSlice'

export const store = configureStore({
    reducer: {
        default: defaultSlice.reducer,
        database: databaseSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})
