import React from "react";

type ButtonProps = {
    label: string | undefined,
    onDataChange: () => void,
}

export default function Button(props: ButtonProps) {
    const handleClick = () => { props.onDataChange() }
    return (
        <button onClick={() => handleClick()} className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
            {props.label}
        </button>
    )
}