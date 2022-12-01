import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import MainLayout from './layouts/MainLayout';
import About from './components/About';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Moscow from './components/Cities/Moscow';
import SaintPetersburg from './components/Cities/SaintPetersburg';
import University from './components/Universities/University';
import Applicants from './components/Applicants/Applicants';
import EnterForm from './components/Enter/EnterForm';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index={true} element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="Contacts" element={<Contacts />} />
            <Route path="enter" element={<EnterForm />} />
            <Route path="Moscow" element={<Moscow />} />
            <Route path="Moscow/:slug/:slug" element={<Applicants />} />
            <Route path="Moscow/:slug" element={<University />} />
            <Route path="SaintPetersburg" element={<SaintPetersburg />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
