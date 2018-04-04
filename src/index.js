import React from 'react';
import ReactDOM from 'react-dom';
import './style/css/style.css';
import Banner from './Component/Header/Banner';
import SocialBar from './Component/Header/SocialBar';
import SignUp from './Component/Header/SignUp';

ReactDOM.render(<SocialBar />, document.getElementById('socialBar'));
ReactDOM.render(<SignUp />, document.getElementById('signUp'));
ReactDOM.render(<Banner />, document.getElementById('banner'));
