import { Name } from "./Person.types"

interface Props {
    names: Name[]
}

const PersonList = ({ names }: Props) => {
    return (
        <div>
            {names.map(name => {
                return (
                    <h2 key={name.first}>{name.first} - {name.last}</h2>
                )
            })}
        </div>
    )
}

export default PersonList
