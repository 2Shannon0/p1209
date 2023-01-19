import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PageNotFound } from "./components/404";
import { MainLayout } from "./components/layouts";
import { About, City, EducationalProgram, Home, UniversityInfo } from "./pages";

function App() {
  return (
    <BrowserRouter basename="front">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index={true} element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="city/:year/:city_id">
            <Route path="" element={<City />} />
            <Route path="university-info/:university_id">
              <Route path="" element={<UniversityInfo />} />
              <Route
                path="educational-program/:educational_program_id"
                element={<EducationalProgram />}
              />
            </Route>
          </Route>
          <Route path="not-found" element={<PageNotFound />} />
        </Route>
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
