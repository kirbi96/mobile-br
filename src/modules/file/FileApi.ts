import {api} from '../../base/axios';

export default class FileApi {
  sendFile = (data: any) => {
    return api.post('/example/ex', data);
  };
}
