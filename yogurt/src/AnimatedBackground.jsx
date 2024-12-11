import React from "react";
import "./AnimatedBackground.css"; // Estilos separados para el fondo

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      <div className="circle" style={{ width: "200px", height: "200px", top: "10%", left: "20%" }}></div>
      <div className="circle" style={{ width: "150px", height: "150px", top: "50%", left: "70%" }}></div>
      <div className="circle" style={{ width: "300px", height: "300px", top: "80%", left: "30%" }}></div>
      <div className="circle" style={{ width: "100px", height: "100px", top: "40%", left: "10%" }}></div>
    </div>
  );
};

export default AnimatedBackground;
