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
                        className="text-center px-4 py-2 rounded-2xl bg-white border-[#00000036] border focus:outline-none text-2xl mb-3"
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
            className="relative bg-white text-black p-2 rounded-sm min-w-24
            after:absolute 
            after:content-[''] 
            after:bg-[#f57272] 
            after:top-[-2px] after:left-[-2px] after:right-[-2px] after:bottom-[-2px]
            after:[background:conic-gradient(from_0deg_at_50%_50%,#e927ac,#f50063,#008198,#0040ff,#4731fb,#f50060,#57c66f,#34d2a0,#e927ac)]
            after:z-[-1]
            after:rounded-md
            "
            disabled={pending}
            type="submit">
            SUBMIT
        </button>
    )
}