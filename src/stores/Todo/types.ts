export interface TodoProps {
  id: number;
  text: string;
  done: boolean;
}

export interface TodosProps {
  todo: TodoProps;
}
