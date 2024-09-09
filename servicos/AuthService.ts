const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'rmkaR7kGjvmh7Kp';

export const login = (username: string, password: string): boolean => {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
};