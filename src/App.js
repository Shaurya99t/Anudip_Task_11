import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [age, setAge] = useState('');
  const [ageError, setAgeError] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [confirmPassError, setConfirmPassError] = useState('');

  const validateUsername = () => {
    if (!username) {
      setUsernameError('Username is required.');
      return false;
    }
    setUsernameError('');
    return true;
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('Email is required.');
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email format.');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = () => {
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
      return false;
    } else if (!hasNumber) {
      setPasswordError('Password must contain at least one number.');
      return false;
    } else if (!hasSpecialChar) {
      setPasswordError('Password must contain at least one special character.');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const validateAge = () => {
    const numericAge = parseInt(age, 10);
    if (!age) {
      setAgeError('Age is required.');
      return false;
    } else if (isNaN(numericAge) || numericAge < 18 || numericAge > 50) {
      setAgeError('Age must be a number between 18 and 50.');
      return false;
    }
    setAgeError('');
    return true;
  };

  const validateConfirmPassword = () => {
    if (!pass || !confirmPass) {
        setConfirmPassError('Both password fields are required.');
        return false;
    }
    if (pass !== confirmPass) {
      setConfirmPassError('Passwords do not match.');
      return false;
    }
    setConfirmPassError('');
    return true;
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();

    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isAgeValid = validateAge();
    const isConfirmPassValid = validateConfirmPassword();

    if (isUsernameValid && isEmailValid && isPasswordValid && isAgeValid && isConfirmPassValid) {

      alert('Form submitted successfully!');
    } else {
      console.log("Validation failed. Please check the form for errors.");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleFinalSubmit}>
        <h1><u>Form Validation</u></h1>

        <div className="form-section">
          <h2>Username Input</h2>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={validateUsername}
            className={usernameError ? 'invalid' : ''}
          />
          {usernameError && <p className="error-message">{usernameError}</p>}
        </div>

        <div className="form-section">
          <h2>Email Validation</h2>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            className={emailError ? 'invalid' : ''}
          />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>

        <div className="form-section">
          <h2>Password Validation</h2>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
            className={passwordError ? 'invalid' : ''}
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>

        <div className="form-section">
          <h2>Age Validation</h2>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            onBlur={validateAge}
            className={ageError ? 'invalid' : ''}
          />
          {ageError && <p className="error-message">{ageError}</p>}
        </div>

        <div className="form-section">
          <h2>Confirm Password</h2>
          <label>Enter Password:</label>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            onBlur={validateConfirmPassword}
            className={confirmPassError ? 'invalid' : ''}
          />
          {confirmPassError && <p className="error-message">{confirmPassError}</p>}
        </div>

        <button type="submit">Submit All Details</button>

      </form>
    </div>
  );
}

export default App;