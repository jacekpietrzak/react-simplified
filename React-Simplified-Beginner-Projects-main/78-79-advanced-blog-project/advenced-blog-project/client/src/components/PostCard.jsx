import { Link } from 'react-router-dom';

export function PostCard({ user, id, title, body }) {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <div className="card-preview-text">{body}</div>
      </div>
      <div className="card-footer">
        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
          <p>by:</p>
          <Link className="" to={`/users/${user.id}`}>
            {user.name}
          </Link>
        </div>
        <Link className="btn" to={`/posts/${id}`}>
          View
        </Link>
      </div>
    </div>
  );
}
