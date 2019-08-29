import React, { useState } from 'react';
import styled from 'styled-components';

const StyledContactForm = styled.form`
  text-align: left;
  &,
  label {
    display: flex;
    flex-direction: column;
  }

  input,
  textarea,
  button {
    border-radius: 3px;
    border: black;
    text-shadow: none;
    font-weight: 300;
    padding: 0.5rem 1rem;
  }

  label {
    text-transform: uppercase;
  }
  p {
    margin: 1rem;
  }
  input,
  textarea {
    background-color: #b8aaa0;
    margin-top: 1rem;
    color: black;
  }
  label {
    color: #74a5b6;
  }
  button {
    background-color: #181413;
    padding: 1rem 2rem;
    transition: background-color 0.5s ease-in-out;
    box-shadow: 0 1px 1px 1px #0c0c0c;
    :hover {
      background-color: #211c1a;
    }
    :active {
      background-color: #111;
    }
  }
  .hidden {
    display: none;
  }
`;

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

const ContactForm = () => {
  const botLabel = `Don’t fill this out if you're human`;
  const [state, setState] = useState({
    email: '',
    message: '',
  });

  const handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...state }),
    })
      .then(() =>
        alert(
          'Your message is sent. Thanks for reaching out. I will respond soon!'
        )
      )
      .catch(error => alert(error));

    e.preventDefault();
  };

  const handleChange = e => {
    setState({ [e.target.name]: e.target.value });
    console.log(state);
  };

  return (
    <StyledContactForm
      onSubmit={handleSubmit}
      name='contact'
      method='POST'
      value='contact'
      netlify-honeypot='bot-field'
      data-netlify='true'
    >
      <input type='hidden' name='form-name' value='contact' />
      <p className='hidden' aria-label={botLabel}>
        <label>
          {botLabel} <input name='bot-field' />
        </label>
      </p>
      <p>
        <label>
          Email:{' '}
          <input
            type='email'
            name='email'
            value={state.email}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <label>
          Message:{' '}
          <textarea
            name='message'
            value={state.message}
            onChange={handleChange}
          ></textarea>
        </label>
      </p>
      <p>
        <button type='submit'>Send</button>
      </p>
    </StyledContactForm>
  );
};

export default ContactForm;
