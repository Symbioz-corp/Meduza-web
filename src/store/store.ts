import { configureStore } from "@reduxjs/toolkit";
import errorModalReducer from './features/errorModalSlice'
import successModalReducer from './features/successModalSlice'
import authenticationReducer from './features/authenticationSlice'

const store = configureStore({
    reducer: {
        errorModal: errorModalReducer,
        successModal: successModalReducer,
        authentication: authenticationReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store