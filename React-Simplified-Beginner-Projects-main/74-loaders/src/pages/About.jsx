import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function About() {
  const navigate = useNavigate();
  // we can use useNavigate to redirect. But we need to call that function. We can use it with buttor, some click or whatever else. We will use useEffect with timeout

  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigate('/');
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return <div>About</div>;
}
