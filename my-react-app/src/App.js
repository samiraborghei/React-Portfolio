import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/index';
import About from './components/About/index';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';


export default function App() {
	return (
	  <div className="App">
		<Router>
			
		  <div className="container">
			{/* Sidebar */}
			<Sidebar />
  
			{/* Main Content */}
			<div className="main-content">
			  <Routes>
			  <Route path="/"element={<Home />}  />
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			  </Routes>
			</div>
		  </div>
		</Router>
	  </div>
	);
  }