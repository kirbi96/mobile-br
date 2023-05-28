import AuthApi from './AuthApi';
import {
  IAuthRequest,
  IAuthResponse,
  ILogoutResponse,
  IRegistrationRequest,
} from './AuthTypes';

export default class AuthService {
  authApi: AuthApi;

  constructor() {
    this.authApi = new AuthApi();
  }

  login = async (authData: IAuthRequest): Promise<IAuthResponse> => {
    const {data} = await this.authApi.login(authData);
    return data;
  };

  logout = async (): Promise<ILogoutResponse> => {
    const {data} = await this.authApi.logout();
    return data;
  };

  registration = async (
    regData: IRegistrationRequest,
  ): Promise<IAuthResponse> => {
    const {data} = await this.authApi.registration(regData);
    return data;
  };
}
