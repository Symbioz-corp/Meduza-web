import React, { useEffect, useState } from "react"

type InputProps = {
    messageError?: string,
    type: string,
    label: string | undefined,
    onDataChange: (value: string) => void,
}

export default function InputText(props: InputProps) {
    const [data, setData] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string | undefined>(props.messageError)

    const handleDataChange = (newValue: string) => {
        setData(newValue)
        props.onDataChange(newValue)
    }

    useEffect(() => {
        setErrorMessage(props.messageError)
        const timeoutId = setTimeout(() => { setErrorMessage(undefined) }, 1000)
        return () => { clearTimeout(timeoutId) }
    }, [props.messageError])
    return (
        <div>
            <label className="block text-sm mb-2 ">{props.label}</label>
            <div className="relative">
                <input value={data} onChange={(e) => handleDataChange(e.target.value)} type={props.type} className="py-3 px-4 block w-full border border-solid  border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   " required aria-describedby="fullname-error" />
            </div>
            <p className="text-xs text-red-600 mt-2" id="fullname-error"> {errorMessage} </p>
        </div>
    )
}