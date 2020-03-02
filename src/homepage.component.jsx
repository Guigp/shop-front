import React from "react";
import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">BONÉS</h1>
          <span className="subtitle">COMPRE AGORA</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">CASACOS</h1>
          <span className="subtitle">COMPRE AGORA</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">TÊNIS</h1>
          <span className="subtitle">COMPRE AGORA</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">MULHERES</h1>
          <span className="subtitle">COMPRE AGORA</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">HOMENS</h1>
          <span className="subtitle">COMPRE AGORA</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
