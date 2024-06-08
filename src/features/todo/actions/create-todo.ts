'use server'
import { revalidatePath } from "next/cache";
import { TodoItemType } from "../todo-list/todo-list.types";
import { fetcher } from "@/utils";

export async function createTodo(data: Pick<TodoItemType, 'name'>) {
  const response = await fetcher({
    apiEndpoint: '/todo',
    method: 'POST',
    requestData: data,
  });

  revalidatePath('/');
  return response;
}
