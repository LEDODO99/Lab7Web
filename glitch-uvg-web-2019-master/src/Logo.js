import React from 'react';
import  './index.css';

class Logo extends React.Component {
  render () {
    return(
      <div clasName="Container" >
    <img alt="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png" src='https://duckduckgo.com/assets/logo_homepage.normal.v108.svg' href={window.scrollTo(0,250)} className="mainLogo"></img>
      
      <span className="tag">"conocer más"</span></div>
    );
  }
}

export default Logo;