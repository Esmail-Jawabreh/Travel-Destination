import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/home/Home';
import {Routes,Route} from 'react-router-dom';
import TourDetails from './components/TourDetails/TourDetails';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './components/about/about';


function App() {
  return (
    <div>
      <Header/>

      <Routes>
        <Route path = "/"  element={<Home/>} ></Route>
        <Route path = "/city/:id" element={<TourDetails/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      
      <Footer/>
    </div>
  );
}


export default App;
