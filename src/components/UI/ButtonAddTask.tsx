import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

interface IButtonAddTask {
  onModalOpen: () => void;
}

export default function ButtonAddTask({ onModalOpen }: IButtonAddTask) {
  return (
    <button
      className="btn-default sm:w-fit justify-center w-full"
      type="button"
      onClick={() => onModalOpen()}
    >
      <AiOutlinePlus />
      <span>Add todo</span>
    </button>
  );
}
