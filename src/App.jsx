import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'

import Navigation from './Components/Navigation/Navigation'
import Login from './Components/Pages/Login/Login'
import Join from './Components/Pages/Join/Join'

import Browse from './Components/Pages/Browse/Browse'

function App() {
	return (
		<>
			<Navigation />
			<main>
				<Switch>
					<Route path="/" component={Browse} exact />
					<Route path="/login" component={Login} exact />
					<Route path="/join" component={Join} exact />
				</Switch>
			</main>
		</>
	)
}

export default App
