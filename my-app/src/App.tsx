import { Private } from "./components/auth/Private"
import { Profile } from "./components/auth/Profile"
import Button from "./components/Button"
import Chill from "./components/Children"
import { CounterClass } from "./components/class/Counter"
import { Box } from "./components/context/Box"
import { ThemeContextProvider } from "./components/context/ThemeContext"
import { User } from "./components/context/User"
import { UserContextProvider } from "./components/context/UserContext"
import { ListItems } from "./components/generics/List"
import Greet from "./components/Greet"
import { CustomButton } from "./components/html/Button2"
import { CustomComponent } from "./components/html/CustomComponent"
import { CustomInput } from "./components/html/Input2"
import Input from "./components/Input"
import { Person } from "./components/Person"
import PersonList from "./components/PersonList"
import DomRef from "./components/ref/DomRef"
import { MutableRef } from "./components/ref/MutableRef"
import RandomNumber from "./components/restriction/RandomNumber"
import LoggedIn from "./components/state/LoggedIn"
import { Counter } from "./components/state/Reducer"
import { Status } from "./components/Status"
import Style from "./components/Style"
import { Toast } from "./components/template literals/Toast"

const App = () => {
  const Mauro = {
    first: 'Mauro',
    last: 'Vera'
  }

  const List = [
    { first: '1', last: '1' },
    { first: '2', last: '2' },
    { first: '3', last: '3' }
  ]


  return (
    <div>
      <Greet name='Mauro' age={11} isLogged={false} />
      <hr />
      <Person name={Mauro} />
      <hr />
      <PersonList names={List} />
      <hr />
      <Status status="loading" />
      <hr />
      <Chill>
        <h1>Soy un chilldren</h1>
      </Chill>
      <hr />
      <Button text='Boton' handleClick={(event, id) => console.log('Tocaste el Boton', event, id)} />
      <hr />
      <Input value='ElInput' handleChange={(event) => console.log(event)} />
      <hr />
      <Style styles={{ color: 'red' }} text={666} /> <Style styles={{ background: 'blue' }} text={'Hola Pipol'} />
      <hr />
      <LoggedIn name="Mauro" email="Maurovera069@gmail.com" />
      <hr />
      <Counter />
      <hr />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <hr />
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <hr />
      <DomRef />
      <MutableRef />
      <hr />
      <CounterClass message="The count value is" />
      <hr />
      <Private isLoggedIn={true} component={Profile} />
      <hr />
      <ListItems
        items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'Wayne'
          },
          {
            id: 2,
            first: 'Clark',
            last: 'Kent'
          },
          {
            id: 3,
            first: 'Princess',
            last: 'Diana'
          }
        ]}
        onClick={item => console.log(item)}
      />
      <hr />
      <RandomNumber value={10} isPositive={true} />
      <hr />
      <Toast position='center' />
      <hr />
      <CustomButton variant="primary" onClick={() => console.log('Clicked')} >
        Primary Button
      </CustomButton>
      <CustomInput value={'Input Custom'} readOnly />
      <CustomComponent age={18} name="Mauro" isLogged={true} />


    </div>
  )
}

export default App
