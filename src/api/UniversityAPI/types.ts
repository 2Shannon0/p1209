export interface GetUniversityRequest {
  year: string;
  city_id: string;
  university_id: string;
}

export interface GetUniversityResponse {
  university_name: string;
  data: UniversityInfo[];
}

interface UniversityInfo {
  program_id: string;
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
