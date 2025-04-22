import { configureStore } from "@reduxjs/toolkit";
import cacheSlice from "./cacheSlice"


const store = configureStore({
    reducer: {
        cache: cacheSlice
    }
})

export default store