
interface Props {
    name: string
    age: number
    isLogged: boolean
}

const Greet = ({name, age, isLogged}: Props) => {
    return (
        <div>
            {name}
            <br />
            I have {age}
            <br />
            {isLogged ? 'Is Logged' : 'Not Logged'}
        </div>
    )
}

export default Greet
