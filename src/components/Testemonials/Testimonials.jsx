import React from 'react'
import { testimonials } from "../../constants"

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <div className="slider">
            <ul>
            {testimonials.map((testimonial, index) => (

                <li>
                    <div className="slide">
                        <div className="userInfo">
                            <img src={testimonial.image} alt="" />
                            <div>
                                <h3>{testimonial.user}</h3>
                                <span>{testimonial.company}</span>
                            </div>
                            <p>
                                {testimonial.text}
                            </p>
                        </div>
                    </div>
                </li>
            ))}
            </ul>
        </div>
      
    </div>
  )
}

export default Testimonials
