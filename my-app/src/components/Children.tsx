import React from "react"

interface Props {
    children: React.ReactNode
}

const Chill = ({ children }: Props) => {
    return (
        <div>
            <hr />
            {children}
            <hr />
        </div>
    )
}

export default Chill
