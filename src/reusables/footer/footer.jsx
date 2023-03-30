import React from 'react';
import './footer.css';

const Footer = () => {
    return ( 
        <div className="foot">
            <section className="footer">
                <div className='col-1'>
                    <h3>OUR OBJECTIVE</h3>
                        <p>
                            Our driving objective at E-health Medical Solution is to become a world class hospital, 
                            using cutting edge technology and highly developed human resources to render 
                            excellent medical care/services to the good people globally.
                        </p>
                </div>

                <div className='col-2'>
                        <h3>OUR ASSOCIATES</h3>
                        <ul>
                            <li>Education</li>
                            <li>Research</li>
                            <li>Healthcare Services</li>
                            <li>E-health Foundation</li>
                        </ul>

                        <h4>GET CONNECTED</h4>
                        <div></div>

                </div>
                <div className='col-3'>
                            <h3>WHAT'S NEW?</h3>
                            <h4>How to Prevent Eye Injuries? </h4>
                            <p>
                                People at work are equally at risk of eye injuries as those at home.
                                Fortunately, 90 percent of all eye injuries are preventable. 
                            </p>
                </div>
            </section>
            <section className='sec-two'>
            <div className='foot-text'>
                    <p id='copyright'>
                        Copyright @ {new Date().getFullYear()} E-health Medical Solution Inc. | All Rights Reserved
                         | Terms Of Services | Privacy   
                    </p>
                </div>
            </section>
               
        </div>
     );
}
 
export default Footer;