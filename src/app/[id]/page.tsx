import { TodoForm, getTodo } from "@/features/todo";

type Props = {
  params: {
    id: string;
  };
}
export default async function Edit(props: Props) {
  const { payload } = await getTodo(props.params.id);

  return (
    <TodoForm data={payload} />
  )
}
