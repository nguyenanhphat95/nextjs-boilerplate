type TodoItemType = {
  name: string;
  status: boolean;
  id: string;
}

type TodoListProps = {
  data: TodoItemType[];
}

export type {
  TodoListProps,
  TodoItemType
}