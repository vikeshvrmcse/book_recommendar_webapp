/** @format */

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Navbar from './components/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Approaches from './pages/Approaches';
import ProjectAnalysis from './pages/ProjectAnalysis';
import AboutUs from './pages/AboutUs';
import Science from './features/Science';
import Mathematics from './features/Mathematics';
import Technologies from './features/Technologies';
import Others from './features/Others';
function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/approaches'
					element={<Approaches val={'Approaches'} />}
				/>
				<Route
					path='/project-analysis'
					element={<ProjectAnalysis val={'Project Analysis'} />}
				/>
				<Route
					path='/science'
					element={<Science val={'Science'} />}
				/>
				<Route
					path='/mathematics'
					element={<Mathematics val={'Mathematics'} />}
				/>
				<Route
					path='/technologies'
					element={<Technologies val={'Technologies'} />}
				/>
				<Route
					path='/others'
					element={<Others val={'Others'} />}
				/>
				<Route
					path='/about-us'
					element={<AboutUs val={'About Us'} />}
				/>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
