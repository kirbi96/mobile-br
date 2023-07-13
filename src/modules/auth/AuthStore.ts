import {makeAutoObservable, runInAction} from 'mobx';
import AuthService from './AuthService';
import {IAuthRequest, IRegistrationRequest} from './AuthTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setAccessToken} from '../../base/ApiAdapter';

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

    try {
      const storageToken = await AsyncStorage.getItem('@token');
      if (storageToken !== null) {
        setAccessToken(storageToken);
        runInAction(() => {
          this.token = storageToken;
        });
      }
    } catch (e) {
      //logout
    } finally {
      this.setLoading(false);
    }
  };

  login = async (data: IAuthRequest) => {
    this.setLoading(true);

    try {
      const res = await this.authService.login(data);

      if (res.access_token) {
        runInAction(() => {
          this.token = res.access_token;
        });

        await AsyncStorage.setItem('@token', res.access_token);
        setAccessToken(res.access_token);
      }
    } catch (e) {
      console.log('Error', e);
    } finally {
      this.setLoading(false);
    }
  };

  registration = async (data: IRegistrationRequest) => {
    this.setLoading(true);

    try {
      const res = await this.authService.registration(data);

      if (res.access_token) {
        runInAction(() => {
          this.token = res.access_token;
        });
      }
    } catch (e) {
      console.log('Error', e);
    } finally {
      this.setLoading(false);
    }
  };

  logout = async () => {
    try {
      const res = await this.authService.logout();

      if (res.isSuccess) {
        runInAction(() => {
          this.token = null;
        });

        await AsyncStorage.removeItem('@token');
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
