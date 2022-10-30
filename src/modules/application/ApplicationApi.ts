import {api} from '../../base/axios';

export default class ApplicationApi {
  createApplication = (data: any) => {
    return api.post('/example/ex', data);
  };
}
