import BaseAPI from '../BaseAPI/BaseAPI';
import * as t from './types';

class EduProgramAPI extends BaseAPI {
  public static getEduProgramInfo(): // options: t.GetEduProgramRequest
  Promise<t.GetEduProgramResponse> {
    return new Promise((res) => res(require('../mocks/EduProgramAPI.json')));
  }
}

export const apiInstance = new EduProgramAPI();
export default EduProgramAPI;
