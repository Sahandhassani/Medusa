import React from "react";
import './login.scss';
import {Link} from "react-router-dom";

export const Login = (): JSX.Element => {
    return(
        <div className="login">
            <div className="login__box">
                 <div className="login__box__title"> LOGIN: </div>
                 <input className="login__box__email" type="text" placeholder="Enter your email ..."/> 
                 <input className="login__box__password" type="text" placeholder="Enter your Password ..."/>
                 <div className="login__box__button">
                    <button className="login__box__button__login">Login</button>
                    <button className="login__box__button__login">
                        <Link className="login__box__button__login__link" to={'/register'}>Register</Link>
                    </button>
                 </div>
            </div>
        </div>
    );
};