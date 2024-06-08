'use server'
import { revalidatePath } from "next/cache";
import { TodoItemType } from "../todo-list/todo-list.types";
import { fetcher } from "@/utils";

export async function deleteTodo(id: string) {
  const response = await fetcher<TodoItemType | null>({
    apiEndpoint: `/todo/${id}`,
    method: 'DELETE',
  });

  revalidatePath('/');
  return response;
}
