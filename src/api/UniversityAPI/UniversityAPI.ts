import BaseAPI from "../BaseAPI/BaseAPI";
import * as t from "./types";

class UniversityAPI extends BaseAPI {
  public static getUniversityCommonInfo(
    options: t.GetUniversityRequest
  ): Promise<t.GetUniversityResponse> {
    // /api/institution/info
    return new Promise((res) =>
      res(require("../mocks/UniversityAPI.university.json"))
    );
  }
}

export const apiInstance = new UniversityAPI();
export default UniversityAPI;
