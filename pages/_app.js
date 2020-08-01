import 'styles/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faArrowUp, faArrowRight, faArrowDown, faArrowLeft, faTrophy, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faStar, faArrowUp, faArrowRight, faArrowDown, faArrowLeft, faTrophy, faGithub, faMobileAlt)

export default function MyApp ({ Component, pageProps }) {
  return <Component {...pageProps} />
}
