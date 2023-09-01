import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [user_id, setUser_id] = useState(null);

  const countries = [
    'USA',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
    'France',
    'Japan',
    'China',
    'India',
    'Brazil',
  ];

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    const requestData = {
      first_name: firstName,
      last_name: lastName,
      gender: gender,
      country: country,
      password: password,
    };
    e.preventDefault();

    console.log('requestData', requestData);

    try {
      const response = await fetch('https://merd-api.merakilearn.org/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const data = await response.json();
        setUser_id(data.user_id);
        console.log('User signed up successfully!');
        console.log('data', data.user_id);
      } else {
        console.error('Failed to sign up user.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h2 className="text-center">Sign Up</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3" style={{ display: 'flex' }}>
              <p>Select Gender:</p>
              <div className="form-check" style={{ marginLeft: '3rem' }}>
                <input
                  type="radio"
                  className="form-check-input"
                  id="male"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check" style={{ marginLeft: '3rem' }}>
                <input
                  type="radio"
                  className="form-check-input"
                  id="female"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
              <div className="form-check" style={{ marginLeft: '3rem' }}>
                <input
                  type="radio"
                  className="form-check-input"
                  id="other"
                  name="gender"
                  value="other"
                  checked={gender === 'other'}
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
                <label className="form-check-label" htmlFor="other">
                  Other
                </label>
              </div>
            </div>
            <div className="mb-3">
              <select
                className="form-select"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                <option value="">Select Country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  className="btn btn-light"
                  type="button"
                  onClick={handleTogglePassword}
                  style={{ outline: 'none' }}
                >
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    style={{ pointerEvents: 'none' }}
                  />
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
          </form>
          {user_id && (
            <div className="alert alert-success mt-3">Your user ID: {user_id} & This unique Id can be used to login to all the three apps of our Multi-App Community</div>
          )}
        </div>
      </div>
      <div className="mt-3 text-center">
        <p>Already have an account? <a href="/signin">Sign in</a></p>
      </div>
      <div className="card-footer text-muted">
        &copy; 2023 Multi-App Login Hub. All rights reserved.
      </div>
    </div>
  );
};

export default SignUp;
