"use client";

import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Box, Button, TextField } from "@mui/material";
import { useBoundStore } from "@/stores/useBoundStore";
import { InferType } from "yup";
import { v4 as uuidv4 } from 'uuid';

interface TodoInputProps {
  showAlert: (
    message: string,
    severity: "success" | "error" | "info" | "warning"
  ) => void;
}

const toodSchema = yup
  .object({
    title: yup.string().required(),
  })
  .required()

type TodoFormData = InferType<typeof toodSchema>

export default function TodoInput({ showAlert }: TodoInputProps) {
  const { addTodo } = useBoundStore();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TodoFormData>({
    resolver: yupResolver(toodSchema),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = (data: TodoFormData) => {
    addTodo({
      id: uuidv4(),
      title: data.title,
      completed: false,
    });
    reset();
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    showAlert("Todo added successfully!", "success");
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        mb: 3,
        maxWidth: 600,
        mx: "auto",
        px: 1,
      }}
    >
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            variant="outlined"
            size="small"
            label="Add your task"
            error={!!errors.title}
            helperText={errors.title?.message}
          />
        )}
      />
      <Button
        type="submit"
        variant="contained"
        disabled={isSubmitting}
        sx={{
          bgcolor: "forestgreen",
          textTransform: "none"
        }}
      >
        Add
      </Button>
    </Box>

  );
}
