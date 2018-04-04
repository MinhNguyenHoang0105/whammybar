import React, { Component } from 'react';

class SocialBar extends Component{
    render(){
        return(
                    <div className="top_social_bar" style={{width:'540px'}}>
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-skype" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
                    </div>
        );
    }
};

export default SocialBar;
