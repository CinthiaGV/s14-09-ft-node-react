import React from 'react';
import './FilterModal.Module.css';

function FilterModal({ isOpen, setIsOpen, toggleModal }) {
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      {isOpen && (
        <div className="overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form>
              <p>Soy un modal</p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export { FilterModal };
