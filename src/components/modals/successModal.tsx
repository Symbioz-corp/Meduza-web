import React from "react"
import { hideSuccess } from "../../store/features/successModalSlice"
import { Dispatch, Selector } from "../../store/hooks"

export default function SuccessModal() {
    const values = Selector((state) => state.successModal)
    const dispatch = Dispatch()
    const hideModal = () => { dispatch(hideSuccess()) }
    if (values.code) {
        return (
            <div className="hs-overlay bg-gray-900 bg-opacity-50 w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
                <div className=" mt-16 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                    <div className=" flex flex-col bg-white shadow-lg rounded-xl ">
                        <div className="p-4 sm:p-10 text-center overflow-y-auto">
                            <span
                                className="mb-4 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border-4 border-green-50 bg-green-100 text-green-500">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                                </svg>
                            </span>

                            <h3 className="mb-2 text-xl font-bold text-gray-800">
                                {values.code}
                            </h3>
                            <p className="text-gray-500">
                                {values.message}
                            </p>

                            <div className="mt-6 flex justify-center gap-x-4">
                                <button onClick={hideModal} type="button"
                                    className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                                    data-hs-overlay="#hs-task-created-alert">
                                    Terminer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else return null
}