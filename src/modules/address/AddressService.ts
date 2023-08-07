import AddressApi from './AddressApi';

export default class AddressService {
  addressApi: AddressApi;

  constructor() {
    this.addressApi = new AddressApi();
  }

  getAddressByString = async (address: string): Promise<any> => {
    const {data} = await this.addressApi.getAddressByString(address);
    return data;
  };
}
