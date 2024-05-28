import React from "react";
import './team.scss';
import profile from "../../../img/prof.jpg";

export const Team = (): JSX.Element => {
    return(
        <div className="team">
            <div className="team__l1">

            </div>
            <div className="team__l2">
                <div className="team__l2__plantitle">
                    OUR TEAM:
                </div>
                <div className="team__l2__team">
  
                    <div className="team__l2__team__p2">
                        
                        <img className="team__l2__team__p2__prof" src={profile} alt="Profile" />
                        
                        <div className="team__l2__team__p2__name">Sahand Hassani</div>
                        <div className="team__l2__team__p2__b">Founder</div>
                        <div className="team__l2__team__p2__b">Email: sahandhassani@gmail.com</div>
                     
                        <div className="team__l2__team__p2__contact">
                        <a className="team__l2__team__p2__contact__linked" href="https://www.linkedin.com/in/sahand-hassani-734922187/">
                             <img className="team__l2__team__p2__contact__linked__img" src="https://www.gawbul.io/images/linkedin.png" alt="LinkedIn" />
                              LinkedIn
                        </a>
                        <a className="team__l2__team__p2__contact__whatsapp" href="http://wa.me/+905057514889">
                             <img className="team__l2__team__p2__contact__whatsapp__img" src="https://www.pngall.com/wp-content/uploads/2016/04/WhatsApp-PNG-Picture.png" alt="Whatsapp" />
                              Whatsapp
                        </a>
                        </div>

                    </div>

                </div>
            
            </div>
        </div>
    );
};


