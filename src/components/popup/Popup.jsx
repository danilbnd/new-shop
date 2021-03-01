import React from "react";
import './popup-style.scss';

function Popup() {
    return (
        <section className="ba-section">
            <img src="../assets/img/ba-bgr.jpg" alt=""/>
            <div className="ba-container">
                <div className="ba-container-form">
                    <div className="ba-form__title">

                        <a href="#" className="ba-container-form__title">
                            <h4>Sign in</h4>
                        </a>

                        <a href="#" className="ba-container-form__title">
                            <h4>Join us</h4>
                        </a>

                    </div>
                    <form action="#" method="get" className="ba-contact-form">
                        <div className="ba-label">
                            <label className="ba-label ba-label--name" htmlFor="username">Username</label>
                            <input required className="ba-label__input" type="text" name="username" id="username"
                                   placeholder="Username" />
                        </div>
                        <div className="ba-label">
                            <label className="ba-float-label" htmlFor="password">Password</label>
                            <input required className="ba-label__input" type="password" name="password" id="password"
                                   placeholder="Password" />
                        </div>
                        <div className="ba-label ba-label--indent">
                            <input className="ba-label__сheckbox" type="checkbox" name="checkbox" id="checkbox" />
                                <label className="ba-label ba-label--letter" htmlFor="checkbox">Keep me signed
                                    in</label>
                        </div>
                        <div className="ba-form__button">
                            <button type="submit" className="ba-button">
                                Sing in
                            </button>
                        </div>

                        <div className="ba-form-bottom">
                            <a href="#" className="ba-form-bottom__link">Forgot password</a>
                            <a href="#" className="ba-form-bottom__link">Create on account</a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
)
}

export default Popup;