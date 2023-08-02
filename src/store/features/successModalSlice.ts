import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TSuccessModal = {
    code: string | undefined,
    message: string | undefined,
}

export const successModalSlice = createSlice({
    name: 'successModal',
    initialState: <TSuccessModal>{
        code: undefined,
        actionName: undefined,
        message: undefined
    },
    reducers: {
        showSuccess: (state, action: PayloadAction<TSuccessModal>) => {
            state.code = action.payload.code
            state.message = action.payload.message
        },
        hideSuccess: (state) => {
            state.code = undefined
            state.message = undefined
        }
    }
})

export const { showSuccess, hideSuccess } = successModalSlice.actions
export default successModalSlice.reducer