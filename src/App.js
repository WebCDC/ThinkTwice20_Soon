import React from 'react';
import './App.css';
import ComingSoon from 'react-coming-soon'

function App() {
  return (
    <>
    <ComingSoon 
    title="Mais informações brevemente" 
    bgColor="transparent" 
    textColor="#ffffff"
    date="Sun Jan 26 2020 21:00:00 GMT+0000 (Horário Padrão da Europa Ocidental)" 
    />
    <img src={require("./footer.png")} alt="Organization" className="footer" />
    </>
  );
}

export default App;
