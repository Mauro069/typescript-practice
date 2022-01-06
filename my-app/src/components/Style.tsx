import React from 'react'

interface Props {
    styles: React.CSSProperties
    text: string | number
}

const Style = ({styles, text}: Props) => {
    return (
        <div style={styles}>
            {text}
        </div>
    )
}

export default Style
