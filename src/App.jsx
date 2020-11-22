import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'

import Navigation from './Components/Navigation/Navigation'
import Footer from './Components/Footer/Footer'

import Login from './Components/Pages/Login/Login'
import Join from './Components/Pages/Join/Join'

import Browse from './Components/Pages/Browse/Browse'
import Syllabus from './Components/Pages/Syllabus/Syllabus'

function App() {
	return (
		<>
			<Navigation />
			<main>
				<Switch>
					<Route path="/login" component={Login} exact />
					<Route path="/join" component={Join} exact />

					<Route path="/browse" component={Browse} exact />
					<Route path="/syllabus/:courseId" component={Syllabus} exact />
				</Switch>
			</main>
			<Footer />
		</>
	)
}

export default App
