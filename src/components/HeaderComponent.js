import React, {Component} from 'react';
import { toast } from 'react-toastify';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler,
     Modal, Button, ModalBody,ModalHeader, Form, FormGroup, Label, Input} from 'reactstrap';


class Header extends Component {
    constructor (props){
        super(props);
        this.state = {
            isNavOpen : false,
            isModelOpen : false
        };
        //to make this method accessible in ur JSX
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModel = this.toggleModel.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen : !this.state.isNavOpen
        });
    }

    toggleModel() {
        this.setState({
            isModelOpen : !this.state.isModelOpen
        });
    }

    handleLogin(event) {
        this.toggleModel();
        toast("Username :" + this.username.value + "  Password : " + this.password.value
         + "  Remember Me :" +this.remember.checked );
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
            <Navbar dark  expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav}/>
                    <NavbarBrand className='mr-auto' href="/">
                        <img src='assets/images/logo.png' height='30' width='41' alt='Ristorante Con Fusion'/>
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className='nav-link' href='/home'>
                                    <span className='fa fa-home fa-lg'></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' href='/aboutus'>
                                    <span className='fa fa-info fa-lg'></span> About us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' href="/menu">
                                    <span className='fa fa-list fa-lg'></span> Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' href='/contactus'>
                                    <span className='fa fa-address fa-lg'></span> Contact us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModel}>
                                    <span className='fa fa-sign-in fa-lg'></span> Login
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <div className='container-fluid jumbotron'>
                    <div className='row row-header'>
                        <div className='col-12 col-sm-6'>
                            <h1>Ristorante con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                
            </div>
            <Modal isOpen={this.state.isModelOpen} toggle={this.toggleModel}>
                <ModalHeader toggle={this.toggleModel}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor='username'> Username</Label>
                            <Input type='text' name='username'  id='username'
                            innerRef={(input) => this.username = input}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='password'> Password</Label>
                            <Input type='password' name='password'  id='password'
                             innerRef={(input) => this.password = input}/>
                        </FormGroup>
                        <FormGroup>
                            <Label check>
                                <Input type='checkbox' name='remember' 
                                 innerRef={(input) => this.remember = input}/>
                                  Remember Me
                            </Label>
                        </FormGroup>
                        <Button type='submit' value='submit' color='primary'>Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
            </React.Fragment>
        );
    }
}

export default Header;