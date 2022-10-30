import FileApi from './FileApi';

export default class FileService {
  fileApi: FileApi;

  constructor() {
    this.fileApi = new FileApi();
  }

  sendFile = async (file: any): Promise<any> => {
    const {data} = await this.fileApi.sendFile(file);
    return data;
  };
}
