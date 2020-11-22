import { createContext, useState, useEffect } from 'react'

export const LanguageContext = createContext()

export function LanguageProvider ({ children }) {

	const [language, setLanguage] = useState(window.localStorage.getItem('__lang') || 'tr')

	useEffect(() => {
		if (language) {
			window.localStorage.setItem('__lang', language)
		}
		else {
			window.localStorage.removeItem('__lang')
		}
	}, [
		language,
	])

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
		{
			children
		}
		</LanguageContext.Provider>
	)
}
