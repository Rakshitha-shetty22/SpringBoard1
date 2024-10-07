import HomePage from "./home/HomePage";
import LoginPage from "./login";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddDeffects from '../src/add/AddDefects'
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/add" element={<AddDeffects/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
