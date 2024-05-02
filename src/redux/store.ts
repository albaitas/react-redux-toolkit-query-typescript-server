import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from './postsApi';

const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware)
});
export default store;
