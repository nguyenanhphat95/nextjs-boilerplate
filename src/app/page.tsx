import { TodoList, getListTodo } from "@/features/todo";

export default async function TodoApp() {
  const { payload = [] } = await getListTodo();

  return (
    <TodoList data={payload} />
  )
}
