import { Outlet } from 'react-router-dom';
import MainManu from '../components/MainMenu';
const MainLayout = () => {
  return (
    <>
      <MainManu />
      <Outlet />
    </>
  );
};

export default MainLayout;
