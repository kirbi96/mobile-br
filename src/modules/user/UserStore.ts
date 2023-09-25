import {makeAutoObservable, runInAction} from 'mobx';
import {IUser} from './UserTypes';
import UserService from './UserService';

export class UserStore {
  loader: boolean = false;

  userMe: IUser | null = null;
  user: IUser | null = null;

  private userService: UserService;

  constructor() {
    makeAutoObservable(this);
    this.userService = new UserService();
  }

  getCurrentUser = async () => {
    this.setLoading(true);

    try {
      const res = await this.userService.getCurrentUser();

      if (res) {
        runInAction(() => {
          this.userMe = res;
        });
      }
    } catch (e) {
      console.log('Error', e);
    } finally {
      this.setLoading(false);
    }
  };

  getUserById = async (id: number) => {
    this.setLoading(true);

    try {
      const res = await this.userService.getUserById(id);

      if (res) {
        runInAction(() => {
          this.userMe = res;
        });
      }
    } catch (e) {
      console.log('Error', e);
    } finally {
      this.setLoading(false);
    }
  };

  setLoading = (value: boolean) => {
    runInAction(() => {
      this.loader = value;
    });
  };
}
