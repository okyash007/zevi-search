import { configureStore } from "@reduxjs/toolkit";
import productReduver from "./productSlice"

const appStore = configureStore(
    {
        reducer: {
            products: productReduver,

        }
    }
)

export default appStore;