import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

export type TAuthenticationState = {
    displayName?: string | undefined,
    photoURL?: string | undefined,
    uid?: string | undefined
}
export const authenticationSlice: Slice = createSlice({
    name: 'authentication',
    initialState: <TAuthenticationState>{
        displayName: undefined,
        photoURL: undefined,
        uid: undefined,
        isAuth: false,
    },
    reducers: {
        connect: (state, action: PayloadAction<TAuthenticationState>) => {
            state.displayName = action.payload.displayName
            state.photoURL = action.payload.photoURL
            state.uid = action.payload.uid
            state.isAuth = true
        },
        disconnect: (state) => {
            state.displayName = undefined
            state.photoURL = undefined
            state.uid = undefined
            state.isAuth = false
        }
    }
})

export const { connect, disconnect } = authenticationSlice.actions
export default authenticationSlice.reducer
