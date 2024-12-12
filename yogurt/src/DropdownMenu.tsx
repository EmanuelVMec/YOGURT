import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importamos Link de react-router-dom

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleMenu} className="dropdown-button">
        Menú
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          <li className="dropdown-item">
            <Link to="/" className="dropdown-link">Volver a inicio</Link>
          </li>
          <li className="dropdown-item">
            <Link to="/DatatableScreen" className="dropdown-link">Registro</Link>
          </li>
          <li className="dropdown-item">Repositorio</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
