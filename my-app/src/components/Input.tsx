import React from 'react'

interface Props {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ value, handleChange }: Props) => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }

    return (
        <input type='text' value={value} onChange={onChange} />
    )
}

export default Input
