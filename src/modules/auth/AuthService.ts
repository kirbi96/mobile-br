import AuthApi from './AuthApi';
import {IAuthRequest, IAuthResponse, IRegistrationRequest} from './AuthTypes';

export default class AuthService {
  authApi: AuthApi;

  constructor() {
    this.authApi = new AuthApi();
  }

  isAuth = async (): Promise<any> => {
    const {data} = await this.authApi.isAuth();
    return data;
  };

  auth = async (authData: IAuthRequest): Promise<IAuthResponse> => {
    const {data} = await this.authApi.auth(authData);
    return data;
  };

  registration = async (
    regData: IRegistrationRequest,
  ): Promise<IAuthResponse> => {
    const {data} = await this.authApi.registration(regData);
    return data;
  };
}
