import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TErrorModal = {
    code: string | undefined,
    message: string | undefined,
}

export const errorModalSlice = createSlice({
    name: 'errorModal',
    initialState: <TErrorModal>{
        code: undefined,
        actionName: undefined,
        message: undefined
    },
    reducers: {
        show: (state, action: PayloadAction<TErrorModal>) => {
            state.code = action.payload.code
            state.message = action.payload.message
        },
        hide: (state) => {
            state.code = undefined
            state.message = undefined
        }
    }
})

export const { show, hide } = errorModalSlice.actions
export default errorModalSlice.reducer