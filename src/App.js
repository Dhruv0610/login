import React from 'react';
import './App.css';
import Section from './js/Section';

function App() {
  return (
    <React.Fragment>
      {/* <div className="navbar">
        <img src={logo} alt='logo' className="logo"></img>
        <h1 className="navbar-heading">Welcome to EdRAHI</h1>
      </div> */}
      <div className="App">
        <div className="main-section">
          <Section />
        </div>
      </div>
      {/* <div className="footer">
        <h3 className="footer-text">Copyright &copy; 2020 EdRAHI, All rights Reserved.</h3>
      </div> */}
    </React.Fragment>
  );
}

export default App;
