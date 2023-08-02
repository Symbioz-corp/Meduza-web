import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

export type TAuthenticationState = {
    displayName?: string | null,
    email?: string | null,
    emailVerified?: boolean | null,
    isAuth?: boolean,
    photoURL?: string | null,
    uid?: string | null
}
export const authenticationSlice: Slice = createSlice({
    name: 'authentication',
    initialState: <TAuthenticationState>{
        displayName: null,
        email: null,
        emailVerified: null,
        isAuth: false,
        photoURL: null,
        uid: null
    },
    reducers: {
        connect: (state, action: PayloadAction<TAuthenticationState>) => {
            state.displayName = action.payload.displayName
            state.email = action.payload.email
            state.emailVerified = action.payload.emailVerified
            state.photoURL = action.payload.photoURL
            state.uid = action.payload.uid
            state.isAuth = true
        },
        disconnect: (state) => {
            state.displayName = undefined
            state.email = undefined
            state.emailVerified = undefined
            state.photoURL = undefined
            state.uid = undefined
            state.isAuth = false
        }
    }
})

export const { connect, disconnect } = authenticationSlice.actions
export default authenticationSlice.reducer
