import React from "react";
import './home.scss';
import imgheader from "../../../img/diagram.png";
import icon from "../../../img/icon.jpeg";
import result1 from "../../../img/result1.jpeg";
import result2 from "../../../img/result2.jpeg";
import kworks from "../../../img/kworks-logo.png";

export const Home = (): JSX.Element => {
    return(
        <div className="home">
            <div className="home__d1">
                <div className="home__d1__main">
                    <div className="home__d1__main__logo">
                         <div className="home__d1__main__logo__icon">
                            <img className="home__d1__main__logo__icon" src={icon} alt="Icon" />
                         </div>
                         <div className="home__d1__main__logo__text">
                            <div className="home__d1__main__logo__text__medusa"> Medusa Trade </div>
                            <div className="home__d1__main__logo__text__info"> AI Powered Trading System </div>
                         </div>
                    </div>
                </div>

                <div className="home__d1__img"></div>
            </div>

            <div className="home__d2">
                <div className="home__d2__title">Your benefits with Medusa AI:</div>
                <div className="home__d2__content">
                    <div className="home__d2__content__r1">
                        <div className="home__d2__content__r1__c1">
                            <div className="home__d2__content__r1__c1__title">
                                Automated Trading
                            </div> 
                            <div className="home__d2__content__r1__c1__p">
                            "No need for manual trading or placing orders; all actions are automated with Medusa AI. All you need to do is watch your investment grow"
                            </div>
                        </div>
                        <div className="home__d2__content__r1__c2">
                            <div className="home__d2__content__r1__c2__title">
                                Passive Income
                            </div> 
                            <div className="home__d2__content__r1__c2__p">
                            "Medusa Trade offers its users a monthly return of 5% or more, resulting in nearly a 100% annual return, powered by its robust and reliable AI"
                            </div>
                        </div>                    
                    </div>
                    <div className="home__d2__content__r2">
                        <div className="home__d2__content__r2__c1">
                            <div className="home__d2__content__r2__c1__title">
                                API Access
                            </div> 
                            <div className="home__d2__content__r2__c1__p">
                            "With the Medusa platform API, you can access Medusa AI outputs, including market predictions and buy/sell orders. These subscription-based data are sent out daily to subscribers at specific times. If you prefer to trade manually, all you need to do is spend a couple of minutes setting your orders"
                            </div>
                        </div>
                        <div className="home__d2__content__r2__c2">
                            <div className="home__d2__content__r2__c2__title">
                                Development Panel
                            </div> 
                            <div className="home__d2__content__r2__c2__p">             
                            "Build your own algorithm easily with both Point-And-Click or coding options. This allows you to edit it faster with data fetching, data preprocessing, backtesting, result visualization, and ready-to-use functions."
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home__d3">
                <div className="home__d3__border"></div>               
                <div className="home__d3__title">How It Works:</div>
                <div className="home__d3__content">
                    <div className="home__d3__content__p">
                        <p className="home__d3__content__p__p">
                        "Medusa's AI-powered algorithm utilizes a search engine to identify the best symbol-model pairs among 12 machine learning models, combined with hundreds of financial instruments. It selects these pairs based on its short-term memory and further refines the selection using a VotingClassifier model trained on pairs stored in its long-term memory"
                        </p>
                    </div>
                    <div className="home__d3__content__results">
                        <img className="home__d3__content__results__result1" src={result1} alt="result1" />
                        <div className="home__d3__content__results__result2">
                           <p className="home__d3__content__results__result2__text">Results:</p>
                           <img className="home__d3__content__results__result2__img" src={result2} alt="result2" />
                        </div>
    
                    </div>
                </div>
            </div>

            <div className="home__sponsors">
                <img className="home__sponsors__kworks" src={kworks} alt="icon" />
            </div>
        </div>
    );
};