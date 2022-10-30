import FileService from './FileService';
import {makeAutoObservable, runInAction} from 'mobx';

export class FileStore {
  loader: boolean = false;

  files: any = [];

  private fileService: FileService;

  constructor() {
    makeAutoObservable(this);
    this.fileService = new FileService();
  }

  sendFile = async (data: any) => {
    this.setLoading(true);

    try {
      const res = await this.fileService.sendFile(data);

      runInAction(() => {
        this.files = res;
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
