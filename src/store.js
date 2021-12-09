import { configureStore } from "@reduxjs/toolkit"
import sliceReducer from './slice';

const store = configureStore({
    reducer: {
        item: sliceReducer
    }
})

export default store;