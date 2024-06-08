'use server'

import { fetcher } from "@/utils";
import { TodoItemType } from "../todo-list/todo-list.types";

export async function getTodo(id: string) {
  return fetcher<TodoItemType>({
    apiEndpoint: `/todo/${id}`,
  });
}
