'use client'

import { useState } from "react";

export default function Slider() {
    const [value, setValue] = useState(50)
    const [showLetter, setShowLetter] = useState(false)
    const tiredness = [
        { src: null, alt: "image 1", stage: "denial." },
        { src: null, alt: "image 2", stage: "bargaining." },
        { src: null, alt: "image 3", stage: "anger." },
        { src: null, alt: "image 4", stage: "depression." },
        { src: null, alt: "image 5", stage: "acceptance." },
    ]

    const consolation_text = [
        "this text is for 20%",
        "this text is for 40%",
        "this text is for 60%",
        "this text is for 80%",
        "this text is for 100%",
    ]

    const get = (type) => {
        if (value <= 20) return tiredness[0][type]
        if (value <= 40) return tiredness[1][type]
        if (value <= 60) return tiredness[2][type]
        if (value <= 80) return tiredness[3][type]
        return tiredness[4][type]
    }

    const get_consolation_text = () => {
        if (value <= 20) return consolation_text[0]
        if (value <= 40) return consolation_text[1]
        if (value <= 60) return consolation_text[2]
        if (value <= 80) return consolation_text[3]
        return consolation_text[4]
    }


    const handleSubmit = () => {
        setShowLetter(true)
    }

    const handleReturn = () => {
        setShowLetter(false)
    }

    if (showLetter) {
        return (
            <div className="flex flex-col justify-center h-screen w-40">
                <div className="flex justify-center">
                    {get_consolation_text(value)}
                </div>

                <button
                    onClick={handleReturn}
                    className="mt-5">
                    Return
                </button>
            </div>
        )
    }

    return (
        <div className="flex flex-col justify-center w-40">

            {/* Picture changer */}
            <div className="w-40 h-20 flex justify-center">
                <img
                    src={get("src")}
                    alt={get("alt")}
                />
            </div>

            {/* Value indicator */}
            <div className="flex justify-center my-2">
                Stage : {get("stage")}
            </div>

            {/* Slider */}
            <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="mb-2"
            />

            {/* Submit button */}
            <button
                onClick={handleSubmit}
                className="block"
            >
                Submit
            </button>
        </div>
    )
}