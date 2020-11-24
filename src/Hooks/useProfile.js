import { useContext } from 'react'
import { ProfileContext } from '../Context/Profile'

export default function useProfile(setterOnly) {

	const { profile, setProfile } = useContext(ProfileContext)

	return setterOnly ? [setProfile] : [profile, setProfile]
}
