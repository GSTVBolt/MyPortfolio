import { ComponentProps } from "react";

interface ButtonSubmitProps extends ComponentProps<'button'>{}

export function ButtonSubmit(props: ButtonSubmitProps) {
    return (
        <button 
        {...props}
        className="flex px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-green-300 via-sky-500 to-emerald-400 hover:from-pink-500 hover:to-yellow-500">
            {props.children}
        </button>
    )
}