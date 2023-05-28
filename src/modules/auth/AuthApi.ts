import {api} from '../../base/axios';

export default class AuthApi {
  isAuth = () => {
    return api.get('/example/ex');
  };
}
