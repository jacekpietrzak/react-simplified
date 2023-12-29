import React, { useMemo, useState } from 'react';
import { checkEmail, checkPassword } from './validators';

export function StateForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false);

  // if we want we can use memo if our checks are big and slow
  const emailErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkEmail(email) : [];
  }, [isAfterFirstSubmit, email]);
  const passwordErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkPassword(password) : [];
  }, [isAfterFirstSubmit, password]);

  function handleSubmit(e) {
    e.preventDefault();
    setIsAfterFirstSubmit(true);

    const emailErrorResults = checkEmail(email);
    const passwordErrorResults = checkPassword(password);

    if (emailErrorResults.length === 0 && passwordErrorResults.length === 0) {
      alert(`email: ${email}, password: ${password}`);
    }
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className={`form-group ${emailErrors.length > 0 && 'error'}`}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          id="email"
          placeholder="test@test.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailErrors.length > 0 && (
          <div className="msg">{emailErrors.join(', ')}</div>
        )}
      </div>
      <div className={`form-group ${passwordErrors.length > 0 && 'error'}`}>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          placeholder="Password123!"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordErrors.length > 0 && (
          <div className="msg">{passwordErrors.join(', ')}</div>
        )}
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}
