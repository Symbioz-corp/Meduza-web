import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

export const Dispatch: () => AppDispatch = useDispatch
export const Selector: TypedUseSelectorHook<RootState> = useSelector