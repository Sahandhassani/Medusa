import React, {useRef ,useState} from "react";
import './header.scss';
import {Link} from "react-router-dom";
import { Modal } from '../../components/modal/Modal';
import { useGlobalState } from "../../hooks/useGlobalState";
import { useClickAway } from "react-use";

window.onscroll = function() { stickyHeader() };
const header = document.getElementById("stickyHeader");

function stickyHeader() {
  if (header) {
    const sticky = header.offsetTop;
    if (window.pageYOffset >= sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
}

enum UserStatus {
  authenticated = 'AUTHENTICATED',
  notAuthenticated = 'NOT_AUTHENTICATED'
}

export const Header = (): JSX.Element => {
    const { setShowModal , showModal , setErrorOccured} = useGlobalState();
    const ref = useRef(null);
    const [userIsLogged, setUserIsLogged] = useState<UserStatus>(UserStatus.notAuthenticated);
    const handleAuth = (value: UserStatus): void => {
      setUserIsLogged(value);
    };
    useClickAway(ref , ()=> {
      setShowModal(false);
    });
    

    return(
      <>
        <div className="header">
            <div className="header__menu">   
             <Link className="header__menu__api" to={'/team'}>OUR TEAM</Link>
             <Link className="header__menu__invest" to={'/invest'}>INVESTMENT</Link>
             <Link className="header__menu__dev" to={'/dev'}>CONTACT US</Link>   
            </div>
            <div>
             <Link className="header__home" to={'/'}>Home</Link>
            </div>

            {/* {userIsLogged === UserStatus.authenticated ? (
            <div className="header__profile" onClick={() => setShowModal(true)}>
             Profile
            </div>
            ):(
            <div>
             <Link className="header__login" to={'/login'} onClick={() => handleAuth(UserStatus.authenticated)}>Login</Link>
            </div>
            )}   */}
        </div>

        {showModal && (
          <Modal ref={ref}>
              <div className="modalp">
                <div className="modalp__profile">
                  <div className="modalp__profile__info">
                    <div className="modalp__profile__info__picture">
                      
                    </div>
                    <div className="modalp__profile__info__name">
                      Sahand Hassani
                    </div>
                    <button className="modalp__profile__info__btns__logout" onClick={() => handleAuth(UserStatus.notAuthenticated)}>Logout</button>
                    <div className="modalp__profile__info__type">
                      Account Type: Personal
                    </div>
                  </div>
                  <div className="modalp__profile__investment">
                    <div className="modalp__profile__investment__numbers">
                       <div className="modalp__profile__investment__numbers__balance">
                          Your Balance:  10483$ 
                       </div>
                       <div className="modalp__profile__investment__numbers__deposite">
                          Your Deposite:  10000$
                       </div>
                    </div>
                    <div className="modalp__profile__investment__graf">
                    
                    </div>
                    <div className="modalp__profile__investment__btns">
                        <button className="modalp__profile__investment__btns__deposite">Deposite</button>
                        <button className="modalp__profile__investment__btns__withdraw">Withdraw</button>
                    </div>
                  </div>
                </div>
              </div>
          </Modal>
        )}
      </> 
    );
};