import {makeAutoObservable, runInAction} from 'mobx';
import ApplicationService from './ApplicationService';
import {Asset} from 'react-native-image-picker';
import {IApplication} from './ApplicationTypes';
import {IAddress} from '../address/AddressTypes';
import Navigation from '../../base/Navigation';
import {Screens} from '../../navigation/Screens';

export class ApplicationStore {
  loader: boolean = false;

  allApplications: IApplication[] = [];
  application: IApplication | null = null;

  myApplication: IApplication[] = [];

  newApplicationPhotosLocal: Asset[] = [];
  newApplicationPhotosData: any[] = [];

  private applicationService: ApplicationService;

  constructor() {
    makeAutoObservable(this);
    this.applicationService = new ApplicationService();
  }

  createApplication = async (data: any, address: IAddress) => {
    this.setLoading(true);

    const reqData = {
      ...data,
      files: [...this.newApplicationPhotosData],
      address,
    };

    try {
      const res = await this.applicationService.createApplication(reqData);

      if (res) {
        runInAction(() => {
          this.application = res;
          this.myApplication = [...this.myApplication, res];
        });

        Navigation.navigate(Screens.PROFILE);
      }
    } catch (e) {
      console.log('Error', e);
    } finally {
      this.setLoading(false);
    }
  };

  getAllApplications = async () => {
    this.setLoading(true);

    try {
      const res = await this.applicationService.getAllApplications();

      runInAction(() => {
        this.allApplications = res;
      });
    } catch (e) {
      console.log('Error', e);
    } finally {
      this.setLoading(false);
    }
  };

  getMyApplications = async () => {
    this.setLoading(true);

    try {
      const res = await this.applicationService.getMyApplications();

      runInAction(() => {
        this.myApplication = res;
      });
    } catch (e) {
      console.log('Error', e);
    } finally {
      this.setLoading(false);
    }
  };

  getApplication = async (applicationId: number) => {
    this.setLoading(true);

    try {
      const res = await this.applicationService.getApplication(applicationId);

      runInAction(() => {
        this.application = res;
      });
    } catch (e) {
      console.log('Error', e);
    } finally {
      this.setLoading(false);
    }
  };

  setCreateApplicationPhotos = (
    serverFilesRes: any,
    localFilesRes: Asset[],
  ) => {
    runInAction(() => {
      this.newApplicationPhotosLocal = [
        ...this.newApplicationPhotosLocal,
        ...localFilesRes,
      ];
      this.newApplicationPhotosData = [
        ...this.newApplicationPhotosData,
        ...serverFilesRes,
      ];
    });
  };

  setLoading = (value: boolean) => {
    runInAction(() => {
      this.loader = value;
    });
  };
}
