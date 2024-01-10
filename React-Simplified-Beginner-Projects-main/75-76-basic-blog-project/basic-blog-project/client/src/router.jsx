import { Link, Navigate, createBrowserRouter } from 'react-router-dom';
import PostsList from './pages/PostsList';
import UsersList from './pages/UsersList';
import Todos from './pages/Todos';
import Post from './pages/Post';
import User from './pages/User';
import Error from './pages/Error';
import RootLayout from './layouts/RootLayout';

import {
  getComments,
  getPostById,
  getPosts,
  getUserById,
  getUsers,
  getTodos,
  getTodosByUserId,
  getPostsByUserId,
} from './api/controllers';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        children: [
          {
            index: true,
            element: <Navigate to="posts" />,
          },
          {
            path: 'posts',
            handle: {
              crumb: () => {
                return <Link to={'posts'}>Posts</Link>;
              },
            },
            children: [
              {
                index: true,
                element: <PostsList />,
                loader: async ({ request: { signal } }) => {
                  return {
                    users: await getUsers(signal),
                    posts: await getPosts(signal),
                  };
                },
              },
              {
                path: ':postId',
                loader: async ({ params, request: { signal } }) => {
                  const post = await getPostById(signal, params.postId);

                  return {
                    post: await post,
                    user: await getUserById(signal, post.userId),
                    comments: await getComments(signal, params.postId),
                  };
                },

                element: <Post />,
                handle: {
                  crumb: (data) => {
                    return <span>{data.post.title}</span>;
                  },
                },
              },
            ],
          },
          {
            path: 'users',
            handle: {
              crumb: () => {
                return <Link to={'users'}>Users</Link>;
              },
            },
            children: [
              {
                index: true,
                element: <UsersList />,
                loader: async ({ request: { signal } }) => {
                  return await getUsers(signal);
                },
              },
              {
                path: ':userId',
                element: <User />,
                loader: async ({ params, request: { signal } }) => {
                  return {
                    user: await getUserById(signal, params.userId),
                    posts: await getPostsByUserId(signal, params.userId),
                    todos: await getTodosByUserId(signal, params.userId),
                  };
                },
                handle: {
                  crumb: (data) => {
                    return <span>{data.user.name}</span>;
                  },
                },
              },
            ],
          },
          {
            path: 'todos',
            element: <Todos />,
            loader: ({ request: { signal } }) => {
              return getTodos(signal);
            },
            handle: {
              crumb: () => {
                return <Link to={'/todos'}>Todos</Link>;
              },
            },
          },
        ],
      },
    ],
  },
  { path: '*', element: <Error /> },
]);
