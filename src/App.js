
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import About from './Pages/About/About';

import NooraniQaida from './Pages/Courses/NooraniQaida/NooraniQaida';
import OnlineQuranRecitation from './Pages/Courses/OnlineQura Recitation/OnlineQuranRecitation';
import OnlineQuranMemorization from './Pages/Courses/OnlineQura Recitation/OnlineQuranMemorization/OnlineQuranMemorization';
import Tafseer from './Pages/Courses/QuranTafseer/Tafseer';
import QuranwithTajweed from './Pages/Courses/QuranwithTajweed/QuranwithTajweed';
import Contact from './Pages/Contact/Contact';
import Pricing from './Pages/Pricing/Pricing';
import ContactFormMain from './Components/RegisterNow/ContactFormMain';



function App() {
  return (
   <>
 
  
   <Navbar />
   
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/About' element={<About />} />
    <Route path='/Pricing' element={<Pricing />} />

   
    <Route path='/Contact' element={<Contact />} />
    <Route path='/Noorani-Qaida' element={<NooraniQaida />} />
    <Route path='/Quran-recitation-online' element={<OnlineQuranRecitation />} />
    <Route path='/Online-Quran-Memorization' element={<OnlineQuranMemorization />} />
  <Route path='/Tafseer' element={<Tafseer />} />
  <Route path='/Quran-with-Tajweed' element={<QuranwithTajweed />} />
 <Route path='/Contact-Form' element={<ContactFormMain />} />

   </Routes>
   <Footer />
  
   </>
  );
}

export default App;
