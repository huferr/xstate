import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { TodoList } from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
import { useTodos } from "./store/todos";

export const App = () => {
  const [newTodo, setNewTodo] = useState("");

  const { addTodo } = useTodos();

  const handleAddNewTodo = () => {
    if (!newTodo) return;

    const todo = { id: uuidv4(), title: newTodo };

    addTodo(todo);
  };

  return (
    <Box
      height="100vh"
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingTop={4}
    >
      <Typography fontWeight={700} variant="h5">
        XState TODO List
      </Typography>

      <Box display="flex" paddingY={4} gap={2}>
        <TextField
          placeholder="Add a TODO"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button variant="contained" onClick={handleAddNewTodo}>
          Create
        </Button>
      </Box>

      <TodoList />
    </Box>
  );
};
