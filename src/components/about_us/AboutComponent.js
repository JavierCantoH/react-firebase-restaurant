import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from '../animations/LoadingComponent';
import { Fade, Stagger } from 'react-animation-components';

function RenderLeader({leader}) {
    return(
        <Media tag="li">
            <Media left middle>
                <Media object src={leader.image} alt={leader.name} />
            </Media>
            <Media body className="ml-5">
                <Media heading>{leader.name}</Media>
                <p>{leader.designation}</p>
                <p>{leader.description}</p>
            </Media>
        </Media>
    );

}

function LeaderList(props) {

    const leaders = props.leaders.leaders.map((leader) => {
        return (
            <Fade in key={leader._id}>
                <div className="col-12 mt-2">
                        <RenderLeader leader={leader} />
                </div>
            </Fade>
        );
    });

    if (props.leaders.isLoading) {
        return(
                <Loading />
        );
    }
    else if (props.leaders.errMess) {
        return(
            <div className="col-12"> 
                <h4>{props.leaders.errMess}</h4>
            </div>
        );
    }
    else {
        return (
            <Media list>
                <Stagger in>
                    {leaders}
                </Stagger>
            </Media>
        );
    }
}

function About(props) {

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Nuestra Historia</h2>
                    <p>Expezando en 2018, las mejores amigas, Paola y Renata decidieron emprender un pequeño negocio de postres saludables.</p>
                    <p>Con su primer producto, las <em>Enroscadas</em>, han alcanzado un gran éxito en la ciudad de Puebla.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-success text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Inicio</dt>
                                <dd className="col-6">3 Feb. 2018</dd>
                                <dt className="col-6">Socio Mayoritario</dt>
                                <dd className="col-6">Paola</dd>
                                <dt className="col-6">Empleados</dt>
                                <dd className="col-6">20</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">Fue un hit la rosca! Voló y nos gustó mucho!</p>
                                <footer className="blockquote-footer">Juan C,
                                <cite title="Source Title"> cliente satisfecho, 2019</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Nuestro equipo</h2>
                </div>
                <LeaderList leaders={props.leaders} />
            </div>
        </div>
    );
}

export default About;    