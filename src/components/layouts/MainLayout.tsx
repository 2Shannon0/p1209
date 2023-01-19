import { Outlet } from "react-router-dom";
import { PageHeader } from "./index";
export const MainLayout = () => {
  return (
    <>
      <PageHeader />
      <Outlet />
    </>
  );
};
