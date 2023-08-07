import {makeAutoObservable, runInAction} from 'mobx';
import AddressService from './AddressService';
import {IAddress} from './AddressTypes';

export class AddressStore {
  loader: boolean = false;

  addresses: IAddress[] = [];
  selectAddress: IAddress | null = null;

  private addressService: AddressService;

  constructor() {
    makeAutoObservable(this);
    this.addressService = new AddressService();
  }

  getAddressByString = async (address: string) => {
    this.setLoading(true);

    try {
      const res = await this.addressService.getAddressByString(address);

      if (res) {
        runInAction(() => {
          this.addresses = res;
        });
      }
    } catch (e) {
      console.log('Error', e);
    } finally {
      this.setLoading(false);
    }
  };

  userSelectAddress = (address: IAddress) => {
    runInAction(() => {
      this.selectAddress = address;
    });
  };

  setLoading = (value: boolean) => {
    runInAction(() => {
      this.loader = value;
    });
  };
}
