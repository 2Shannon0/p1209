import { useParams } from "react-router-dom";

type PageParams = {
  city_id: string;
  year: string;
  university_id: string;
  educational_program_id: string;
};
export const usePageParams = () => {
  return useParams() as PageParams;
};
