"use client"

import { login } from "./actions"
import { useActionState, useState } from "react"
import { useFormStatus } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"

export default function LoginForm() {
    const [mailOpened, setmailOpened] = useState(false)

    return (
        <div>
            {!mailOpened ?

                <motion.div key="closed"
                    onClick={() => setmailOpened(true)}
                    initial={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.9, rotate: -5 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <img
                        src="/mailclosed.png"
                        alt="mail"
                        className=""
                    />
                </motion.div>
                :

                <motion.div
                    key="opened"
                    initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <MailOpened />
                </motion.div>
            }
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
                className="select-none"
                src="/mailopened.png"
                alt="" />
            <motion.form action={loginAction}
                className="absolute flex flex-col items-center
                right-25/100 top-45/100 
                max-w-75 rotate-[-7.5deg]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                    delay: 0.5,
                }}
            >
                <div className="text-black m-2">
                    <input
                        className="text-center px-4 py-2 rounded-2xl bg-white border-[#f86ec3d7] border focus:outline-none text-2xl mb-3 min-w-75"
                        id="password"
                        name="password"
                        placeholder="ENTER THE CODEE"
                    />
                </div>
                <SubmitButton />
            </motion.form>
        </div >
    )
}


function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button
            style={{ WebkitUserSelect: "none", WebkitTouchCallout: "none" }}
            className="select-none relative bg-[#ffffffd7] text-[#f86ec3d7] p-2 rounded-md min-w-24
            shadow-md shadow-[#ffaddf] ring-1 ring-[#ff6c98]
            active:bg-[#f86ec3d7] active:text-[#ffffff]
            transition-all duration-200 ease-out"
            disabled={pending}
            type="submit">
            SUBMIT !
        </button>
    )
}