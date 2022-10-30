import FileService from './FileService';
import {makeAutoObservable, runInAction} from 'mobx';
import {launchImageLibrary} from 'react-native-image-picker';

export class FileStore {
  loader: boolean = false;

  files: any = [];

  private fileService: FileService;

  constructor() {
    makeAutoObservable(this);
    this.fileService = new FileService();
  }

  sendFile = async () => {
    this.setLoading(true);

    try {
      const res = await launchImageLibrary(
        {mediaType: 'photo'},
        pickerRes => pickerRes,
      );

      if (res.assets) {
        const formData = new FormData();

        const sendFileData = res.assets.map(item => ({
          type: item.type,
          name: item.fileName,
          uri: item.uri,
        }));

        formData.append('file', sendFileData);

        const serverFilesRes = await this.fileService.sendFile(formData);
        const localFilesRes = res.assets;

        return {serverFilesRes, localFilesRes};
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
