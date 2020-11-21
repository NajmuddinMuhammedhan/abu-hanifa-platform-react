import './Navigation.css'

function Navigation () {

	return (
		<>
			<nav>
				<div>
					<ul className="menu left">
						<li>
							<button>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
									<path d="m463.09375 406.492188c31.71875-43.519532 48.90625-95.886719 48.90625-150.503907 0-141.480469-114.496094-255.988281-256-255.988281-141.488281 0-256 114.492188-256 255.988281 0 54.601563 17.179688 106.953125 48.878906 150.464844 102.132813-140.484375 311.9375-140.609375 414.214844.039063zm-297.09375-255.5c0-49.621094 40.375-89.996094 90-89.996094s90 40.375 90 89.996094v30c0 49.625-40.375 89.996093-90 89.996093s-90-40.371093-90-89.996093zm0 0"/>
									<path d="m256 240.988281c33.085938 0 60-26.914062 60-59.996093v-30c0-33.082032-26.914062-59.996094-60-59.996094s-60 26.914062-60 59.996094v30c0 33.082031 26.914062 59.996093 60 59.996093zm0 0"/>
									<path d="m68.757812 430.527344c101.289063 108.601562 273.167969 108.683594 374.550782-.074219-89.375-132.792969-284.695313-132.1875-374.550782.074219zm0 0"/>
								</svg>
								<span>Harun</span>
							</button>
							<div>
								<ul>
									<li>
										<button>
											<span>Muhammedhan</span>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.667 490.667">
												<path d="M437.333,0H202.667c-29.397,0-53.333,23.936-53.333,53.333v128c0,5.888,4.779,10.667,10.667,10.667 s10.667-4.779,10.667-10.667v-128c0-17.643,14.357-32,32-32h234.667c17.643,0,32,14.357,32,32v384c0,17.643-14.357,32-32,32 H202.667c-17.643,0-32-14.357-32-32v-128c0-5.888-4.779-10.667-10.667-10.667s-10.667,4.779-10.667,10.667v128 c0,29.397,23.936,53.333,53.333,53.333h234.667c29.397,0,53.333-23.936,53.333-53.333v-384C490.667,23.936,466.731,0,437.333,0z"/>
												<path d="M352,234.667H10.667C4.779,234.667,0,239.445,0,245.333S4.779,256,10.667,256H352c5.888,0,10.667-4.779,10.667-10.667 S357.888,234.667,352,234.667z"/>
												<path d="M359.531,237.824l-64-64c-4.16-4.16-10.923-4.16-15.083,0s-4.16,10.923,0,15.083l56.448,56.448l-56.448,56.448 c-4.16,4.16-4.16,10.923,0,15.083c2.091,2.069,4.821,3.115,7.552,3.115s5.461-1.045,7.531-3.093l64-64 C363.691,248.747,363.691,241.984,359.531,237.824z"/>
											</svg>
										</button>
									</li>
									<li>
										<button disabled={true}>
											<span>Harun</span>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.667 490.667">
												<path d="M437.333,0H202.667c-29.397,0-53.333,23.936-53.333,53.333v128c0,5.888,4.779,10.667,10.667,10.667 s10.667-4.779,10.667-10.667v-128c0-17.643,14.357-32,32-32h234.667c17.643,0,32,14.357,32,32v384c0,17.643-14.357,32-32,32 H202.667c-17.643,0-32-14.357-32-32v-128c0-5.888-4.779-10.667-10.667-10.667s-10.667,4.779-10.667,10.667v128 c0,29.397,23.936,53.333,53.333,53.333h234.667c29.397,0,53.333-23.936,53.333-53.333v-384C490.667,23.936,466.731,0,437.333,0z"/>
												<path d="M352,234.667H10.667C4.779,234.667,0,239.445,0,245.333S4.779,256,10.667,256H352c5.888,0,10.667-4.779,10.667-10.667 S357.888,234.667,352,234.667z"/>
												<path d="M359.531,237.824l-64-64c-4.16-4.16-10.923-4.16-15.083,0s-4.16,10.923,0,15.083l56.448,56.448l-56.448,56.448 c-4.16,4.16-4.16,10.923,0,15.083c2.091,2.069,4.821,3.115,7.552,3.115s5.461-1.045,7.531-3.093l64-64 C363.691,248.747,363.691,241.984,359.531,237.824z"/>
											</svg>
										</button>
									</li>
									<li>
										<button>
											<span>Aisha</span>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.667 490.667">
												<path d="M437.333,0H202.667c-29.397,0-53.333,23.936-53.333,53.333v128c0,5.888,4.779,10.667,10.667,10.667 s10.667-4.779,10.667-10.667v-128c0-17.643,14.357-32,32-32h234.667c17.643,0,32,14.357,32,32v384c0,17.643-14.357,32-32,32 H202.667c-17.643,0-32-14.357-32-32v-128c0-5.888-4.779-10.667-10.667-10.667s-10.667,4.779-10.667,10.667v128 c0,29.397,23.936,53.333,53.333,53.333h234.667c29.397,0,53.333-23.936,53.333-53.333v-384C490.667,23.936,466.731,0,437.333,0z"/>
												<path d="M352,234.667H10.667C4.779,234.667,0,239.445,0,245.333S4.779,256,10.667,256H352c5.888,0,10.667-4.779,10.667-10.667 S357.888,234.667,352,234.667z"/>
												<path d="M359.531,237.824l-64-64c-4.16-4.16-10.923-4.16-15.083,0s-4.16,10.923,0,15.083l56.448,56.448l-56.448,56.448 c-4.16,4.16-4.16,10.923,0,15.083c2.091,2.069,4.821,3.115,7.552,3.115s5.461-1.045,7.531-3.093l64-64 C363.691,248.747,363.691,241.984,359.531,237.824z"/>
											</svg>
										</button>
									</li>
									<li>
										<button className="color-1">
											<span>Oila a'zolar</span>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.009 512.009">
												<path d="M496.393,61.679l-46.336-46.315c-20.096-20.117-55.211-20.16-75.413,0L45.79,344.218c-1.301,1.28-2.219,2.859-2.709,4.608 L0.414,498.159c-1.067,3.733-0.043,7.744,2.709,10.475c2.027,2.027,4.757,3.115,7.552,3.115c0.981,0,1.963-0.128,2.944-0.405 l149.333-42.667c1.728-0.491,3.328-1.429,4.608-2.709l328.832-328.832c10.069-10.091,15.616-23.488,15.616-37.717 C512.009,85.167,506.462,71.77,496.393,61.679z M481.31,122.031L154.42,448.922L26.185,485.551l36.651-128.213L389.726,30.447 c12.096-12.096,33.195-12.075,45.248,0l46.336,46.315C493.79,89.242,493.79,109.551,481.31,122.031z"/>
												<path d="M496.393,61.679l-46.336-46.315c-20.096-20.117-55.211-20.16-75.413,0L45.812,344.218c-4.16,4.16-4.16,10.923,0,15.083 c4.16,4.16,10.923,4.16,15.083,0L389.726,30.447c12.096-12.096,33.195-12.075,45.248,0l46.336,46.315 c12.48,12.48,12.48,32.789,0,45.269L152.457,450.885c-4.16,4.16-4.16,10.923,0,15.083c2.091,2.069,4.821,3.115,7.552,3.115 s5.461-1.045,7.552-3.115l328.832-328.853C517.193,116.314,517.193,82.479,496.393,61.679z"/>
												<path d="M167.54,450.885L60.873,344.218c-4.16-4.16-10.923-4.16-15.083,0c-4.16,4.16-4.16,10.923,0,15.083l106.667,106.667 c2.091,2.069,4.821,3.115,7.552,3.115s5.461-1.045,7.531-3.115C171.7,461.807,171.7,455.045,167.54,450.885z"/>
												<path d="M444.873,66.885c-4.16-4.16-10.923-4.16-15.083,0L131.124,365.551c-4.16,4.16-4.16,10.923,0,15.083 c2.091,2.069,4.821,3.115,7.552,3.115s5.461-1.045,7.531-3.115L444.873,81.967C449.033,77.807,449.033,71.044,444.873,66.885z"/>
											</svg>
										</button>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
				<ul className="menu right">
					<li>
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="-29 0 511 511.99918">
								<path d="m452.5 55.03125c0-30.34375-24.671875-55.03125-54.996094-55.03125h-342.007812c-30.324219 0-54.996094 24.6875-54.996094 55.03125v66.039062h452.039062zm-196 36.023438c-8.285156 0-15-6.71875-15-15.007813s6.714844-15.011719 15-15.011719 15 6.722656 15 15.011719-6.714844 15.007813-15 15.007813zm60 0c-8.285156 0-15-6.71875-15-15.007813s6.714844-15.011719 15-15.011719 15 6.722656 15 15.011719-6.714844 15.007813-15 15.007813zm60 0c-8.285156 0-15-6.71875-15-15.007813s6.714844-15.011719 15-15.011719 15 6.722656 15 15.011719-6.714844 15.007813-15 15.007813zm0 0"/>
								<path d="m452.554688 151.089844h-452.054688v246.148437c0 30.34375 24.671875 55.03125 54.996094 55.03125h28.707031c-31.660156-46.949219-52.699219-112.414062-52.699219-196.9375 0-24.828125 20.1875-45.027343 45-45.027343 37.191406 0 90.511719-9.273438 111.894532-37.621094 15-24.152344 49.046874-28.730469 69.921874-7.796875 22.160157 21.339843 67.148438 45.417969 118.125 45.417969 24.8125 0 45 20.199218 45 45.027343 0 69.105469-13.328124 140.003907-52.457031 196.9375h28.714844c30.410156 0 55.015625-24.628906 55-55.0625zm0 0"/>
								<path d="m376.445312 240.324219c-55.875 0-111.402343-26.007813-139.28125-54.152344-7.300781-7.421875-18.871093-5.410156-23.566406 2.824219-14.332031 22.230468-60 51.328125-137.09375 51.328125-8.28125 0-15 6.71875-15 15.007812 0 169.335938 88.765625 248.730469 163.410156 256.574219 21.496094 2.226562 166.53125-33.6875 166.53125-256.574219 0-8.289062-6.71875-15.007812-15-15.007812zm-87.847656 90.300781-67.625 67.664062c-5.855468 5.863282-15.355468 5.863282-21.210937 0l-35.410157-35.429687c-5.859374-5.859375-5.859374-15.363281 0-21.226563 5.855469-5.859374 15.355469-5.863281 21.210938 0l24.804688 24.820313 57.019531-57.054687c5.859375-5.863282 15.355469-5.863282 21.214843 0 5.855469 5.859374 5.855469 15.363281-.003906 21.226562zm0 0"/>
							</svg>
							<span>Hisob</span>
						</button>
						<div>
							<ul>
								<li>
									<span>najmuddin.muhammedhan@gmail.com</span>
								</li>
								<li>
									<button>
										<span>Sozlamlar</span>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.667 490.667">
											<path d="M488.683,214.617c-1.6-12.437-8.64-23.275-19.307-29.696c-10.496-6.315-23.125-7.509-34.837-3.115 c-9.28,3.456-19.712-1.323-23.936-10.752c-4.971-11.157-11.093-21.824-18.219-31.701c-6.165-8.597-5.013-19.84,2.645-26.155 c9.493-7.808,14.784-19.328,14.571-31.637c-0.256-12.459-6.123-23.979-16.149-31.573c-16.299-12.352-34.091-22.635-52.885-30.549 c-11.627-4.885-24.597-4.245-35.541,1.792c-10.752,5.931-18.069,16.277-20.096,28.373c-1.643,9.856-10.837,16.363-21.44,15.36 c-11.904-1.259-24.341-1.259-36.309,0c-10.645,0.981-19.776-5.504-21.419-15.36c-2.005-12.117-9.344-22.464-20.096-28.373 c-10.944-6.016-23.915-6.677-35.541-1.792c-18.795,7.915-36.587,18.197-52.885,30.549c-10.027,7.595-15.893,19.093-16.149,31.573 c-0.235,12.309,5.077,23.829,14.592,31.68c7.659,6.293,8.789,17.536,2.624,26.112c-7.125,9.899-13.269,20.565-18.219,31.68 c-4.267,9.472-14.805,14.208-24.171,10.688c-11.477-4.309-24.107-3.157-34.624,3.179c-10.667,6.443-17.707,17.259-19.307,29.675 C0.661,224.708,0,235.055,0,245.337c0,10.283,0.661,20.629,1.984,30.72c1.6,12.437,8.64,23.275,19.307,29.696 c10.496,6.336,23.147,7.531,34.837,3.115c9.301-3.477,19.733,1.323,23.936,10.752c4.971,11.157,11.093,21.824,18.219,31.701 c6.165,8.597,5.013,19.84-2.645,26.155c-9.493,7.808-14.784,19.328-14.571,31.637c0.256,12.459,6.123,23.979,16.149,31.573 c16.299,12.352,34.091,22.635,52.885,30.549c5.163,2.155,10.581,3.243,15.979,3.243c6.763,0,13.483-1.685,19.563-5.056 c10.752-5.931,18.069-16.277,20.096-28.373c1.643-9.856,10.795-16.448,21.44-15.36c11.904,1.259,24.341,1.259,36.309,0 c10.581-1.109,19.776,5.504,21.419,15.36c2.005,12.117,9.344,22.464,20.096,28.373c10.944,6.016,23.915,6.677,35.541,1.792 c18.795-7.915,36.587-18.197,52.885-30.549c10.027-7.595,15.893-19.093,16.149-31.573c0.213-12.309-5.099-23.829-14.592-31.659 c-7.659-6.293-8.789-17.536-2.624-26.112c7.125-9.899,13.269-20.565,18.219-31.68c4.245-9.451,14.656-14.251,23.957-10.773 l3.733-9.984l-3.52,10.069c11.52,4.352,24.107,3.179,34.624-3.179c10.667-6.443,17.707-17.259,19.307-29.675 c1.323-10.133,1.984-20.48,1.984-30.763C490.667,235.055,490.005,224.708,488.683,214.617z M467.541,273.369 c-0.747,5.931-4.117,11.072-9.173,14.123c-4.864,2.944-10.731,3.477-16.213,1.451l-0.192-0.064 c-19.584-7.317-41.984,2.347-50.859,22.059c-4.373,9.813-9.771,19.2-16.064,27.947c-12.779,17.835-10.027,41.493,6.443,55.061 c4.416,3.627,6.869,9.003,6.763,14.72c-0.128,5.931-2.901,11.413-7.68,15.019c-14.912,11.285-31.125,20.672-48.299,27.883 c-5.547,2.325-11.755,2.048-16.96-0.832c-5.077-2.795-8.384-7.488-9.344-13.205c-3.52-21.12-22.613-35.243-44.693-33.045 c-10.496,1.088-21.397,1.088-31.851,0c-22.08-2.432-41.195,11.883-44.715,33.045c-0.939,5.717-4.267,10.411-9.344,13.205 c-5.205,2.901-11.413,3.179-16.96,0.832c-17.173-7.211-33.408-16.597-48.299-27.883c-4.757-3.605-7.552-9.088-7.68-14.997 c-0.107-5.717,2.368-11.093,6.784-14.741c16.469-13.568,19.221-37.227,6.421-55.061c-6.293-8.747-11.691-18.133-16.085-27.968 c-6.805-15.211-21.696-24.448-37.269-24.448c-4.629,0-9.301,0.811-13.845,2.496c-5.355,2.027-11.221,1.472-16.107-1.472 c-5.077-3.051-8.427-8.192-9.173-14.144c-1.216-9.216-1.813-18.645-1.813-28.011c0-9.365,0.597-18.795,1.813-28.053 c0.747-5.931,4.117-11.072,9.173-14.123c4.843-2.923,10.709-3.499,16.341-1.387c19.712,7.36,42.048-2.304,50.901-22.037 c4.373-9.813,9.771-19.2,16.064-27.947c12.8-17.835,10.048-41.515-6.443-55.061c-4.416-3.627-6.869-9.003-6.763-14.72 c0.128-5.931,2.923-11.392,7.68-15.019c14.891-11.285,31.125-20.672,48.299-27.883c5.547-2.347,11.755-2.069,16.96,0.811 c5.077,2.795,8.384,7.488,9.344,13.205c3.541,21.141,22.741,35.371,44.693,33.088c10.496-1.088,21.397-1.088,31.851,0 c22.059,2.261,41.195-11.904,44.715-33.045c0.939-5.717,4.267-10.411,9.344-13.205c5.205-2.901,11.413-3.179,16.96-0.832 c17.173,7.211,33.408,16.597,48.299,27.883c4.757,3.605,7.552,9.088,7.68,14.997c0.107,5.717-2.368,11.093-6.784,14.741 c-16.469,13.568-19.221,37.227-6.421,55.061c6.293,8.747,11.691,18.133,16.085,27.968c8.832,19.733,31.168,29.355,51.115,21.931 c5.333-2.048,11.221-1.472,16.107,1.472c5.077,3.051,8.427,8.192,9.173,14.144c1.216,9.216,1.813,18.645,1.813,28.011 C469.333,254.703,468.736,264.132,467.541,273.369z"/>
											<path d="M245.333,149.337c-52.928,0-96,43.072-96,96c0,52.928,43.072,96,96,96c52.928,0,96-43.072,96-96 C341.333,192.409,298.261,149.337,245.333,149.337z M245.333,320.004c-41.173,0-74.667-33.493-74.667-74.667 s33.493-74.667,74.667-74.667S320,204.164,320,245.337S286.507,320.004,245.333,320.004z"/>
										</svg>
									</button>
								</li>
								<li>
									<button className="color-1">
										<span>Chiqish</span>
									</button>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Navigation
