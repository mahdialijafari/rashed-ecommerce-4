import { configureStore } from "@reduxjs/toolkit";
import authSlice from './Slices/AuthSlice'
import cartSlice from './Slices/CartSlice'
import themeSlice from './Slices/ThemeSlice'

const store=configureStore({
    reducer:{
        auth:authSlice,
        cart:cartSlice,
        theme:themeSlice
    }
})

export default store