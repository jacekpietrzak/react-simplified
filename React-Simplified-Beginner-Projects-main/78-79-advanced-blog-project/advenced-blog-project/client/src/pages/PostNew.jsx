import {
  Form,
  Link,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from 'react-router-dom';
import { getUsers } from '../api/users';
import { createPost } from '../api/posts';

export function PostNew() {
  const users = useLoaderData();
  const actionData = useActionData();
  const { state } = useNavigation();
  const isLoading = state === 'Submitting' || state === 'loading';

  return (
    <div className="container">
      <h1 className="page-title">New Post</h1>
      <Form method="post" className="form">
        <div className="form-row">
          <div
            className={`form-group ${
              actionData === 'title-required' ? 'error' : ''
            }`}
          >
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
            {actionData === 'title-required' ? (
              <div className="error-message">Required</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="userId">Author</label>
            <select name="userId" id="userId">
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
            <textarea name="body" id="body"></textarea>
            {actionData === 'body-required' ? (
              <div className="error-message">Required</div>
            ) : null}
          </div>
        </div>
        <div className="form-row form-btn-row">
          <Link className="btn btn-outline" to={'..'}>
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

function loader({ request: { signal } }) {
  return getUsers({ signal });
}

async function action({ request }) {
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

  const post = await createPost(
    { title: title, userId: userId, body: body },
    { signal: request.signal }
  );

  return redirect(`/posts/${post.id}`);
}

export const postNewRoute = {
  loader,
  action,
  element: <PostNew />,
};
