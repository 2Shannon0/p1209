export interface GetCityRequest {
  year: string;
  city_id: string;
}

export interface GetCityResponse {
  title: string;
  data: CityInfo[];
}

// interface CityInfo {
//   university_id: string;
//   name: string;
//   abiturients_number: number;
//   commercial_places: number;
//   budget_places: number;
//   bvi: number;
//   target_places: number;
//   quota_places: number;
//   special_quota_places: number;
//   kcp: number;
//   applications: number;
// }
interface CityInfo {
  university_id: string;
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
