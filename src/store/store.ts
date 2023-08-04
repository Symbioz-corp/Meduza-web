import { configureStore } from "@reduxjs/toolkit";
import errorModalReducer from './features/errorModalSlice'
import successModalReducer from './features/successModalSlice'
import authenticationReducer from './features/authenticationSlice'
// import { persistStore } from "redux-persist";
// import {  persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const authenticationPersistConfig = {
//     key: 'authentication',
//     storage,
// };

// const persistedauthenticationReducer = persistReducer(authenticationPersistConfig, authenticationReducer);

const store = configureStore({
    reducer: {
        errorModal: errorModalReducer,
        successModal: successModalReducer,
        authentication: authenticationReducer
    }
})
// export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store