import {api} from '../../base/axios';
import {IAuthRequest, IRegistrationRequest} from './AuthTypes';

export default class AuthApi {
  isAuth = () => {
    return api.get('/example/ex');
  };

  login = (data: IAuthRequest) => {
    // return api.post('/example/ex', data);
    return {data: {token: 'TOKEN'}};
  };

  registration = (data: IRegistrationRequest) => {
    // return api.post('/example/ex', data);
    return {data: {token: 'TOKEN'}};
  };

  logout = () => {
    // return Api.post('/logout', data);
    return {data: {isSuccess: true}};
  };
}
