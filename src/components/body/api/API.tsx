import React from "react";
import './api.scss';

export const API = (): JSX.Element => {
    return(
        <div className="api">
            <div className="api__l1">
                API service will give you esaiest trading experiest ever, all you need is spend you half hour time and just place orders and close all of them 24 hour later.
                API service for institution also can usefull for example they can build their own trading system for example or they can create smart wallets that gives users 70% anual return daily.
                In this case customers will hold their money in institutions wallet so they can esaily spend and buy from their marketplace.
            </div>
            <div className="api__l2">
                <div className="api__l2__plantitle">
                    API Plans:
                </div>
                <div className="api__l2__plans">
                    <div className="api__l2__plans__p1">
                        <div className="api__l2__plans__p1__t">Silver Plan</div>
                        <div className="api__l2__plans__p1__b">Daily Orders</div>
                        <div className="api__l2__plans__p1__b">Instrument Selection</div>
                        <div className="api__l2__plans__p1__b">Live Support</div>
                        <button className="api__l2__plans__p2__btn">
                            Buy
                        </button>
                    </div>
                    <div className="api__l2__plans__p2">
                        <div className="api__l2__plans__p2__t">Gold Plan</div>
                        <div className="api__l2__plans__p2__b">Daily Orders</div>
                        <div className="api__l2__plans__p2__b">Instrument Selection</div>
                        <div className="api__l2__plans__p2__b">Live Support</div>
                        <button className="api__l2__plans__p2__btn">
                            Buy
                        </button>
                    </div>
                    <div className="api__l2__plans__p3">
                        <div className="api__l2__plans__p3__t">Diamond Plan</div>
                        <div className="api__l2__plans__p3__b">Daily Orders</div>
                        <div className="api__l2__plans__p3__b">Instrument Selection</div>
                        <div className="api__l2__plans__p3__b">Live Support</div>
                        <button className="api__l2__plans__p2__btn">
                            Buy
                        </button>
                    </div>
                </div>
            </div>
            <div className="api__l3">
                <div className="api__l3__content">
                    API Out put example:
                </div>
                <div className="api__l3__apioutput">
                        2024/04/02 =
                        'BTC-USD': 'BUY',
                        'XAG-USD': 'SELL',
                        'AAPL': 'BUY',
                        'GOOGL': 'BUY',
                        'META', 'BUY',
                        'CSCO', 'BUY',
                        'NVDA', 'BUY',
                        'AMZN', 'SELL',
                        'TSLA', 'BUY',
                        'JPM', 'SELL',
                        'IBM', 'SELL',
                        'NFLX', 'SELL',
                        'ETH-USD', 'SELL'
                
                </div>
            </div>
        </div>
    );
};


