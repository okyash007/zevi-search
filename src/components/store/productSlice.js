import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice(
    {
        name: "products",
        initialState: {
            filterProducts: null,
        },
        reducers: {
            addFilterProducts: (state, action) =>{
                state.filterProducts = action.payload;
            },
            removeFilterProducts: (state) =>{
                state.filterProducts = null
            }
        }
    }
)

export const { addFilterProducts, removeFilterProducts } = productSlice.actions

export default productSlice.reducer;

