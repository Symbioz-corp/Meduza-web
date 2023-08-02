import { configureStore } from "@reduxjs/toolkit";
import errorModalReducer from './features/errorModalSlice'

const store = configureStore({
    reducer: {
        errorModal: errorModalReducer
    }
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch