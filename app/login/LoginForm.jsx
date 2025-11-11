"use client"

import { login } from "./actions"
import { useActionState } from "react"
import { useFormStatus } from "react-dom"

export default function LoginForm() {
    const [state, loginAction] = useActionState(login, undefined)

    return (
        <form action={loginAction} className="flex flex-col">
            <div className="bg-white text-black rounded-2xl m-2">
                <input
                    className="text-center px-4 py-2 focus:outline-none"
                    id="password"
                    name="password"
                />
            </div>
            <SubmitButton/>
        </form>
    )
}

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button disabled={pending} type="submit">
            SUBMIT
        </button>
    )
}