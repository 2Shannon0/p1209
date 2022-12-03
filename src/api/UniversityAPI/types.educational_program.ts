export interface GetEducationalProgramRequest {
  year: string;
  city_id: string;
  university_id: string;
  educational_program_id: string;
}

export interface GetEducationalProgramResponse {
  update_time: string;
  university: {
    name: string;
    id: string;
  };
  educational_program: {
    name: string;
    id: string;
  };
  exams: Exams[];
  data: EducationalProgramInfo[];
}

interface EducationalProgramInfo {
  place: string;
  snils: string;
  exam_scores: ExamScores[];
  summ: number;
  considerations: Consideration[];
  is_original: boolean;
}

interface Exams {
  name: string;
}

interface ExamScores {
  name: string;
  score: number;
}

interface Consideration {
  title: string;
}
