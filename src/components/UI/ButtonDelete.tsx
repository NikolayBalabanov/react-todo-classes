import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

interface IButtonDelete {
  handleConfirm: () => void;
}

export default function ButtonDelete({ handleConfirm }: IButtonDelete) {
  return (
    <button className="task__btn" type="button" onClick={handleConfirm}>
      <AiOutlineDelete />
    </button>
  );
}
