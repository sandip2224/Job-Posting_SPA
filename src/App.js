import React from 'react'
import {
	Routes,
	Route,
	Link
} from "react-router-dom";


import Home from './components/Home'
import Nav from './components/Nav'
import Body from './components/Body'

import './App.css'

const App = () => {
	return (
		<div className='App'>
			<Nav />

			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/robinhood-apply" element={<Body />} />
			</Routes>
		</div>
	)
}

export default App;
