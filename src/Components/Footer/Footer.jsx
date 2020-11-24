import './Footer.css'
import useLanguage from '../../Hooks/useLanguage'
import TEXT from '../Localization'

function Footer () {

	const [lang] = useLanguage()

	return (
		<footer>
			<p>{TEXT[lang].common.name}</p>
		</footer>
	)
}

export default Footer
