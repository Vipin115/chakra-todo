import {
  Badge,
  HStack,
  IconButton,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";

import { FaTrash } from "react-icons/fa";

function TodoList({karoto,deleteTodo}) {
  
if(karoto.length==0){
  return <Badge colorScheme={"red"} p="2" m ="8" borderRadius="lg">
   Khali peeli...
  </Badge>
}
 
  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.200"
      borderWidth={2}
      p="4"
      w="50%"
      alignItems={"stretch"}
    >
      {karoto.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer/>
          <IconButton icon={<FaTrash />} isRound="true" onClick={()=>deleteTodo(todo.id)}/>
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;
