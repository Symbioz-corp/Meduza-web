import React, { useState } from "react";

type InputProps = {
    messageError: string | undefined,
    type: string,
    label: string | undefined
}

export default function InputText(props: InputProps) {
    const [data, setData] = useState('')
    return (
        <div>
            <label className="block text-sm mb-2 ">{props.label}</label>
            <div className="relative">
                <input value={data} onChange={(e) => setData(e.target.value)} type={props.type} className="py-3 px-4 block w-full border border-solid  border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   " required aria-describedby="fullname-error" />
                <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                    <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                </div>
            </div>
            <p className="hidden text-xs text-red-600 mt-2" id="fullname-error">
                {props.messageError}
            </p>
        </div>
    )
}