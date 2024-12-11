import React from "react";
import "./styles.css";
import AnimatedBackground from "./AnimatedBackground";    
const InicioAdministrador = () => {
  return (
    <div className="main-container">
      <AnimatedBackground />
      
      {/* Fondo */}
      {/* Contenido */}
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Logo UTC"
          className="logo"
        />

        {/* Título */}
        <h1 className="title">CARRERA DE AGROINDUSTRIAS - DATOS DE PRUEBAS</h1>

        {/* Botón */}
        <button className="button">INICIAR COMO ADMINISTRADOR</button>
      </div>
  );
};

export default InicioAdministrador;
