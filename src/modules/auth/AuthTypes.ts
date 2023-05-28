export interface IAuthRequest {
  email: string;
  password: string;
}

export interface IRegistrationRequest {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IAuthResponse {
  token: string;
}
