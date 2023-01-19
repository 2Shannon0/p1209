// export interface GetEduProgramRequest {
//   year: string;
//   city_id: string;
//   university_id: string;
// }

export interface GetEduProgramResponse {
  eduProgram_name: string;
  data: EduProgramInfo[];
}

interface EduProgramInfo {
  abiturient_id: string;
  abiturient_snils: string;
  summa_ballov: number;
  summa_ballov_bez_ind_dos: number;
  ikt: number;
  math: number;
  rus: number;
  ind_dos: number;
  preimush_pravo: string;
  original: string;
  soglasie: string;
}
