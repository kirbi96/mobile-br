import AbstractApiRepository from '../../base/repositories/AbstractApiRepository';

export default class UserApi extends AbstractApiRepository {
  getCurrentUser = () => {
    return this.get({
      url: `/user/me`,
    });
  };

  getUserById = (id: number) => {
    return this.get({
      url: `/user/${id}`,
    });
  };
}
