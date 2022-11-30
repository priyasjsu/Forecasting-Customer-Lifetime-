import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@aws-amplify/ui-react/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
// import MenuItem from 'react-bootstrap/MenuItem';

import App from './App';
import reportWebVitals from './reportWebVitals';
import {Amplify} from 'aws-amplify'
import config from './aws-exports'
import { Authenticator } from '@aws-amplify/ui-react';
import {  IconContext } from 'react-icons';
import {BsPersonCircle} from 'react-icons/bs';
Amplify.configure(config)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Authenticator>
      {({ signOut, user }) => (
        <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid className="mt-3">
            <Navbar.Brand href="javascript:void(0)">Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link target="_blank" href="http://ec2-54-241-114-164.us-west-1.compute.amazonaws.com:8080/">Customer Value Prediction</Nav.Link>
              </Nav>
              <Nav>
                <NavDropdown title={<span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg></span>} id="basic-nav-dropdown" align="end">
                  <NavDropdown.Item href="javascript:void(0)">
                    <small>Logged in as:</small><br />
                    <strong>Priya Khandelwal</strong>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="javascript:void(0)" onClick={signOut}>Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <App />
        </Container>
        </div>
      )}
    </Authenticator>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
