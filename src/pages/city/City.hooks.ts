import { useParams } from "react-router-dom";

type PageParams = {
  city_id: string;
  year: string;
};
export const usePageParams = () => {
  return useParams() as PageParams;
};
