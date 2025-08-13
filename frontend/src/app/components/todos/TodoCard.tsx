"use client";

import {
  Card,
  Box,
  IconButton,
  CardContent,
  Typography,
  Tooltip,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Info as InfoIcon
} from "@mui/icons-material";
import { Todo } from "@/stores/todos/todoSlice";
import { useBoundStore } from "@/stores/useBoundStore";

interface TodoCardProps {
  todo: Todo;
  showAlert: (
    message: string,
    severity: "success" | "error" | "info" | "warning"
  ) => void;
}

export default function TodoCard({
  todo,
  showAlert
}: TodoCardProps) {
  const { deleteTodo } = useBoundStore();

  const handleDeleteTodo = (todoId: string) => {
    deleteTodo(todoId);
    showAlert("Todo deleted successfully!", "success");
  };

  return (
    <Card
      variant="outlined"
      sx={{
        my: 1,
        boxShadow: "none",
        borderRadius: 2,
        borderColor: "#ddd",
        padding: 1,
        transition: "0.2s ease",
        "&:hover": {
          boxShadow: 0.8,
          borderColor: "#aaa",
          transform: "scale(1.01)",
        },
      }}
    >
      <CardContent
        sx={{
          py: 0.5,
          "&:last-child": { pb: 0.5 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 1,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              wordBreak: "break-word",
              overflowWrap: "anywhere",
              flexGrow: 1,
              lineHeight: 1.5,
              whiteSpace: "pre-line",
            }}
          >
            <Tooltip title="Info">
              <IconButton
                size="small"
                sx={{ color: "indianred" }}
                onClick={() => console.log("delete")}
                aria-label="more detail"
              >
                <InfoIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            {todo.title}
          </Typography>
          <Tooltip title="Edit">
            <IconButton
              size="small"
              sx={{ color: "dodgerblue" }}
              onClick={() => console.log("update")}
              aria-label="edit"
            >
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete">
            <IconButton
              size="small"
              sx={{ color: "indianred" }}
              onClick={() => handleDeleteTodo(todo.id)}
              aria-label="delete"
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </CardContent>
    </Card>
  );
}
