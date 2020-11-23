import './Profiles.css'
import { useHistory } from 'react-router-dom'

function Profiles () {

	const { push: route } = useHistory()

	return (
		<>
			<div className="profiles">
				<ul>
					<li>
						<button className="delete">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.667 490.667">
								<path d="M245.333,0C110.059,0,0,110.059,0,245.333s110.059,245.333,245.333,245.333s245.333-110.059,245.333-245.333 S380.608,0,245.333,0z M245.333,469.333c-123.52,0-224-100.48-224-224s100.48-224,224-224s224,100.48,224,224 S368.853,469.333,245.333,469.333z"/>
								<path d="M348.864,333.803l-192-192c-4.16-4.16-10.923-4.16-15.083,0c-4.16,4.16-4.16,10.923,0,15.083l192,192 c2.091,2.069,4.821,3.115,7.552,3.115c2.731,0,5.461-1.045,7.531-3.115C353.024,344.725,353.024,337.963,348.864,333.803z"/>
								<path d="M348.864,141.803c-4.16-4.16-10.923-4.16-15.083,0l-192,192c-4.16,4.16-4.16,10.923,0,15.083 c2.091,2.069,4.821,3.115,7.552,3.115c2.731,0,5.461-1.045,7.531-3.115l192-192C353.024,152.725,353.024,145.963,348.864,141.803z"/>
							</svg>
						</button>
						<button className="profile" onClick={() => route('/browse')}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
								<path d="m249.291 297.807c2.109 1.055 4.409 1.582 6.709 1.582s4.6-.527 6.709-1.582c19.541-9.786 83.291-44.956 83.291-86.807 0-16.538-13.462-30-30-30h-120c-16.538 0-30 13.462-30 30 0 41.851 63.75 77.021 83.291 86.807z"/>
								<path d="m166 90v69.344c8.86-5.167 19.023-8.344 30-8.344h120c10.977 0 21.14 3.177 30 8.344v-69.344c0-49.629-40.371-90-90-90s-90 40.371-90 90z"/>
								<path d="m131.312 313.642c-58.124 11.63-100.312 63.09-100.312 122.358v61c0 8.291 6.709 15 15 15h60.3c3.849-66.167 58.239-121 127.2-121 53.267 0 99.278-43.38 97.02-101.422-18.243 15.125-38.514 27.105-54.379 35.05-6.226 3.12-13.184 4.761-20.142 4.761s-13.916-1.641-20.127-4.746c-16.15-8.091-36.879-20.316-55.371-35.823-1.227 8.99-7.762 16.534-16.86 18.362z"/>
								<path d="m481 497v-61c0-59.268-42.188-110.728-100.312-122.358l-20.751-4.147c-7.966 64.522-63.233 111.505-126.437 111.505-48.636 0-92.309 36.625-96.506 91h329.006c8.291 0 15-6.709 15-15z"/>
							</svg>
							<span>محمد</span>
						</button>
						<button className="edit">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.009 512.009">
								<path d="M496.393,61.679l-46.336-46.315c-20.096-20.117-55.211-20.16-75.413,0L45.79,344.218c-1.301,1.28-2.219,2.859-2.709,4.608 L0.414,498.159c-1.067,3.733-0.043,7.744,2.709,10.475c2.027,2.027,4.757,3.115,7.552,3.115c0.981,0,1.963-0.128,2.944-0.405 l149.333-42.667c1.728-0.491,3.328-1.429,4.608-2.709l328.832-328.832c10.069-10.091,15.616-23.488,15.616-37.717 C512.009,85.167,506.462,71.77,496.393,61.679z M481.31,122.031L154.42,448.922L26.185,485.551l36.651-128.213L389.726,30.447 c12.096-12.096,33.195-12.075,45.248,0l46.336,46.315C493.79,89.242,493.79,109.551,481.31,122.031z"/>
								<path d="M496.393,61.679l-46.336-46.315c-20.096-20.117-55.211-20.16-75.413,0L45.812,344.218c-4.16,4.16-4.16,10.923,0,15.083 c4.16,4.16,10.923,4.16,15.083,0L389.726,30.447c12.096-12.096,33.195-12.075,45.248,0l46.336,46.315 c12.48,12.48,12.48,32.789,0,45.269L152.457,450.885c-4.16,4.16-4.16,10.923,0,15.083c2.091,2.069,4.821,3.115,7.552,3.115 s5.461-1.045,7.552-3.115l328.832-328.853C517.193,116.314,517.193,82.479,496.393,61.679z"/>
								<path d="M167.54,450.885L60.873,344.218c-4.16-4.16-10.923-4.16-15.083,0c-4.16,4.16-4.16,10.923,0,15.083l106.667,106.667 c2.091,2.069,4.821,3.115,7.552,3.115s5.461-1.045,7.531-3.115C171.7,461.807,171.7,455.045,167.54,450.885z"/>
								<path d="M444.873,66.885c-4.16-4.16-10.923-4.16-15.083,0L131.124,365.551c-4.16,4.16-4.16,10.923,0,15.083 c2.091,2.069,4.821,3.115,7.552,3.115s5.461-1.045,7.531-3.115L444.873,81.967C449.033,77.807,449.033,71.044,444.873,66.885z"/>
							</svg>
						</button>
					</li>
					<li>
						<button className="delete">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.667 490.667">
								<path d="M245.333,0C110.059,0,0,110.059,0,245.333s110.059,245.333,245.333,245.333s245.333-110.059,245.333-245.333 S380.608,0,245.333,0z M245.333,469.333c-123.52,0-224-100.48-224-224s100.48-224,224-224s224,100.48,224,224 S368.853,469.333,245.333,469.333z"/>
								<path d="M348.864,333.803l-192-192c-4.16-4.16-10.923-4.16-15.083,0c-4.16,4.16-4.16,10.923,0,15.083l192,192 c2.091,2.069,4.821,3.115,7.552,3.115c2.731,0,5.461-1.045,7.531-3.115C353.024,344.725,353.024,337.963,348.864,333.803z"/>
								<path d="M348.864,141.803c-4.16-4.16-10.923-4.16-15.083,0l-192,192c-4.16,4.16-4.16,10.923,0,15.083 c2.091,2.069,4.821,3.115,7.552,3.115c2.731,0,5.461-1.045,7.531-3.115l192-192C353.024,152.725,353.024,145.963,348.864,141.803z"/>
							</svg>
						</button>
						<button className="profile" onClick={() => route('/browse')}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.008 512.008">
								<path d="m463.872 378.676c-2.401 2.117-5.053 4.012-7.946 5.625-63.977 35.688-130.277 53.784-197.057 53.784-1.076 0-2.146-.004-3.222-.014-65.237-.569-132.018-18.463-198.479-53.184-3.313-1.731-6.33-3.829-9.029-6.217-19.57 27.211-30.135 59.665-30.135 93.669v24.667c0 8.284 6.716 15 15 15h446.001c8.284 0 15-6.716 15-15v-24.667c-.001-34-10.565-66.452-30.133-93.663z"/>
								<path d="m256.004 318.504c14.164 0 32.071-13.215 46.736-34.486 15.819-22.947 25.264-50.906 25.264-74.79 0-17.78-5.073-31.823-15.079-41.738-11.982-11.873-31.133-17.893-56.92-17.893s-44.938 6.02-56.92 17.893c-10.006 9.915-15.08 23.958-15.08 41.738 0 23.884 9.444 51.842 25.264 74.79 14.663 21.271 32.571 34.486 46.735 34.486z"/>
								<path d="m310.966 130.255c-3.058-5.004-6.496-9.46-10.291-13.28-11.516-11.593-26.545-17.471-44.671-17.471s-33.156 5.878-44.671 17.471c-3.795 3.82-7.232 8.276-10.291 13.28 15.118-7.078 33.493-10.658 54.962-10.658 21.468 0 39.844 3.58 54.962 10.658z"/>
								<path d="m71.059 358.299c62.213 32.501 124.408 49.247 184.857 49.774.986.009 1.967.013 2.953.013 61.606 0 122.974-16.811 182.443-49.984 5.744-3.204 8.731-9.777 7.366-16.212-8.242-38.856-16.592-70.555-24.668-101.209-7.984-30.309-16.24-61.649-24.332-99.793-8.327-39.258-24.584-72.983-47.014-97.531-25.918-28.365-59.342-43.357-96.66-43.357-37.081 0-70.26 15.081-95.952 43.613-21.544 23.926-38.011 57.41-47.622 96.834l-49 201.004c-1.633 6.702 1.514 13.654 7.629 16.848zm82.976-155.195c-.574-37.538 8.725-79.801 36.014-107.272 17.354-17.47 39.544-26.328 65.955-26.328s48.602 8.858 65.956 26.329c29.602 29.801 36.044 73.221 36.044 113.395 0 29.73-11.426 64.055-30.564 91.817-20.792 30.161-46.83 47.459-71.436 47.459s-50.644-17.298-71.436-47.459c-20.038-29.068-30.003-63.23-30.533-97.941z"/>
							</svg>
							<span>روبية</span>
						</button>
						<button className="edit">
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
		</>
	)
}

export default Profiles
