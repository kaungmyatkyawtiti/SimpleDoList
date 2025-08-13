import { create } from "zustand";
import { createTodoSlice, TodoSlice } from "./todos/todoSlice";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

export type BoundSlice =
  TodoSlice

// with immer middleware 
export const useBoundStore = create<
  BoundSlice
>()(
  devtools(
    immer((...args) => ({
      ...createTodoSlice(...args),
    })),
    { name: "BoundStore" }
  )
);

// without immer middleware
// export const useBoundStore = create<BoundSlice>((...arg) => ({
//   ...createCounterSlice(...arg),
//   ...createTodoSlice(...arg),
// }))

