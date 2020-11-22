import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './Context/Language'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<LanguageProvider>
				<App />
			</LanguageProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)

serviceWorkerRegistration.unregister()

reportWebVitals()
