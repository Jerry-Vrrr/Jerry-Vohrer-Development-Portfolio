
import '../styles/AquaModal.scss'
import github from '../github.png'
import play from '../play.png'
import linked from '../linked.png'

export default function AquaModal() {

  return (
    <div>
        <div className='modal-content'>
        <h1 className='modal-title' >Aquatic Dreams</h1>
        <p>A bespoke Point of Sale, E-Commerce, inventory & appointment scheduling application I tailored specifically for the needs of a client utilizing Ruby on Rails, Bootstrap for styling including Stripe for payments & Authorization Zero for Auth, login and sessions. Completed in about 150 hours over a 6 week period. This application is currently in its... Beta phase...</p>
        </div>
        <div className='modal-links'>
            <a href="https://aqua-modal.herokuapp.com/" target="_blank" ><img src={github}></img></a>
            <a href="https://docs.google.com/presentation/d/1VcJ3kRlQ5d4uZ7y0V5Lm5yZ6J9lX3JZ4b5Bb9XrJr5k/edit?usp=sharing" target="_blank" ><img src={play}></img></a>
            <a href="https://www.linkedin.com/in/jerry-vohrer/" target="_blank"><img src={linked}></img></a>
        </div>
        </div>
  )
}
