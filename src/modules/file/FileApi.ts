import AbstractApiRepository from '../../base/repositories/AbstractApiRepository';

export default class FileApi extends AbstractApiRepository {
  sendFile = (data: any) => {
    return this.post({
      url: '/file',
      data,
      config: {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'multipart/form-data',
        },
      },
    });
  };
}
