import './Services.css'
import service1 from '../../assets/profile-pictures/EXPERTISE IMMOBILIER.png'

const Services = () => {
  return (
    <div className='services'>
        <div className="service">
            <img src={service1} alt=''/>
            <div className="caption">
              <p>
                Mise en concordance
              </p>
            </div>
        </div>
    </div>
  )
}

export default Services
