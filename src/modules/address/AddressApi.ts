import AbstractApiRepository from '../../base/repositories/AbstractApiRepository';

export default class AddressApi extends AbstractApiRepository {
  getAddressByString = (address: string) => {
    return this.get({
      url: `/address/string?address=${address}`,
    });
  };
}
