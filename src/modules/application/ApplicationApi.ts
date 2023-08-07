import AbstractApiRepository from '../../base/repositories/AbstractApiRepository';

export default class ApplicationApi extends AbstractApiRepository {
  createApplication = (data: any) => {
    return this.post({url: '/application', data});
  };

  getAllApplications = () => {
    return this.get({url: '/application'});
  };
}
