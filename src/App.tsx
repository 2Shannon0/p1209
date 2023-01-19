import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './components/layouts';
import { About, City, Home, UniversityInfo, EduProgramInfo } from './pages';
import AuthPage from './pages/auth-page/auth-page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index={true} element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="enter" element={<AuthPage loggedIn={true} />} />
          <Route path="register" element={<AuthPage loggedIn={false} />} />
          <Route path="city/:year/:city_id" element={<City />} />
          <Route
            path="city/:year/:city_id/university-info/:university_id"
            element={<UniversityInfo />}
          />
          <Route
            path="city/:year/:city_id/university-info/:university_id/edu-program-info/:eduProgram_id"
            element={<EduProgramInfo />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
