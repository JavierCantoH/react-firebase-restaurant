import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
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
                        <h3>Haz tu pedido por Whatsapp!</h3>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1 text-center d-grid gap-2">
                        <Button color="success" size="lg"
                             href="https://api.whatsapp.com/send?phone=5212228056287&text=Holaa!!%20Me%20podr%C3%ADan%20dar%20información%20sobre%20sus%20productos%20y%20precios%20por%20favor!!%20Muchas%20gracias🙏🏼" 
                             className="fa fa-whatsapp"> 
                              Whatsapp
                        </Button>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12 text-center">
                        <h3>Dinos que te parecieron nuestros productos</h3>
                        <h3>y síguenos en redes sociales!</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        
                    </div>
                </div>
            </div>
        );
    }

}

export default Contact;