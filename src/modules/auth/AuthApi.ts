import {IAuthRequest, IRegistrationRequest} from './AuthTypes';
import AbstractApiRepository from '../../base/repositories/AbstractApiRepository';

export default class AuthApi extends AbstractApiRepository {
  login = (data: IAuthRequest) => {
    return this.post({url: '/auth/login', data});
  };

  registration = (data: IRegistrationRequest) => {
    return this.post({url: '/user', data});
  };

  logout = () => {
    // return Api.post('/logout', data);
    return {data: {isSuccess: true}};
  };
}
