import { Route, useLocation, Redirect } from 'react-router-dom'
import useProfile from '../../Hooks/useProfile'

export function Private ({ ...props }) {

	const { pathname } = useLocation()
	const [profile] = useProfile()

	if (pathname !== '/profiles' && !profile) return <Redirect to="/profiles" />

	return (
		<Route {...props}/>
	)
}
