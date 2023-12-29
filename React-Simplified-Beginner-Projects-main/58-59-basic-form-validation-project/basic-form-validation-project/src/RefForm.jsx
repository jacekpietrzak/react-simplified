import React, { useRef, useState } from 'react';
import { checkEmail, checkPassword } from './validators';

export function RefForm() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [emailErrors, setEmailErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);
  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsAfterFirstSubmit(true);

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const emailErrorResults = checkEmail(email);
    const passwordErrorResults = checkPassword(password);

    setEmailErrors(emailErrorResults);
    setPasswordErrors(passwordErrorResults);

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
          ref={emailRef}
          onChange={
            isAfterFirstSubmit
              ? (e) => setEmailErrors(checkEmail(e.target.value))
              : undefined
          }
        />
        {emailErrors.length > 0 && (
          <div className="msg">
            {emailErrors.map((error, index) => {
              return <p key={index}>{error}</p>;
            })}
          </div>
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
          ref={passwordRef}
          onChange={
            isAfterFirstSubmit
              ? (e) => setPasswordErrors(checkPassword(e.target.value))
              : undefined
          }
        />
        {passwordErrors.length > 0 && (
          <div className="msg">
            {passwordErrors.map((error, index) => {
              return <p key={index}>{error}</p>;
            })}
          </div>
        )}
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}
