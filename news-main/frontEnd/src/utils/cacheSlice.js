import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
    name: "cache",
    initialState: {
        cache: {},
        query:''
    },
    reducers: {
        setCache: (state, action) => {
            state.cache = { ...state.cache, ...action.payload };
        },
        searchQuery:(state, action) =>{
            state.query = action.payload
        }
    }
});

export const { setCache, searchQuery } = cacheSlice.actions;
export default cacheSlice.reducer;
