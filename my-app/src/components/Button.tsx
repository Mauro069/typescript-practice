import React from "react"

interface Props {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
    text: string
}

const Button = ({ handleClick, text }: Props) => {
    return (
        <button onClick={event => handleClick(event, 1)} >
            {text}
        </button>
    )
}

export default Button
