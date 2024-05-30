import { useGetAllPostsQuery, useAddPostMutation, useUpdatePostMutation } from '../redux/postsApi';
import PostForm from './PostForm';
import PostItem from './PostItem';
import { AddPost, UpdatePost } from '../types';

const PostList: React.FC = () => {
  const { data, isLoading, isError } = useGetAllPostsQuery();
  const [addPost] = useAddPostMutation();
  const [updatePost] = useUpdatePostMutation();

  const add: AddPost = async (newPost) => {
    await addPost(newPost).unwrap();
  };

  const update: UpdatePost = async (id, name) => {
    await updatePost({ id, name }).unwrap();
  };

  return (
    <>
      {isLoading ? (
        <h2>Loading ...</h2>
      ) : isError ? (
        <h2>Server error</h2>
      ) : (
        <>
          <h1>Posts List</h1>
          <PostForm addPost={add} />
          <PostItem posts={data || []} updatePost={update} />
        </>
      )}
    </>
  );
};

export default PostList;
