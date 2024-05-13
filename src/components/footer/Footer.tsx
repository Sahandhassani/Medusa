import React from "react";
import './footer.scss';
import {Link} from "react-router-dom";

export const Footer = (): JSX.Element => {
    return(
        <div className="footer">

            <div className="footer__copyright">
                <p className="footer__copyright-p">
                    &copy; 2024 All Rights Reserved by <span className="footer__copyright-p__span">   MedusaTrade.com</span>
                </p>
            </div>
            <div className="footer__links">
                <a href="https://instagram.com" className="footer__link">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="" className="footer__link__img" />
                    Instagram
                </a>
                <a href="https://facebook.com" className="footer__link">
                    <img src="https://cdn-icons-png.flaticon.com/512/2504/2504903.png" alt="" className="footer__link__img" />
                    Facebook
                </a>
            </div>
        </div>
    );
};