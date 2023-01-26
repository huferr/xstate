import { Box, Button, TextField, Typography } from "@mui/material";
import { TodoList } from "./components/TodoList";

export const App = () => {
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
        <TextField placeholder="Add a TODO" />
        <Button variant="contained">Create</Button>
      </Box>

      <TodoList />
    </Box>
  );
};
