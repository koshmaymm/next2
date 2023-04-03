export const appToken = "appToken";
export const jwtFakeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDFkYjI0ZjIyMGUyMTY5YmJkZmRjZiIsImlhdCI6MTY3ODIwNzUyNCwiZXhwIjoxNjc4ODEyMzI0fQ.8YlvaQVxxH_Mra5RYCsnlPhop_f_Ijc3bz66rtiF8mw";

export const setToken = (token: string) => localStorage.setItem(appToken, token);
export const getToken = () => localStorage.getItem(appToken);
export const removeToken = () => localStorage.removeItem(appToken);
