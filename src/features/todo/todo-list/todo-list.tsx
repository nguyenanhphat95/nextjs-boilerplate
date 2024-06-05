import { TodoListProps } from "./todo-list.types";

export function TodoList({ data }: TodoListProps) {
  return (
    <ul>
      {data.map(({ name }) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  )
}
