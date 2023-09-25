import {IApplication} from '../modules/application/ApplicationTypes';

export class ApplicationHelper {
  static getApartmentComfort = (application: IApplication) => {
    const {balcony, conditioner, fridge, stove, microwave, washing, wifi} =
      application;

    const result: string[] = [];

    const arr = [balcony, conditioner, fridge, stove, microwave, washing, wifi];
    const tags = [
      'Балкон',
      'Кондиционер',
      'Холодильник',
      'Плита',
      'Микроволновка',
      'Стиральная машина',
      'Wi-Fi',
    ];

    arr.forEach((item, index) => item && result.push(tags[index]));

    return result;
  };
}
