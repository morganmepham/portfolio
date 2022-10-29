import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeBody from './Comps/Home/HomeBody/HomeBody'
import AboutBody from './Comps/About/AboutBody/AboutBody'
import ProjectsBody from './Comps/Projects/ProjectsBody/ProjectsBody'
import ContactBody from './Comps/Contact/ContactBody/ContactBody'
import Navbar from './Comps/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/'>
          <Route index element={<HomeBody />} />
          <Route path='about' element={<AboutBody />} />
          <Route path='projects' element={<ProjectsBody />} />
          <Route path='contact' element={<ContactBody />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
