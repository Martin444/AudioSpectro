import React from 'react';
import Analizer from './Vews/Analyser'
import Particles from 'react-particles-js';
import Logo from './logo.png'
import './App.css';

function App() {
  return (
    <>
      <Particles className="App-logo"
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 8
            				}
            			}
            		}
            	}}
              style={{
                width: '100%',
                height: '100%',
                background:'#000'
              }}
              />
              <Analizer />
              <img src={Logo} alt="Logo" className="logo"/>
    </>
  );
}

export default App;
