export type TodoItemType = {
  name: string;
  status: boolean;
  id: string;
}

export type TodoListProps = {
  data: TodoItemType[];
}
