import { Button, HStack, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import {nanoid} from "nanoid"
import { useToast } from '@chakra-ui/react'
function AddTodo({addTodo}) {

  const toast = useToast()


  const [content,setContent] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        if(!content){
          toast({
            title: 'First Add Something...',
         
          status: 'error',
          duration: 2000,
          isClosable: true,
          })
        }
        let todo = {
          id:nanoid(),
          body:content,
        }
        addTodo(todo)
        setContent("")
    }
  return (
    <form onSubmit={handleSubmit}>

        <HStack>
            <Input variant={"outline"} placeholder="enter todo" value={content} onChange={(e)=>setContent(e.target.value)}/>
            <Button colorScheme={"pink"} p="4" type='submit'>Add Todo</Button>
        </HStack>
    </form>
  )
}

export default AddTodo