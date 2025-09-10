import axios from 'axios';

const API_KEY = 'AIzaSyBgXLbdwaMqNoV8tWLm5xhUcris7mR1bZc';

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  console.log(response.data);
}

async function createUser(email, password) {
  await authenticate('signUp', email, password);
}

async function login(email, password) {
  await authenticate('signInWithPassword', email, password);
}

export { createUser, login };
