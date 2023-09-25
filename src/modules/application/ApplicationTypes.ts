import {IFile} from '../file/FileTypes';
import {IAddress} from '../address/AddressTypes';

export interface IApplication {
  id: number;
  address: IAddress;
  files: IFile[];
  floor: string;
  floor_home: string;
  rooms: string;
  area: string;
  balcony: boolean;
  conditioner: boolean;
  fridge: boolean;
  stove: boolean;
  microwave: boolean;
  washing: boolean;
  wifi: boolean;
  createAt: string;
  price: string;
  pledge: string;
}

export interface IComfort {
  balcony: boolean;
  conditioner: boolean;
  fridge: boolean;
  stove: boolean;
  microwave: boolean;
  washing: boolean;
  wifi: boolean;
}
