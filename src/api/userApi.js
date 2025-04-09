import { BASE_URL } from './config';

export async function getUsers() {
  const res = await fetch(`${BASE_URL}/users`);
  return res.json();
}

export async function getUserByCredentials(username, password) {
  const res = await fetch(`${BASE_URL}/users?username=${username}&password=${password}`);
  return res.json();
}

export async function addUser(userData) {
  const res = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  return res.json();
}

export async function updateUser(id, updates) {
  const res = await fetch(`${BASE_URL}/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });
  return res.json();
}

export async function deleteUser(id) {
  const res = await fetch(`${BASE_URL}/users/${id}`, {
    method: 'DELETE',
  });
  return res.json();
}