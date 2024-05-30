import React, { useState, useEffect, useRef } from 'react';
import { PostFormProps } from '../types';

const PostForm: React.FC<PostFormProps> = ({ addPost, edit }) => {
  const [post, setPost] = useState(edit ? edit.value : '');

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current!.focus();
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!post || /^\s*$/.test(post)) return;
    addPost(post);
    setPost('');
  };

  return (
    <form className='todo-form'>
      {edit ? (
        <>
          <input value={post} onChange={handleChange} name='text' ref={inputRef} className='todo-input edit' />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input placeholder='Add a todo' value={post} onChange={handleChange} name='text' className='todo-input' ref={inputRef} />
          <button onClick={handleSubmit} className='todo-button'>
            Add Post
          </button>
        </>
      )}
    </form>
  );
};

export default PostForm;

