import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'

import { Private } from './Components/Router/Route'
import Join from './Components/Pages/Join/Join'
import Login from './Components/Pages/Login/Login'
import Profiles from './Components/Pages/Profiles/Profiles'

import Browse from './Components/Pages/Browse/Browse'
import School from './Components/Pages/School/School'
import Syllabus from './Components/Pages/Syllabus/Syllabus'

function App() {
	return (
		<>
			<svg aria-hidden="true" focusable="false" style={{width: 0, height: 0, position: 'absolute'}}>
				<linearGradient id="gradient-horizontal">
					<stop offset="0%" stopColor="#028796"></stop>
					<stop offset="100%" stopColor="#d5b03f"></stop>
				</linearGradient>
				<linearGradient id="gradient-vertical" x2="0" y2="1">
					<stop offset="0%" stopColor="#028796"></stop>
					<stop offset="100%" stopColor="#d5b03f"></stop>
				</linearGradient>
			</svg>
			<main>
				<Switch>
					<Route path="/join" component={Join} exact />
					<Route path="/login" component={Login} exact />
					<Private path="/profiles" component={Profiles} exact />

					<Private path="/browse" component={Browse} exact />
					<Private path="/school" component={School} exact />

					<Private path="/syllabus/:courseId/:subjectId?" component={Syllabus} exact />
				</Switch>
			</main>
		</>
	)
}

export default App
