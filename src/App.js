import {Routes, Route} from 'react-router-dom'

import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'

import Portofolio from './Pages/portofolio/portofolio'
import Blog from './Pages/blog/Blog'
import Navbar from './Pages/navbar/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
  <>

    <Navbar/>

    <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/portfolio' element={<Portofolio/>}></Route>
       <Route path='/blog' element={<Blog/>}></Route>


    </Routes>

  <Footer/>
   </>
  );

}

export default App;
