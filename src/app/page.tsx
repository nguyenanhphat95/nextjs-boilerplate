import { TodoList, getListTodo } from "@/features/todo";

export default async function TodoApp() {
  const { data = [] } = await getListTodo();

  return (
    <TodoList data={data} />
  )
}
