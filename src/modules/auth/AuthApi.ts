import {api} from '../../base/axios';
import {IAuthRequest, IRegistrationRequest} from './AuthTypes';

export default class AuthApi {
  isAuth = () => {
    return api.get('/example/ex');
  };

  auth = (data: IAuthRequest) => {
    return api.post('/example/ex', data);
  };

  registration = (data: IRegistrationRequest) => {
    return api.post('/example/ex', data);
  };
}
