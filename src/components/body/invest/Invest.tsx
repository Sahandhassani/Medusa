import React from "react";
import './invest.scss';
import { Link } from "react-router-dom";

export const Invest = (): JSX.Element => {

    return (
        <div className="invest">
            <div className="invest__column1">
                <div className="invest__column1__row1">
                    Profits graph
                </div>
                <div className="invest__column1__row2">
                    <div className="invest__column1__row2__row21">
                        Totla asset under managment
                    </div>
                    <div className="invest__column1__row2__row22">
                        <button> Get started</button>
                    </div> 
                </div>
            </div>
            <div className="invest__column2">
                History of transactions
            </div>
        </div>

    );
};