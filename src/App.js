import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Heading, IconButton, useColorMode, VStack } from '@chakra-ui/react'
import {FaSun,FaMoon} from 'react-icons/fa'
import TodoList from './Components/TodoList'
import AddTodo from './Components/AddTodo'
function App() {
  const initialtodos = [
    {
      id: 1,
      body: "breakfast",
    },
    {
      id: 2,
      body: "lunch",
    },
  ];

  
  const [karoto,setTodo] = useState(JSON.parse(localStorage.getItem("todos")) ||[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(karoto))
  },[karoto])

  function deleteTodo(id){
    const newTodos = karoto.filter((todo)=>{
        return todo.id!==id
    })
    setTodo(newTodos)
}

function addTodo(todo){
  setTodo([...karoto,todo])
}

const {colorMode,togglColorMode} =useColorMode()



  return (
    <div className="App">
      <VStack p={4}>
        <IconButton onClick={togglColorMode} icon={colorMode==="light"? <FaSun/>:<FaMoon/>} isRound={true} size="lg" alignSelf="flex-end" />
      <Heading mb={8} fontWeight="extrabold" bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">Todo application</Heading>
      <TodoList karoto={karoto} deleteTodo={deleteTodo}/>
      <AddTodo addTodo={addTodo}/>
      </VStack>
    </div>
  )
}

export default App
