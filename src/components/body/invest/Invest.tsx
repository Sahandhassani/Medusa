import React from "react";
import './invest.scss';
import { Link } from "react-router-dom";
import scroller from "../../../img/top-arrow-icon.jpg";
import aiwallet from "../../../img/AIwallet.jpeg";
import aicopyfx from "../../../img/CopyfxAI.jpeg";

export const Invest = (): JSX.Element => {

    return (
        <div className="invest">
        <div className="invest__r1">
            <div className="invest__r1__column1">
                <div className="invest__r1__column1__row1">

                    <a href="https://www.copyfx.com/ratings/rating-all/show/347019">
                      <img className="invest__r1__column1__row1__pergraf" src="https://my.roboforex.com/en/informers/providers/performance/347019.png" alt="RoboForex Performance" />
                    </a>
                   
                </div>
                <div className="invest__r1__column1__row2">
                    <div className="invest__r1__column1__row2__row21">
                     
                      <a href="https://www.copyfx.com/ratings/rating-all/show/347019">
                        <img className="invest__r1__column1__row2__row21__rating" src="https://my.roboforex.com/en/informers/providers/medium/347019.png" alt="RoboForex Performance" />
                      </a>
                     
                    </div>
                    <div className="invest__r1__column1__row2__row22">
                         <p className="invest__r1__column1__row2__row22__scrolltxt">Scroll</p>
                         <img className="invest__r1__column1__row2__row22__scroll" src={scroller} alt="scroller" />
                    </div> 
                </div>
            </div>
            <div className="invest__r1__column2">
        
              <a href="https://www.copyfx.com/ratings/rating-all/show/347019">
                <img className="invest__r1__column2__narrow" src="https://my.roboforex.com/en/informers/providers/narrow/347019.png" alt="RoboForex Performance" />
              </a>

              <a href="https://my.roboforex.com/en/register-copyfx/?trader=347019">
                <img className="invest__r1__column2__narrowbtn" src="https://my.roboforex.com/en/informers/providers/narrow-invest/347019.png" alt="RoboForex Performance - Invest" />
              </a>
      
            </div>
        </div>

        <div className="invest__r2">
            
        </div>

        <div className="invest__r3">
            <div className="invest__r3__col1">
              <div className="invest__r3__titles">
                 CopyFX
              </div>
              <div className="invest__r3__info">
                 You want to earn money on the Forex market, but do not want to delve into the intricacies of financial operations, or simply do not have sufficient experience to trade by yourself. CopyFX offers you an opportunity to work with experienced Traders and copy their orders to your account.
              </div>
              <div className="invest__r3__info2">
                HOW TO BECOME AN INVESTOR IN COPYFX:
                <br />
                1- You open a trading account and deposit funds to it.
                <br />
                2- The Investor subscribes to the Trader’s account.
                <br />
                3- The transactions from the Trader’s account are copied to the Investor’s one.
                <br />
                4- The Trader receives his/her commission (this step is not applicable for Traders without commission).
                <br />
                5- The profit made during the period of the offer (minus the commission transferred to the Trader’s account) remains on the Investor’s account.
                <div className="invest__r3__images">
                  <img className="invest__r3__images__1" src={aicopyfx} alt="CopyFx" />
                </div>
               </div>
               <Link className="invest__r3__btn" to="https://www.copyfx.com/ratings/rating-all/show/347019">
                 CopyFX Link
               </Link>
            </div>

            <div className="invest__r3__col2">
              <div className="invest__r3__titles">
                 Invest
              </div>  
              <div className="invest__r3__info">
                Introducing the MedusaTrade investment plan – an innovative solution designed to empower users with effortless investment opportunities and consistent returns. With the MedusaTrade investment plan, users can enjoy a hassle-free approach to growing their wealth, benefiting from a guaranteed 5% return on investment (ROI) each month.
              </div>    

              <div className="invest__r3__info3">
                <div className="invest__r3__images2">
                 <img className="invest__r3__images2__2" src={aiwallet} alt="wallet" />
                </div>  
                Unlike traditional investment avenues that require active participation and decision-making from users, the MedusaTrade investment plan simplifies the entire investment process. Users can sit back and relax as their investments work for them, without the need for constant monitoring or intervention.
                <br />
                <br />
                The key advantage of the MedusaTrade investment plan lies in its advanced AI-driven approach. Medusa AI handles all aspects of trading on behalf of users, from market analysis and price action evaluation to order placement, risk management, and profit-taking strategies. Leveraging cutting-edge technology and sophisticated algorithms, Medusa AI ensures optimal performance and profitability in the ever-changing financial markets. 
              </div>    
              <div className="invest__r3__info">
                The MedusaTrade investment plan offers a seamless and transparent investment experience, enabling users to achieve their financial goals with ease. Whether saving for retirement, building wealth, or diversifying their investment portfolio, users can trust MedusaTrade to deliver consistent returns and maximize their investment potential. Join the MedusaTrade investment plan today and let your money work smarter for you.
              </div>  
              <Link className="invest__r3__btn" to="">
                 Deposit
              </Link>
            </div>     
        </div>
        </div>
    );
};