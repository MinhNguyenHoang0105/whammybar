import React, { Component } from 'react';

class SignUp extends Component{
    render(){
      return (
                  <div className="signup-search-area d-flex align-items-center justify-content-end">
                      <div className="login_register_area d-flex">
                          <div className="login">
                              <a href="register.html">Sing in</a>
                          </div>
                          <div className="register">
                              <a href="register.html">Sing up</a>
                          </div>
                      </div>
                      <div className="search_button">
                          <a className="searchBtn" href="#"><i className="fa fa-search" aria-hidden="true"></i></a>
                      </div>
                      <div className="search-hidden-form">
                          <form action="#" method="get">
                              <input type="search" name="search" id="search-anything" placeholder="Search Anything..."/>
                              <input type="submit" value="" className="d-none"/>
                              <span className="searchBtn"><i className="fa fa-times" aria-hidden="true"></i></span>
                          </form>
                      </div>
                  </div>
      );
    }
  };

export default SignUp;
