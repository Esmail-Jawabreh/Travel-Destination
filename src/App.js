import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/home/Home';
import {Routes,Route} from 'react-router-dom';
import TourDetails from './components/TourDetails/TourDetails';
import Header from './components/header/Header';


 

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path = "/"  element={<Home/>} ></Route>
        <Route path = "/city/:id" element={<TourDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
