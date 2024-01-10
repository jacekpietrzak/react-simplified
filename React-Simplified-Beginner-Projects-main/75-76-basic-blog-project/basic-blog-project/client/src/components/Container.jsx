import { useNavigation } from 'react-router-dom';

export default function Container({ children }) {
  const { state } = useNavigation();
  return (
    <div className={`container ${state === 'loading' ? 'loading' : ''}`}>
      {children}
    </div>
  );
}
