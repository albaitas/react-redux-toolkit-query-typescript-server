export interface ID {
  id: number;
}
export interface IPost {
  id: number;
  name: string;
}

export type EditPost = (newTodo: string) => void;
export type RemovePost = (id: number) => void;
export type AddPost = (newTodo: string) => void;
export type UpdatePost = (id: number, name: string) => void;
