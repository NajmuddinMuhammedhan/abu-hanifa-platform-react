import { useRef, useState, useEffect } from 'react'
import './Browse.css'

function Browse () {

	const browseRef = useRef()
	const [index, setIndex] = useState(0)
	const [width, setWidth] = useState(window.innerWidth > 960 ? 25 : 50)
	const items = 100 / width | 0
	const count = 10

	const resize = e => e.target.innerWidth > 960 ? setWidth(25) : setWidth(50)

	useEffect(() => {

		window.addEventListener('resize', resize)
		return () => {
			window.removeEventListener('resize', resize)
		}

	}, [])

	useEffect(() => {
		browseRef.current.style.setProperty('--width', width + 'vw')
	}, [
		width,
	])

	useEffect(() => {
		browseRef.current.style.setProperty('--move', (index * width) + 'vw')
		if (-(count - items) > index) {
			setIndex(0)
		}

		if (index > 0) {
			setIndex(-(count - items))
		}
	}, [
		index,
		count,
		items,
		width,
	])

	return (
		<>
			<div ref={browseRef} className="browse">
				<ul>
					<li>
						<div>1</div>
					</li>
					<li>
						<div>2</div>
					</li>
					<li>
						<div>3</div>
					</li>
					<li>
						<div>4</div>
					</li>
					<li>
						<div>5</div>
					</li>
					<li>
						<div>6</div>
					</li>
					<li>
						<div>7</div>
					</li>
					<li>
						<div>8</div>
					</li>
					<li>
						<div>9</div>
					</li>
					<li>
						<div>10</div>
					</li>
				</ul>
				<button className="left" onClick={() => setIndex(index + 1)}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
						<path d="M501.339,245.328H10.672c-5.888,0-10.667,4.779-10.667,10.667s4.779,10.667,10.667,10.667h490.667 c5.888,0,10.667-4.779,10.667-10.667S507.227,245.328,501.339,245.328z"/>
						<path d="M188.869,419.131L18.203,248.464c-4.16-4.16-10.923-4.16-15.083,0c-4.16,4.16-4.16,10.923,0,15.083l170.667,170.667 c2.091,2.069,4.821,3.115,7.552,3.115c2.731,0,5.461-1.045,7.531-3.115C193.029,430.053,193.029,423.291,188.869,419.131z"/>
						<path d="M188.869,77.797c-4.16-4.16-10.923-4.16-15.083,0L3.12,248.464c-4.16,4.16-4.16,10.923,0,15.083 c2.091,2.069,4.821,3.115,7.552,3.115c2.731,0,5.461-1.045,7.531-3.115L188.869,92.88 C193.029,88.72,193.029,81.957,188.869,77.797z"/>
					</svg>
				</button>
				<button className="right" onClick={() => setIndex(index - 1)}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path d="M501.333,245.325H10.667C4.779,245.325,0,250.104,0,255.992s4.779,10.667,10.667,10.667h490.667 c5.888,0,10.667-4.779,10.667-10.667S507.221,245.325,501.333,245.325z"/>
						<path d="M508.864,248.461L338.197,77.795c-4.16-4.16-10.923-4.16-15.083,0c-4.16,4.16-4.16,10.923,0,15.083l170.667,170.667 c2.091,2.069,4.821,3.115,7.552,3.115c2.731,0,5.461-1.045,7.531-3.115C513.024,259.384,513.024,252.621,508.864,248.461z"/>
						<path d="M508.864,248.461c-4.16-4.16-10.923-4.16-15.083,0L323.115,419.128c-4.16,4.16-4.16,10.923,0,15.083 c2.091,2.069,4.821,3.115,7.552,3.115c2.731,0,5.461-1.045,7.531-3.115l170.667-170.667 C513.024,259.384,513.024,252.621,508.864,248.461z"/>
					</svg>
				</button>
			</div>
		</>
	)
}

export default Browse
