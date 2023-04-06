import React from "react";
import "./style.css";
import Hero from "./components/Hero";
import ThisMuseum from "./components/ThisMuseum";
import History from './components/History';
import Advantages from './components/Advantages';
import Galleries from './components/Galleries';
import Contacts from './components/Contacts';

const Main = () => {
  return (
    <div className="main col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-10">
      <Hero />
      <ThisMuseum />
      <History />
      <Advantages />
      <Galleries />
      <Contacts />
    </div>
  );
};

export default Main;
