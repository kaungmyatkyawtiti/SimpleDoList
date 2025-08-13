import { Box } from "@mui/material";
import styles from "./page.module.css";
import AlertWrapper from "./components/todos/AlertWrapper";

export default function Home() {
  return (
    <Box className={styles.page}>
      {/* <TodoList /> */}
      <AlertWrapper />
    </Box>
  );
}
