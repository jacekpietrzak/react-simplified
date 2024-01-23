import { useState } from 'react';
import { createPortal } from 'react-dom';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ padding: '2rem' }}>
      <h1>App content</h1>
      <button onClick={() => setIsOpen(true)}>Show Message</button>
      <AlertMessage isOpen={isOpen} onClose={() => setIsOpen(false)}>
        Secret message
        <br />
        Click to close
      </AlertMessage>
    </div>
  );
}

function AlertMessage({ children, onClose, isOpen }) {
  if (!isOpen) return null;
  return createPortal(
    <div
      onClick={onClose}
      style={{
        cursor: 'pointer',
        position: 'absolute',
        top: '.5rem',
        left: '50%',
        translate: '-50%',
        background: '#eee',
        padding: '.5rem',
        borderRadius: '.5rem',
      }}
    >
      {children}
    </div>,
    document.querySelector('#alert-messages')
  );
}
