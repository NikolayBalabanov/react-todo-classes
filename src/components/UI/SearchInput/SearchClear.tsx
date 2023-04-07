import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface ISearchClearProps {
  onClear: () => void;
}

export default function SearchClear({ onClear }: ISearchClearProps) {
  return (
    <button className="search__icon hover:opacity-80" type="button" onClick={() => onClear()}>
      <AiOutlineCloseCircle />
    </button>
  );
}
