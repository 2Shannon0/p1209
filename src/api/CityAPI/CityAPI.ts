import BaseAPI from '../BaseAPI/BaseAPI';
import * as t from './types';

class CityAPI extends BaseAPI {
  public static getCitiesInfo(): Promise<t.GetCitiesResponse> {
    return new Promise((res) => res(require('../mocks/CityAPI.cities.json')));
  }

  public static getCityInfo(
    options: t.GetCityRequest
  ): Promise<t.GetCityResponse> {
    return new Promise((res) => res(require('../mocks/CityAPI.city.json'))); // fetch data
  }
}

export const apiInstance = new CityAPI();
export default CityAPI;
