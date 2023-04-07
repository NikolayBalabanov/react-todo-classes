import React from 'react';

interface IButtonColoredProps {
  text: string;
  type: 'resolve' | 'reject';
  onClickButton: () => void;
}

export default function ButtonColored({ text, type, onClickButton }: IButtonColoredProps) {
  return (
    <button
      className={type === 'resolve' ? 'btn-confirm' : 'btn-reject'}
      onClick={() => onClickButton()}
      type="button"
    >
      {text}
    </button>
  );
}
