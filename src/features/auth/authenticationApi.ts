export interface LoginResponse {
  isAuthenticated: boolean;
}

export function fetchLogin(email: string, password: string) {
  return new Promise<LoginResponse>((resolve, reject) => {
    if (email === "reubenjefwa1@gmail.com" && password.length >= 12) {
      setTimeout(
        () =>
          resolve({
            isAuthenticated: true,
          }),
        3000
      );
    } else {
      setTimeout(
        () =>
          reject(
            "The email is not correct. The correct email is reubenjefwa1@gmail.com"
          ),
        3000
      );
    }
  });
}
