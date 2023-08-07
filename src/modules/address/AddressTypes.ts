export interface IAddress {
  fias_id: string;
  result: string;
  country: string;
  federal_district: string;
  region_fias_id: string;
  region_kladr_id: string;
  region: string;
  city: string;
  city_with_type: string;
  city_area: string;
  city_district_with_type: string;
  city_district: string;
  street_with_type: string;
  street_fias_id: string;
  street_kladr_id: string;
  street: string;
  house: string;
  kladr_id: string;
  timezone: string;
  geo_lat: string;
  geo_lon: string;
  metro: ISubway[];
}

export interface ISubway {
  distance: number;
  line: string;
  name: string;
}
