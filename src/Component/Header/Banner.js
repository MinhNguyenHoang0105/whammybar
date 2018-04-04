import React, { Component } from 'react';

class Banner extends Component{
    render(){
      return (
            <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="logo_area text-center">
                          <a href="#" className="yummy-logo" style={{ textDecoration: 'none'}}>Ánh Mi</a>
                      </div>
                  </div>
              </div>
            </div>
      );
    }
  };

export default Banner;
