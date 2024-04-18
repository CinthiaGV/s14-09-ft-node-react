import React from 'react';
import './FilterModal.Module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <hr className="divider" />
        <div className="modal-columns">
          <div className="modal-column">
            <h2>Tipos de juego</h2>
            <label>
              <input type="checkbox" /> Acción
            </label>
            <label>
              <input type="checkbox" /> Aventura
            </label>
            <label>
              <input type="checkbox" /> Deportes
            </label>
            <label>
              <input type="checkbox" /> Estrategia
            </label>
            <label>
              <input type="checkbox" /> Simulación
            </label>
          </div>
          <div className="modal-column">
            <h2>Nivel de habilidad</h2>
            <label>
              <input type="checkbox" /> 1 estrella
            </label>
            <label>
              <input type="checkbox" /> 2 estrellas
            </label>
            <label>
              <input type="checkbox" /> 3 estrellas
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FilterModal };
