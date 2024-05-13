import React from "react";
import './body.scss';
import { Route , Routes } from "react-router-dom";
import {API} from './api/API';
import {Invest} from './invest/Invest';
import {Dev} from './dev/Dev';
import {Home} from './home/Home';
import {Login} from './login/Login';
import {Register} from './register/Register';

export const Body = (): JSX.Element => {
    return(
        <div className="body">
                <div className="body_main">
                    <Routes>
                        <Route path='/api' element= {<API/>}/>
                        <Route path='/invest' element= {<Invest/>}/>
                        <Route path='/dev' element= {<Dev/>}/>
                        <Route path='/' element= {<Home/>}/>
                        <Route path='/register' element= {<Register/>}/>
                        <Route path='/login' element= {<Login/>}/>
                    </Routes>
                </div>  
        </div>
    );
};