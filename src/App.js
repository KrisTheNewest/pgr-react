import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import Layout from "./compos/Layout";

import Calendar from "./pages/Calendar";
import EntireContainer from "./pages/CharaGallery";
import Landing from "./pages/Landing";
import Notfound from './pages/NotFound';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/costumes/:chara?/:cost?" element={<EntireContainer />}></Route>
					<Route path="/calendar" element={<Calendar />}></Route>
					<Route path="/about" element={<Landing />}></Route>
					<Route path="/" element={<Navigate replace to="/costumes" />} />
					<Route path="*" element={<Notfound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App;