const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";
const AUTH_KEY = "savory_admin_auth";

export function login(username, password) {
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    sessionStorage.setItem(AUTH_KEY, "true");
    return true;
  }
  return false;
}

export function logout() {
  sessionStorage.removeItem(AUTH_KEY);
}

export function isAuthenticated() {
  return sessionStorage.getItem(AUTH_KEY) === "true";
}
