
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Notfound from './Pages/Shared/NotFound/Notfound'
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Chackout from './Pages/Chackout/Chackout';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';




function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/home" element={<Home></Home>} ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/chackout' element={
          <RequireAuth>
            <Chackout></Chackout>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
