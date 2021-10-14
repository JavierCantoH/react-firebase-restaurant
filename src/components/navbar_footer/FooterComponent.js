import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">             
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/aboutus">About Us</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/favorites">Favorites</Link></li>
                            <li><Link to="/contactus">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                        C. 16 de Septiembre<br />
                        Centro histórico de Puebla<br />
                        72000 Puebla, Pue.<br />
                        <i className="fa fa-phone fa-lg"></i>: +52 222 1234 567<br />
                        <i className="fa fa-fax fa-lg"></i>: +52 222 8765 432<br />
                        <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                            enroscadas@food.mx</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/enroscadasmx/"><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon" href="https://instagram.com/enroscadasmx?utm_medium=copy_link"><i className="fa fa-instagram fa-5x"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a role="button" className="btn btn-success" href="tel:+85212345678"><i className="fa fa-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>© Copyright 2021 Enroscadas MX</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;