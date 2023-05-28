import AuthApi from './AuthApi';

export default class AuthService {
  authApi: AuthApi;

  constructor() {
    this.authApi = new AuthApi();
  }

  isAuth = async (): Promise<any> => {
    const {data} = await this.authApi.isAuth();
    return data;
  };
}
