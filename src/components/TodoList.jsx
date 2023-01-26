import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

export const TodoList = ({ todos }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {};
  const handleDelete = () => {};

  if (!todos) {
    return <Box>You have no TODO. Create one!</Box>;
  }

  return (
    <Box width={500}>
      <Box
        border="1px solid #b4b4b4"
        borderRadius={1}
        padding={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={1}
      >
        {isEditing ? (
          <TextField fullWidth />
        ) : (
          <Typography>My first TODO</Typography>
        )}

        <Box display="flex" gap={1}>
          {isEditing ? (
            <>
              <Button variant="contained" onClick={handleEdit}>
                Edit
              </Button>

              <Button
                variant="contained"
                color="error"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
            </>
          ) : (
            <>
              <IconButton onClick={() => setIsEditing(true)}>
                <EditIcon color="primary" />
              </IconButton>
              <IconButton onClick={handleDelete}>
                <DeleteIcon color="error" />
              </IconButton>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};
