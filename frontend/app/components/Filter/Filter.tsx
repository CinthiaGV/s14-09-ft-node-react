import React from 'react';
import Image from 'next/image';
import { FilterModal } from '../FilterModal/FilterModal';
import './FilterModule.css';

function Filter({
  isOpen,
  setIsOpen,
  toggleModal,
  setFilteredUsers,
  filtroActivo,
  setFiltroActivo,
}) {
  return (
    <>
      <div className="skewed-border" onClick={toggleModal}>
        <p className="p-3">Filtrar por</p>
        <Image
          src="/assets/menu.svg"
          alt="Esto es un menu"
          width={24}
          height={24}
        />
      </div>
      <FilterModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleModal={toggleModal}
        setFilteredUsers={setFilteredUsers}
        setFiltroActivo={setFiltroActivo}
        filtroActivo={filtroActivo}
      />
    </>
  );
}

export { Filter };