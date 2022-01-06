import { useState } from 'react'

interface Props {
    name: string
    email: string
}

const LoggedIn = ({ name, email }: Props) => {
    const [isLogged, setIsLogged] = useState(false)
    const [user, setUser] = useState<Props | null>(null)

    const handleLogin = () => {
        setIsLogged(true)
        setUser ({
            name: 'Mauro',
            email: 'Mv069@gmail.com'
        })
    }
    const handleLogout = () => {
        setIsLogged(false)
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            {isLogged ? <p>Name: {user?.name} <br /> Email: {user?.email} </p> : <p>Not Logged</p>}
        </div>
    )
}

export default LoggedIn
