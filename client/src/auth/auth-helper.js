const TOKEN_KEY = "CUENTASCLARAS_USER";

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
}

export function getToken(clave) {
  const userToken = JSON.parse(localStorage.getItem(TOKEN_KEY));
  if (!userToken && !clave) {
    window.location.replace("http://localhost:3000/login");
  }
  if (!userToken && clave) {
    return null
  }
  return userToken.Token;
}

export function getUserName() {
  const userToken = JSON.parse(localStorage.getItem(TOKEN_KEY));
  if (!userToken) {
    window.location.replace("http://localhost:3000/login");
  }
  return userToken.Username;
}

export function deleteToken() {
  localStorage.removeItem(TOKEN_KEY);
}
