import axios from 'axios';

const API_KEY = 'my_key';

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  return response.data.idToken;
}

function createUser(email, password) {
  return authenticate('signUp', email, password);
}

function login(email, password) {
  return authenticate('signInWithPassword', email, password);
}

export { createUser, login };
