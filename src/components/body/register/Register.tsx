import React from "react";
import './register.scss';

export const Register = (): JSX.Element => {
    return(
        <div className="register">
            <div className="register__box">
                 <div className="register__box__title"> REGISTER: </div>
                 <input className="register__box__email" type="text" placeholder="Enter your email ..."/> 
                 <input className="register__box__password" type="text" placeholder="Enter your Password ..."/>
                 <input className="register__box__password" type="text" placeholder="Re-Enter your Password ..."/>
                 <input className="register__box__password" type="text" placeholder="Enter your Phone ..."/>
                 <div className="register__box__button">
                    <button className="register__box__button__register">
                       Register
                    </button>
                 </div>
            </div>
        </div>
    );
};