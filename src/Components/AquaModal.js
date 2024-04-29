
import '../styles/AquaModal.scss'
import github from '../github.png'
import play from '../play.png'
import linked from '../linked.png'
export default function AquaModal() {

  return (
    <div >
        <div className='modal-content'>
        <h1 className='modal-title' >Eelvis's Aquarium Supply & Maintenance</h1>
        <p>A bespoke Point of Sale, inventory, and appointment scheduling application I tailored specifically for a client utilizing Ruby on Rails with a dash of Bootstrap for that chic styling. This was completed in about 150 hours over a 6 week period. Now, a little confession... 'Eelvis' isn't the real name of the company; I coined it to shield the true identity. Also, I couldn't resist the charm of picturing Eelvis takin care of business, making all the guppies swoon. Kindly note, this application is currently in its... Beta phase... Yes, pun intended!.</p>
        </div>
        <div className='modal-links'>
            <a href="https://aqua-modal.herokuapp.com/" target="_blank" ><img src={github}></img></a>
            <a href="https://docs.google.com/presentation/d/1VcJ3kRlQ5d4uZ7y0V5Lm5yZ6J9lX3JZ4b5Bb9XrJr5k/edit?usp=sharing" target="_blank" ><img src={play}></img></a>
            <a href="https://www.linkedin.com/in/jerry-vohrer/" target="_blank"><img src={linked}></img></a>
        </div>
        </div>
  )
}
