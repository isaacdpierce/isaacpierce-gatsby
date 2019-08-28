import React from 'react';
import styled from 'styled-components';

const StyledContactForm = styled.form`
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
    :hover {
      background-color: #211c1a;
    }
    :active {
      background-color: #111111;
    }
  }
  .bot-hidden {
    display: none;
  }
`;

const ContactForm = () => {
  const botLabel = `Don’t fill this out if you're human`;

  return (
    <StyledContactForm
      method='POST'
      name='form-name'
      value='contact'
      netlify-honeypot='bot-field'
      data-netlify='true'
    >
      <p class='bot-hidden' aria-label={botLabel}>
        <label>
          {botLabel} <input name='bot-field' />
        </label>
      </p>
      <p>
        <label>
          Email: <input type='text' name='email' />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name='message'></textarea>
        </label>
      </p>
      <p>
        <button type='submit'>Send</button>
      </p>
    </StyledContactForm>
  );
};

export default ContactForm;
