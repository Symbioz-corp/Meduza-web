import React from "react"
import { hide } from "../../store/features/errorModalSlice"
import { Dispatch, Selector } from "../../store/hooks"


export default function ErrorModal() {
    const values = Selector((state) => state.errorModal)
    const dispatch = Dispatch()
    const hideModal = () => { dispatch(hide()) }
    if (values.code) {
        return (
            <div className="bg-gray-900 bg-opacity-50 w-full h-full fixed left-0 z-[60] overflow-hidden ">
                <div className=" mt-16 ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto">
                    <div className=" flex flex-col bg-white border shadow-sm rounded-xl overflow-hidden">
                        <div className="p-4 sm:p-10 overflow-y-auto">
                            <div className="flex gap-x-4 md:gap-x-7">
                                <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] sm:w-[62px] sm:h-[62px] rounded-full border-4 border-red-50 bg-red-100 text-red-500">
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /></svg>
                                </span>
                                <div className="grow">
                                    <h3 className="mb-2 text-xl font-bold text-gray-800"> {values.code} </h3>
                                    <p className="text-gray-500"> {values.message} </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end items-center gap-x-2 py-3 px-4 bg-gray-50 border-t">
                            <button onClick={hideModal} type="button" className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm " data-hs-overlay="#hs-danger-alert">
                                Réessayer
                            </button>
                            <a onClick={hideModal} className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm "
                                href="#">
                                Annuler
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else return null
}