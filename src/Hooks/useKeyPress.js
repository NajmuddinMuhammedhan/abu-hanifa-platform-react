import { useState, useEffect } from 'react'

function useKeyPress(targetKeyCode, targetKey) {

	const [keyPressed, setKeyPressed] = useState(false)

	useEffect(() => {

		const downHandler = ({ keyCode, key, }) => {
			if ((targetKeyCode && keyCode === targetKeyCode) || (targetKey && key === targetKey)) setKeyPressed(true)
		}

		const upHandler = ({ keyCode, key, }) => {
			if ((targetKeyCode && keyCode === targetKeyCode) || (targetKey && key === targetKey)) setKeyPressed(false)

		}

		window.addEventListener('keydown', downHandler)
		window.addEventListener('keyup', upHandler)

		return () => {
			window.removeEventListener('keydown', downHandler)
			window.removeEventListener('keyup', upHandler)
		}

	}, [
		targetKeyCode,
		targetKey,
	])

	return keyPressed
}

export default useKeyPress
