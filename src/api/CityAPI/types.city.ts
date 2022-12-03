export interface GetCityRequest {
  year: string;
  city_id: string;
}

export interface GetCityResponse {
  title: string;
  data: CityInfo[];
}

interface CityInfo {
  university_id: string;
  name: string;
  abiturients_number: number;
  commercial_places: number;
  budget_places: number;
  bvi: number;
  target_places: number;
  quota_places: number;
  special_quota_places: number;
  kcp: number;
  applications: number;
}
