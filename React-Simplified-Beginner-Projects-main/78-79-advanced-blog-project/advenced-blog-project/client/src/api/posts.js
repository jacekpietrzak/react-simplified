import { baseApi } from './base';

export function getPosts(options) {
  return baseApi.get('posts', options).then((res) => res.data);
}
export function getPostsQuery(options, query, userId) {
  return baseApi
    .get(`posts?q=${query}${userId !== '' ? `&userId=${userId}` : ''}`, options)
    .then((res) => res.data);
}

export function getPost(postId, options) {
  return baseApi.get(`posts/${postId}`, options).then((res) => res.data);
}

export function createPost(data, options) {
  return baseApi.post(`posts`, data, options).then((res) => res.data);
}

export function updatePost(postId, data, options) {
  return baseApi.put(`posts/${postId}`, data, options).then((res) => res.data);
}
