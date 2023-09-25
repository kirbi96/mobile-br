import AbstractApiRepository from '../../base/repositories/AbstractApiRepository';

export default class ApplicationApi extends AbstractApiRepository {
  createApplication = (data: any) => {
    return this.post({url: '/application', data});
  };

  getAllApplications = () => {
    return this.get({url: '/application'});
  };

  getMyApplications = () => {
    return this.get({url: '/application/my'});
  };

  getApplication = (id: number) => {
    return this.get({url: `/application/${id}`});
  };
}
