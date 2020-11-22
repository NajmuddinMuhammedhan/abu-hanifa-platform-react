import { useRef, useState, useEffect } from 'react'
import './Syllabus.css'

function Syllabus () {

	const subjectsRef = useRef()
	const [index, setIndex] = useState(0)
	const count = 1

	useEffect(() => {
		subjectsRef.current.style.setProperty('--move-s', (index * 100) + '%')
		
		if (-(count - 1) > index) {
			setIndex(0)
		}

		if (index > 0) {
			setIndex(-(count - 1))
		}

	}, [
		index,
		count,
	])

	return (
		<div className="syllabus">
			<h1 className="courseName">التمويل الإسلامي</h1>
			<div ref={subjectsRef} className="subjects">
				<ul>
					<li>
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
								<polygon points="363.266,211.569 363.266,148.734 300.432,148.734 256,104.303 211.57,148.734 148.735,148.734 148.735,211.569 104.303,256 148.735,300.431 148.735,363.266 211.57,363.266 256,407.697 300.432,363.266 363.266,363.266 363.266,300.431 407.698,256"/>
								<path d="M437.021,181.019V74.98H330.982L256,0l-74.981,74.98H74.982v106.038L0,256l74.98,74.981V437.02h106.038L256,512.001 l74.981-74.981h106.039V330.981L512,256L437.021,181.019z M393.266,312.856v80.409h-80.409L256,450.124l-56.856-56.858h-80.409 v-80.409L61.876,256l56.858-56.856v-80.409h80.409L256,61.876l56.856,56.858h80.409v80.409L450.125,256L393.266,312.856z"/>
							</svg>
							<span>اللغة العربية</span>
						</button>
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
			<ul className="lectures">
				<li>
					<button>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path d="M384,213.333H128c-29.419,0-53.333,23.936-53.333,53.333v192C74.667,488.064,98.581,512,128,512h256 c29.419,0,53.333-23.936,53.333-53.333v-192C437.333,237.269,413.419,213.333,384,213.333z M416,458.667c0,17.643-14.357,32-32,32 H128c-17.643,0-32-14.357-32-32v-192c0-17.643,14.357-32,32-32h256c17.643,0,32,14.357,32,32V458.667z"/>
							<path d="M384,213.333H138.667v-74.667c0-64.704,52.651-117.333,117.333-117.333s117.333,52.629,117.333,117.333 c0,5.888,4.779,10.667,10.667,10.667c5.888,0,10.667-4.779,10.667-10.667C394.667,62.208,332.459,0,256,0 S117.333,62.208,117.333,138.667V224c0,5.888,4.779,10.667,10.667,10.667h256c5.888,0,10.667-4.779,10.667-10.667 S389.888,213.333,384,213.333z"/>
							<path d="M256,362.667c-5.888,0-10.667,4.779-10.667,10.667v64c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667v-64 C266.667,367.445,261.888,362.667,256,362.667z"/>
							<path d="M256,277.333c-29.419,0-53.333,23.936-53.333,53.333S226.581,384,256,384c29.419,0,53.333-23.936,53.333-53.333 S285.419,277.333,256,277.333z M256,362.667c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32c17.643,0,32,14.357,32,32 C288,348.309,273.643,362.667,256,362.667z"/>
						</svg>
						<span>الحروف الهجائية</span>
					</button>
				</li>
				<li>
					<button disabled={true}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path d="M384,213.333H128c-29.419,0-53.333,23.936-53.333,53.333v192C74.667,488.064,98.581,512,128,512h256 c29.419,0,53.333-23.936,53.333-53.333v-192C437.333,237.269,413.419,213.333,384,213.333z M416,458.667c0,17.643-14.357,32-32,32 H128c-17.643,0-32-14.357-32-32v-192c0-17.643,14.357-32,32-32h256c17.643,0,32,14.357,32,32V458.667z"/>
							<path d="M384,213.333H138.667v-74.667c0-64.704,52.651-117.333,117.333-117.333s117.333,52.629,117.333,117.333 c0,5.888,4.779,10.667,10.667,10.667c5.888,0,10.667-4.779,10.667-10.667C394.667,62.208,332.459,0,256,0 S117.333,62.208,117.333,138.667V224c0,5.888,4.779,10.667,10.667,10.667h256c5.888,0,10.667-4.779,10.667-10.667 S389.888,213.333,384,213.333z"/>
							<path d="M256,362.667c-5.888,0-10.667,4.779-10.667,10.667v64c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667v-64 C266.667,367.445,261.888,362.667,256,362.667z"/>
							<path d="M256,277.333c-29.419,0-53.333,23.936-53.333,53.333S226.581,384,256,384c29.419,0,53.333-23.936,53.333-53.333 S285.419,277.333,256,277.333z M256,362.667c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32c17.643,0,32,14.357,32,32 C288,348.309,273.643,362.667,256,362.667z"/>
						</svg>
						<span>القواعد النحوية</span>
					</button>
				</li>
				<li>
					<button disabled={true}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path d="M384,213.333H128c-29.419,0-53.333,23.936-53.333,53.333v192C74.667,488.064,98.581,512,128,512h256 c29.419,0,53.333-23.936,53.333-53.333v-192C437.333,237.269,413.419,213.333,384,213.333z M416,458.667c0,17.643-14.357,32-32,32 H128c-17.643,0-32-14.357-32-32v-192c0-17.643,14.357-32,32-32h256c17.643,0,32,14.357,32,32V458.667z"/>
							<path d="M256,0c-76.459,0-138.667,62.208-138.667,138.667V224c0,5.888,4.779,10.667,10.667,10.667h256 c5.888,0,10.667-4.779,10.667-10.667v-85.333C394.667,62.208,332.459,0,256,0z M373.333,213.333H138.667v-74.667 c0-64.704,52.651-117.333,117.333-117.333s117.333,52.629,117.333,117.333V213.333z"/>
							<path d="M256,362.667c-5.888,0-10.667,4.779-10.667,10.667v64c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667v-64 C266.667,367.445,261.888,362.667,256,362.667z"/>
							<path d="M256,277.333c-29.419,0-53.333,23.936-53.333,53.333S226.581,384,256,384c29.419,0,53.333-23.936,53.333-53.333 S285.419,277.333,256,277.333z M256,362.667c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32c17.643,0,32,14.357,32,32 C288,348.309,273.643,362.667,256,362.667z"/>
						</svg>
						<span>قواعد التجويد</span>
					</button>
				</li>
			</ul>
		</div>
	)
}

export default Syllabus
