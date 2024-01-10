import { useOutletContext } from 'react-router';

export default function Team() {
  const value = useOutletContext();
  return <div>Team - {value}</div>;
}
