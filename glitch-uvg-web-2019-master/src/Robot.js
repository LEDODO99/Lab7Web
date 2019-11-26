import React, { Component } from 'react';
require('./cuadro.css');

export default class Robot extends Component {
  render(){
    return (
        <img src='https://duckduckgo.com/assets/onboarding/robot-icon-frameless.svg' alt="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png" className="imagenRobot"></img>
    );
  }
}