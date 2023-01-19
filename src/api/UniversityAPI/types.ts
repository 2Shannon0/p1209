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
  kcp: number;
  applications: number; // заявлений всего
  abiturients_number: number;
  budget_places: number;
  commercial_places: number;
  consents_number: number; //кол-во согласий на зачисление
  op: number; // кол-во заявлений по особому праву (квота)
  target_places: number; // заявлений на целевые
  bvi: number; //заявлений на бви
  ok: number; // заявлений на общий конкурс = заявлений всего - (бви + целевые + особое право)
}
