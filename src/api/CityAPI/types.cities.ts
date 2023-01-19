export interface GetCitiesResponse {
  data: GetCityInfo[];
}

interface GetCityInfo {
  city_id: string;
  name: string;
  university_number: number;
  abiturients_number: number;
  vacancies_number: number;
}
