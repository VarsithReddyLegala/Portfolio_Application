import './App.scss';
import {Routes,Route,useLocation} from 'react-router-dom';
import Home from  './pages/home';
import About from './pages/about'
import Certifications from './pages/certifications'
import Projects from './pages/projects';
import Work from './pages/workexperince';
import Navbar from './Components/Navbar';
import Particles from './utils.js/particles';
import Footer from './Components/Footer';
function App() {
  const location=useLocation();
  console.log(location);
  const renderparticuleJSINHomePage =location.pathname=== "/";
  return (
    <div className="App">
      {/* paritcles js */}
      {
        renderparticuleJSINHomePage &&( <Particles/>)
      }
     
      {/* navbar
      mainpage */}
      <Navbar/>
      <div className="App__main-page-content">
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='Certifications' element={<Certifications/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Work' element={<Work/>}/>
      </Routes>

      <Footer/>
      </div>
    </div>
  );
}

export default App;
