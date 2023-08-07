import {makeAutoObservable, runInAction} from 'mobx';
import ApplicationService from './ApplicationService';
import {Asset} from 'react-native-image-picker';
import { IApplication } from "./ApplicationTypes";

const address = {
  source: 'шоссейная 1 казань',
  result: 'г Казань, ул Шоссейная, д 1',
  postal_code: '420032',
  country: 'Россия',
  country_iso_code: 'RU',
  federal_district: 'Приволжский',
  region_fias_id: '0c089b04-099e-4e0e-955a-6bf1ce525f1a',
  region_kladr_id: '1600000000000',
  region_iso_code: 'RU-TA',
  region_with_type: 'Респ Татарстан',
  region_type: 'Респ',
  region_type_full: 'республика',
  region: 'Татарстан',
  area_fias_id: null,
  area_kladr_id: null,
  area_with_type: null,
  area_type: null,
  area_type_full: null,
  area: null,
  city_fias_id: '93b3df57-4c89-44df-ac42-96f05e9cd3b9',
  city_kladr_id: '1600000100000',
  city_with_type: 'г Казань',
  city_type: 'г',
  city_type_full: 'город',
  city: 'Казань',
  city_area: null,
  city_district_fias_id: null,
  city_district_kladr_id: null,
  city_district_with_type: 'р-н Кировский',
  city_district_type: 'р-н',
  city_district_type_full: 'район',
  city_district: 'Кировский',
  settlement_fias_id: null,
  settlement_kladr_id: null,
  settlement_with_type: null,
  settlement_type: null,
  settlement_type_full: null,
  settlement: null,
  street_fias_id: 'c2199eae-07e7-4ac1-b806-f34d020c6f30',
  street_kladr_id: '16000001000160600',
  street_with_type: 'ул Шоссейная',
  street_type: 'ул',
  street_type_full: 'улица',
  street: 'Шоссейная',
  stead_fias_id: null,
  stead_kladr_id: null,
  stead_cadnum: null,
  stead_type: null,
  stead_type_full: null,
  stead: null,
  house_fias_id: '9136b85f-5ece-41d1-867a-7b6e00a024ef',
  house_kladr_id: '1600000100016060001',
  house_cadnum: '16:50:090602:25',
  house_type: 'д',
  house_type_full: 'дом',
  house: '1',
  block_type: null,
  block_type_full: null,
  block: null,
  entrance: null,
  floor: null,
  flat_fias_id: null,
  flat_cadnum: null,
  flat_type: null,
  flat_type_full: null,
  flat: null,
  flat_area: null,
  square_meter_price: '113548',
  flat_price: null,
  postal_box: null,
  fias_id: '9136b85f-5ece-41d1-867a-7b6e00a024ef',
  fias_code: '16000001000000016060001',
  fias_level: '8',
  fias_actuality_state: '0',
  kladr_id: '1600000100016060001',
  capital_marker: '2',
  okato: '92401370000',
  oktmo: '92701000001',
  tax_office: '1683',
  tax_office_legal: '1683',
  timezone: 'UTC+3',
  geo_lat: '55.809095',
  geo_lon: '49.076383',
  beltway_hit: null,
  beltway_distance: null,
  qc_geo: 0,
  qc_complete: 5,
  qc_house: 2,
  qc: 0,
  unparsed_parts: null,
  metro: [
    {
      distance: 1.6,
      line: 'Центральная',
      name: 'Козья слобода',
    },
    {
      distance: 2.1,
      line: 'Центральная',
      name: 'Яшьлек (Юность)',
    },
    {
      distance: 2.4,
      line: 'Центральная',
      name: 'Кремлевская',
    },
  ],
};
export class ApplicationStore {
  loader: boolean = false;

  allApplications: IApplication[] = [];
  application: IApplication | null = null;

  newApplicationPhotosLocal: Asset[] = [];
  newApplicationPhotosData: any[] = [];

  private applicationService: ApplicationService;

  constructor() {
    makeAutoObservable(this);
    this.applicationService = new ApplicationService();
  }

  createApplication = async (data: any) => {
    this.setLoading(true);

    const reqData = {
      ...data,
      files: [...this.newApplicationPhotosData],
      address,
    };

    try {
      const res = await this.applicationService.createApplication(reqData);

      runInAction(() => {
        this.application = res;
      });
    } catch (e) {
      console.log('Error', e);
    } finally {
      this.setLoading(false);
    }
  };

  getAllApplications = async () => {
    this.setLoading(true);

    try {
      const res = await this.applicationService.getAllApplications();

      runInAction(() => {
        this.allApplications = res;
      });
    } catch (e) {
      console.log('Error', e);
    } finally {
      this.setLoading(false);
    }
  };

  setCreateApplicationPhotos = (
    serverFilesRes: any,
    localFilesRes: Asset[],
  ) => {
    runInAction(() => {
      this.newApplicationPhotosLocal = [
        ...this.newApplicationPhotosLocal,
        ...localFilesRes,
      ];
      this.newApplicationPhotosData = [
        ...this.newApplicationPhotosData,
        ...serverFilesRes,
      ];
    });
  };

  setLoading = (value: boolean) => {
    runInAction(() => {
      this.loader = value;
    });
  };
}
