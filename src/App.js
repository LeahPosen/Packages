import './App.css';
import Packages from './components/packages';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddCard from './components/addCard';
import Map from './map/map';
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Packages />} />
          <Route path={"/add"} element={<AddCard />} />
          <Route path={"/map/:id"} element={<Map />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
