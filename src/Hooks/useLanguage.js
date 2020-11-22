import { useContext } from 'react'
import { LanguageContext } from '../Context/Language'

export default function useLanguage(setterOnly) {

	const { language, setLanguage } = useContext(LanguageContext)

	return setterOnly ? [setLanguage] : [language, setLanguage]
}
