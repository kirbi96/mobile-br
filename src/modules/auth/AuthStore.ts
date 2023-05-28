import {makeAutoObservable, runInAction} from 'mobx';
import AuthService from './AuthService';

export class AuthStore {
  loader: boolean = false;

  token: string | null = null;

  private authService: AuthService;

  constructor() {
    makeAutoObservable(this);
    this.authService = new AuthService();
  }

  isAuth = async () => {
    this.setLoading(true);

    const userIsAuth = false;

    try {
      // const res = await this.authService.isAuth();

      runInAction(() => {
        this.token = userIsAuth ? null : 'EXAMPLE TOKEN';
        // this.files = res;
      });
    } catch (e) {
      console.log('Error', e);
    } finally {
      this.setLoading(false);
    }
  };

  auth = async () => {
    this.setLoading(true);

    try {
      // const res = await this.authService.isAuth();

      runInAction(() => {
        this.token = 'EXAMPLE TOKEN';
        // this.files = res;
      });
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
