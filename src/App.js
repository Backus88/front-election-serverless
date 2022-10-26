import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {  React } from 'react';
import Home from './pages/Home';
import Predict from './pages/Predict';



export default function App(){
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/predict" element={<Predict/>} />
			</Routes>
		</BrowserRouter>
	);
}