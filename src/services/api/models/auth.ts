export interface SignUpParams {
  email: string;
  password: string;
  name: string;
}

export interface BasicAuthCredentials {
  username: string;
  password: string;
}

export interface SignUpResponse {
  message?: string;
  nextStep?: string;
  basicAuthCredentials?: BasicAuthCredentials;
}
