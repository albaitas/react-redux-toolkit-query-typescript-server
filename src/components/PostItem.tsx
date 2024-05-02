import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import PostForm from './PostForm';
import { TiEdit } from 'react-icons/ti';
import { useRemovePostMutation } from '../redux/postsApi';
import { IPost, RemovePost, EditPost, UpdatePost } from '../types';

interface PostItemProps {
  posts: IPost[];
  updatePost: UpdatePost;
}

const PostItem: React.FC<PostItemProps> = ({ posts, updatePost }) => {
  const [removePost] = useRemovePostMutation();
  const [edit, setEdit] = useState({ id: 0, value: '' });

  const editPost: EditPost = (newPost) => {
    updatePost(edit.id, newPost);
    setEdit({ id: 0, value: '' });
  };

  if (edit.id) {
    return <PostForm edit={edit} addPost={editPost} />;
  }

  const remove: RemovePost = async (id) => {
    await removePost(id).unwrap();
  };

  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.id} className='todo-row'>
            <div className='pointer'>{post.name}</div>
            <div className='icons'>
              <RiCloseCircleLine onClick={() => remove(post.id)} className='delete-icon' />
              <TiEdit onClick={() => setEdit({ id: post.id, value: post.name })} className='edit-icon' />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PostItem;
