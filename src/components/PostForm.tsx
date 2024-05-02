import React, { useState, useEffect, useRef } from 'react';
import { AddPost } from '../types';

interface PostFormProps {
  addPost: AddPost;
  edit?: { id: number; value: string };
}

const PostForm: React.FC<PostFormProps> = ({ addPost, edit }) => {
  const [task, setTask] = useState(edit ? edit.value : '');

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current!.focus();
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    if (!task || /^\s*$/.test(task)) return;
    addPost(task);
    setTask('');
  };

  return (
    <form className='todo-form'>
      {edit ? (
        <>
          <input value={task} onChange={handleChange} name='text' ref={inputRef} className='todo-input edit' />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input placeholder='Add a todo' value={task} onChange={handleChange} name='text' className='todo-input' ref={inputRef} />
          <button onClick={handleSubmit} className='todo-button'>
            Add Post
          </button>
        </>
      )}
    </form>
  );
};

export default PostForm;
