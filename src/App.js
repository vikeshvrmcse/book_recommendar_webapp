import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import Navbar from './components/Navbar';
import BannerSection from './components/BannerSection';
import BookShows from './components/BookShows';
import { bookData } from './data/BookData';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Navbar />
    
    <BannerSection />
    <BookShows bookData={bookData}/>
    <Footer/>
    </>
  );
}

export default App;
