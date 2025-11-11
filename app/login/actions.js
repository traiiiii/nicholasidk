
"use server"

import { z } from "zod"
import { createSession } from "../lib/session"
import { redirect } from "next/navigation"

const loginSchema = z.object({
    password: z
        .string()
        .trim()
})

export async function login(prevState, formData) {
    const result = loginSchema.safeParse(Object.fromEntries(formData))
    
    const { password } = result.data
    
    console.log(result)
    if (password == "hello") {
        await createSession("nicool")
        redirect("/")
    } else {
        console.log("naaa")
    }
    

}