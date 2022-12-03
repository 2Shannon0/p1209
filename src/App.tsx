import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PageNotFound } from "./components/404";
import { MainLayout } from "./components/layouts";
import { About, City, Home, UniversityInfo } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index={true} element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="city/:year/:city_id" element={<City />} />
          <Route
            path="city/:year/:city_id/university-info/:university_id"
            element={<UniversityInfo />}
          />
          <Route path="not-found" element={<PageNotFound />} />
        </Route>
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
