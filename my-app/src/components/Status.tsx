interface Props {
    status: 'loading' | 'success' | 'error'
}

export const Status = ({status}: Props) => {
    let message

    if(status === 'loading') message = 'Loading...'
    else if(status === 'success') message = 'Data fetched successfully!'
    else if(status === 'error') message = 'Error fetching data'


    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
}
