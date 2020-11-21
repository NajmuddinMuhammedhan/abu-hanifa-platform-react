import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'

import Navigation from './Components/Navigation/Navigation'
import Login from './Components/Pages/Login/Login'
import Join from './Components/Pages/Join/Join'

function App() {
	return (
		<>
			<Navigation />
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/login" component={Login} exact />
				<Route path="/join" component={Join} exact />
			</Switch>
		</>
	)
}

function Home () {
	return (
		<main></main>
	)
}

export default App
