const mainUrl = import.meta.env.VITE_API_URL;

// Posts
export async function getPosts(signal) {
  const posts = await fetch(`${mainUrl}/posts`, { signal }).then((res) => {
    return res.json();
  });
  return posts;
}
export async function getPostById(signal, postId) {
  const post = await fetch(`${mainUrl}/posts/${postId}`, {
    signal,
  }).then((res) => {
    return res.json();
  });
  return post;
}
export async function getPostsByUserId(signal, userId) {
  const posts = await fetch(`${mainUrl}/posts?userId=${userId}`, {
    signal,
  }).then((res) => {
    return res.json();
  });
  return posts;
}

// Users
export async function getUsers(signal) {
  const users = await fetch(`${mainUrl}/users`, { signal }).then((res) => {
    return res.json();
  });
  return users;
}
export async function getUserById(signal, userId) {
  const user = await fetch(`${mainUrl}/users/${userId}`, {
    signal,
  }).then((res) => {
    return res.json();
  });
  return user;
}

// Comments
export async function getComments(signal, postId) {
  const comments = await fetch(`${mainUrl}/posts/${postId}/comments`, {
    signal,
  }).then((res) => {
    return res.json();
  });
  return comments;
}

// Todos
export async function getTodos(signal) {
  const todos = await fetch(`${mainUrl}/todos`, { signal }).then((res) => {
    return res.json();
  });
  return todos;
}
export async function getTodosByUserId(signal, userId) {
  const todos = await fetch(`${mainUrl}/todos?userId=${userId}`, {
    signal,
  }).then((res) => {
    return res.json();
  });
  return todos;
}
