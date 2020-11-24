import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './Context/Language'
import { ProfileProvider } from './Context/Profile'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<LanguageProvider>
				<ProfileProvider>
					<App />
				</ProfileProvider>
			</LanguageProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)

serviceWorkerRegistration.unregister()

reportWebVitals()
