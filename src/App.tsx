import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
