import React from 'react';
import { AiOutlineForm } from 'react-icons/ai';

interface IButtonEdit {
  handleEditShow: () => void;
}

export default function ButtonEdit({ handleEditShow }: IButtonEdit) {
  return (
    <button className="task__btn" onClick={handleEditShow}>
      <AiOutlineForm />
    </button>
  );
}
