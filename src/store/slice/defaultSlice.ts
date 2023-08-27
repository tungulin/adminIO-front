import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IDefaultSliceState } from './ISlice'

const initialState: IDefaultSliceState = {
    theme: localStorage.getItem('theme') || 'default'
}

export const defaultSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        toogleTheme: (state) => {
            state.theme === 'default' ? state.theme = 'dark' : state.theme = 'default'
            localStorage.setItem('theme', state.theme)
        },
        // setCountry: (state, action: PayloadAction<ICountry>) => { state.country = action.payload },
        // setWeather: (state, action: PayloadAction<IWeather>) => { state.weather = action.payload },
        // setLocationsWeather: (state, action: PayloadAction<ILocationsWeather[]>) => { state.locationsWeather = action.payload },
    },
})

export const { toogleTheme } = defaultSlice.actions