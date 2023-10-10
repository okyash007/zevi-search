import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice(
    {
        name: "products",
        initialState: {
            filterProducts: null,
            displayProducts: null
        },
        reducers: {
            addFilterProducts: (state, action) =>{
                state.filterProducts = action.payload;
            },
            removeFilterProducts: (state) =>{
                state.filterProducts = null
            },
            addDisplayProducts: (state,action)=>{
                state.displayProducts = action.payload;
            },
            removeDisplayProducts: (state, action) =>{
                state.displayProducts = null
            }
        }
    }
)

export const { addFilterProducts, removeFilterProducts, addDisplayProducts, removeDisplayProducts } = productSlice.actions

export default productSlice.reducer;

