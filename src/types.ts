export interface IPost {
  id: number;
  name: string;
}
export interface PostItemProps {
  posts: IPost[];
  updatePost: UpdatePost;
}
export interface PostFormProps {
  addPost: AddPost;
  edit?: { id: number; value: string };
}

export type EditPost = (newPost: string) => void;
export type RemovePost = (id: number) => void;
export type AddPost = (newPost: string) => void;
export type UpdatePost = (id: number, name: string) => void;
