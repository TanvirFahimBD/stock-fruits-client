import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import AddFruits from './pages/AddFruits/AddFruits';
import Blogs from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import LogIn from './pages/LogIn/LogIn';
import ManageFruits from './pages/ManageFruits/ManageFruits';
import MyFruits from './pages/MyFruits/MyFruits';
import Profile from './pages/Profile/Profile';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import NotFoundPage from './pages/Shared/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/managefruits' element={<ManageFruits />} />
          <Route path='/addfruits' element={<AddFruits />} />
          <Route path='/myfruits' element={<MyFruits />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
