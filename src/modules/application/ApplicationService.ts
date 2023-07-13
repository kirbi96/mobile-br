import ApplicationApi from './ApplicationApi';

export default class ApplicationService {
  applicationApi: ApplicationApi;

  constructor() {
    this.applicationApi = new ApplicationApi();
  }

  createApplication = async (applicationData: any): Promise<any> => {
    const {data} = await this.applicationApi.createApplication(applicationData);
    return data;
  };

  getAllApplications = async (): Promise<any> => {
    const {data} = await this.applicationApi.getAllApplications();
    return data;
  };
}
