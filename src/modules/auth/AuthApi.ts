import {api} from '../../base/axios';
import {IAuthRequest, IRegistrationRequest} from './AuthTypes';

export default class AuthApi {
  login = (data: IAuthRequest) => {
    return api.post('/auth/login', data);
  };

  registration = (data: IRegistrationRequest) => {
    return api.post('/user', data);
  };

  logout = () => {
    // return Api.post('/logout', data);
    return {data: {isSuccess: true}};
  };
}
