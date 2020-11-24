import { createContext, useState, useEffect } from 'react'

export const ProfileContext = createContext()

export function ProfileProvider ({ children }) {

	const [profile, setProfile] = useState(JSON.parse(window.localStorage.getItem('__profile')))

	useEffect(() => {
		if (profile) {
			window.localStorage.setItem('__profile', JSON.stringify(profile))
		}
		else {
			window.localStorage.removeItem('__profile')
		}
	}, [
		profile,
	])

	return (
		<ProfileContext.Provider value={{ profile, setProfile }}>
		{
			children
		}
		</ProfileContext.Provider>
	)
}
