'use client';

import { SnackbarProvider } from 'notistack';
import TodoList from './TodoList';

export default function AlertWrapper() {
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <TodoList />
    </SnackbarProvider>
  );
}
