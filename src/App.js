import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home'

function App() {
  return (
    <>
 <BrowserRouter>
 <Header />
 <Routes>
   <Route path="/"   element={<Home />} />
   <Route path="/profile"   element={<Home />} />
 </Routes>
 <Footer />
 </BrowserRouter>
    </>
  );
}

export default App;
