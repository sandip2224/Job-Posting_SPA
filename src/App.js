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
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/robinhood-apply">Robinhood</Link></li>
				{/* <li><Link to="/contact">Contact</Link></li> */}
			</ul>

			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/robinhood-apply" element={<Body />} />
			</Routes>
		</div>
	)
}

export default App;
