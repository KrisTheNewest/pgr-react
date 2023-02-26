import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";

import Calendar from "./pages/Calendar";
import CharaGallery from "./pages/CharaGallery";
import Landing from "./pages/Landing";
import Layout from "./compos/Layout";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<CharaGallery />}></Route>
					<Route path="calendar" element={<Calendar />}></Route>
					<Route path="about" element={<Landing />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App;