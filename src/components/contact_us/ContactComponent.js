import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {

    render() {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            C. 16 de Septiembre<br />
                            Centro histórico de Puebla<br />
                            72000 Puebla, Pue.<br />
                            <i className="fa fa-phone"></i>: +52 222 1234 567<br />
                            <i className="fa fa-fax"></i>: +52 222 8765 432<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">enroscadas@food.mx</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        {/* <h5>Map of our Location</h5> */}
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-success" href="tel:+85212345678"><i className="fa fa-whatsapp"></i> Whatsapp</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your feedback!</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        
                    </div>
                </div>
            </div>
        );
    }

}

export default Contact;