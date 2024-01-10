import { Link } from 'react-router-dom';

export default function CardFooter({ user, btnUrl }) {
  return (
    <div className="card-footer">
      {user ? (
        <div>
          By: <Link to={`/users/${user.id}`}>{user.name}</Link>
        </div>
      ) : (
        <div></div>
      )}
      <Link to={btnUrl}>
        <button className="btn">View</button>
      </Link>
    </div>
  );
}
