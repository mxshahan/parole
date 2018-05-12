import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LogoutUser } from '../Actions/auth';
import Row from './Row';
import Container from './Container';
import NavBar from './NavBar';
import AuthNav from './AuthNav';

const Header = () => (
  <header>
    <div className="bg-g-x">
      <AuthNav/>
    </div>
    <nav className="navbar navbar-expand-lg navbar-white bg-white">
      <Container>
          <div className="d-flex justify-content-between w-100">
            <div className="">
              <Link className="" to="/">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className=""><i className="fa fa-bars"></i></span>
                </button>
              </Link>
              <Link className="navbar-brand" to="/">
                <h2 className="m-0">Video Sharing</h2>
                <span className="text-lt">Awesome Slogan Here</span>
              </Link>
            </div>
            <div className="py-4">
              <NavBar/>
            </div>
            <div className="text-right py-4">
              <button className="btn btn-pri my-2 my-sm-0 text-white px-3">Want Personalised Content?</button>
            </div>
          </div>            
      </Container>
    </nav>
  </header>
)

export default (Header)
