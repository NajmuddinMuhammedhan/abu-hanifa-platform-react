import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'

import { Private } from './Components/Router/Route'
import Join from './Components/Pages/Join/Join'
import Login from './Components/Pages/Login/Login'
import Profiles from './Components/Pages/Profiles/Profiles'

import Browse from './Components/Pages/Browse/Browse'
import Syllabus from './Components/Pages/Syllabus/Syllabus'

function App() {
	return (
		<>
			<main>
				<Switch>
					<Route path="/join" component={Join} exact />
					<Route path="/login" component={Login} exact />
					<Private path="/profiles" component={Profiles} exact />
					<Private path="/browse" component={Browse} exact />
					<Private path="/syllabus/:courseId/:subjectId?" component={Syllabus} exact />
				</Switch>
			</main>
		</>
	)
}

export default App
