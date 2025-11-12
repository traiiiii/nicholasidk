"use client"

import { login } from "./actions"
import { useActionState, useState } from "react"
import { useFormStatus } from "react-dom"

export default function LoginForm() {
    const [mailOpened, setmailOpened] = useState(false)

    return (
        <div>
            {!mailOpened ? <MailClosed onOpen={() => setmailOpened(true)} /> : <MailOpened />}
        </div>
    )
}

function MailClosed({ onOpen }) {
    return (
        <div
            onClick={onOpen}
            className="flex flex-col items-center"
        >
            <img
                src="/mailclosed.png"
                alt="mail"
                className=""
            />
        </div>
    )
}


function MailOpened() {
    const [state, loginAction] = useActionState(login, undefined)

    return (
        <div className="relative flex flex-col items-center">
            <img
                src="/mailopened.png"
                alt="" />
            <form action={loginAction} className="
            absolute flex flex-col items-center
            right-25/100 top-45/100 
            max-w-75 rotate-[-7.5deg]">
                <div className="text-black m-2">
                    <input
                        className="text-center px-4 py-2 rounded-2xl bg-white border-[#f86ec3d7] border focus:outline-none text-2xl mb-3 min-w-75"
                        id="password"
                        name="password"
                        placeholder="ENTER THE CODEE"
                    />
                </div>
                <SubmitButton />
            </form>
        </div>
    )
}


function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button
            className="relative bg-[#ffffffd7] text-[#f86ec3d7] p-2 rounded-md min-w-24
            shadow-md shadow-[#ffaddf] ring-1 ring-[#ff6c98]
            active:bg-[#f86ec3d7] active:text-[#ffffff]
            transition-all duration-200 ease-out"
            disabled={pending}
            type="submit">
            SUBMIT ! 
        </button>
    )
}