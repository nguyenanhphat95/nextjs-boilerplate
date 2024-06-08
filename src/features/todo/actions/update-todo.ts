'use server'

import { revalidatePath } from "next/cache";
import { TodoItemType } from "../todo-list/todo-list.types";
import { fetcher } from "@/utils";

export async function updateTodo(data: Pick<TodoItemType, 'name' | 'id'>) {
  const response = await fetcher({
    apiEndpoint: `/todo/${data.id}`,
    method: 'PUT',
    requestData: data
  });

  revalidatePath('/');
  return response;
}