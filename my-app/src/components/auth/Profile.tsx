export type ProfileProps = {
    name: string
}

export const Profile = ({ name }: ProfileProps) => {
    return (
        <div>
            Private perfil component. Name is {name}
        </div>
    )
}