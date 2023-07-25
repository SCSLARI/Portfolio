import React from 'react'
import Foto from '../img/foto.jpg'
import '../styles/components/sidebar.sass'
import SocialNetworks from './SocialNetworks';
import InformationContainer from './informationContainer';

const sidebar = () => {
  return  <aside id="sidebar">
    <img src={Foto} alt="Larissa Spinelli" />
    <p className="title"> Desenvolvedora</p>
    <SocialNetworks/>
    <InformationContainer />
    <a href="" className="btn"> Download do Currículo</a>
  </aside>;
}

export default sidebar