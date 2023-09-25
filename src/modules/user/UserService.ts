import UserApi from './UserApi';

export default class UserService {
  userApi: UserApi;

  constructor() {
    this.userApi = new UserApi();
  }

  getCurrentUser = async (): Promise<any> => {
    const {data} = await this.userApi.getCurrentUser();
    return data;
  };

  getUserById = async (id: number): Promise<any> => {
    const {data} = await this.userApi.getUserById(id);
    return data;
  };
}
