import {
  Form,
  Link,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from 'react-router-dom';
import { getPost, updatePost } from '../api/posts';
import { useEffect, useRef } from 'react';
import { getUsers } from '../api/users';

export function PostEdit() {
  const { post, users } = useLoaderData();
  const actionData = useActionData();
  const { state } = useNavigation();
  const isLoading = state === 'Submitting' || state === 'loading';
  const titleRef = useRef();
  const userIdRef = useRef();
  const bodyRef = useRef();

  useEffect(() => {
    titleRef.current.value = post.title;
    userIdRef.current.value = post.userId;
    bodyRef.current.value = post.body;
  }, [titleRef, userIdRef, bodyRef]);

  return (
    <div className="container">
      <h1 className="page-title">Edit Post</h1>
      <Form method="put" className="form">
        <div className="form-row">
          <div
            className={`form-group ${
              actionData === 'title-required' ? 'error' : ''
            }`}
          >
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" ref={titleRef} />
            {actionData === 'title-required' ? (
              <div className="error-message">Required</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="userId">Author</label>
            <select name="userId" id="userId" ref={userIdRef}>
              {users.map((user) => {
                return (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="form-row">
          <div
            className={`form-group ${
              actionData === 'body-required' ? 'error' : ''
            }`}
          >
            <label htmlFor="body">Body</label>
            <textarea name="body" id="body" ref={bodyRef}></textarea>
            {actionData === 'body-required' ? (
              <div className="error-message">Required</div>
            ) : null}
          </div>
        </div>
        <div className="form-row form-btn-row">
          <Link className="btn btn-outline" to={'..'} relative="path">
            Cancel
          </Link>
          <button className="btn" disabled={isLoading}>
            {isLoading ? 'Loading' : 'Save'}
          </button>
        </div>
      </Form>
    </div>
  );
}

async function action({ request, params: { postId } }) {
  const formData = await request.formData();
  const title = formData.get('title');
  const userId = formData.get('userId');
  const body = formData.get('body');

  if (title === '') {
    return 'title-required';
  }
  if (body === '') {
    return 'body-required';
  }

  await updatePost(
    postId,
    { title: title, userId: userId, body: body },
    { signal: request.signal }
  );

  return redirect(`/posts/${postId}`);
}

async function loader({ request: { signal }, params: { postId } }) {
  const post = await getPost(postId, { signal });
  const users = getUsers({ signal });

  return { post: await post, users: await users };
}

export const postEditRoute = {
  loader,
  action,
  element: <PostEdit />,
};
