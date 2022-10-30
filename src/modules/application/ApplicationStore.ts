import {makeAutoObservable, runInAction} from 'mobx';
import ApplicationService from './ApplicationService';
import {Asset} from 'react-native-image-picker';

export class ApplicationStore {
  loader: boolean = false;

  newApplicationPhotosLocal: Asset[] = [];
  newApplicationPhotosData: any[] = [];

  private applicationService: ApplicationService;

  constructor() {
    makeAutoObservable(this);
    this.applicationService = new ApplicationService();
  }

  createApplication = async (data: any) => {
    this.setLoading(true);

    try {
      const res = await this.applicationService.createApplication(data);

      runInAction(() => {
        // this.files = res;
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
      // this.newApplicationPhotosData = [
      //   ...this.newApplicationPhotosData,
      //   ...serverFilesRes,
      // ];
      this.newApplicationPhotosLocal = [
        ...this.newApplicationPhotosLocal,
        ...localFilesRes,
      ];
    });
  };

  setLoading = (value: boolean) => {
    runInAction(() => {
      this.loader = value;
    });
  };
}
