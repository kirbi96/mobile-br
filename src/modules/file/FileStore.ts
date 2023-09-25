import FileService from './FileService';
import {makeAutoObservable, runInAction} from 'mobx';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {EFileType} from './FileTypes';
import {PermissionsAndroid} from 'react-native';
import FormDataFactory from '../../base/formData/FormDataFactory';

export class FileStore {
  loader: boolean = false;

  files: any = [];

  private fileService: FileService;

  constructor() {
    makeAutoObservable(this);
    this.fileService = new FileService();
  }

  sendFile = async (type: EFileType) => {
    this.setLoading(true);

    try {
      // const granted = await PermissionsAndroid.request(
      //   PermissionsAndroid.PERMISSIONS.CAMERA,
      //   {
      //     title: 'App Camera Permission',
      //     message: 'App needs access to your camera ',
      //     buttonNeutral: 'Ask Me Later',
      //     buttonNegative: 'Cancel',
      //     buttonPositive: 'OK',
      //   },
      // );

      // if (granted) {
      const res = await launchImageLibrary(
        {mediaType: 'photo'},
        pickerRes => pickerRes,
      );

      if (res.assets) {
        const formData = FormDataFactory.create(res.assets[0], 'files');

        const serverFilesRes = await this.fileService.sendFile(formData);
        const localFilesRes = res.assets;

        return {serverFilesRes, localFilesRes};
      }
      // }
    } catch (e) {
      // console.log('Error', e.response);
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
