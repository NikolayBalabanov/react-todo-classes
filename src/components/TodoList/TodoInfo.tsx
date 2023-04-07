import React from 'react';

interface ITodoInfo {
  title: string;
  descr: string;
  isShort: boolean;
  onClickInfo: () => void;
}

export default function TodoInfo({ descr, isShort, title, onClickInfo }: ITodoInfo) {
  return (
    <div className="md:w-3/5 w-2/3 p-2 dark:text-gray-300 dark-mode" onClick={() => onClickInfo()}>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className={`text-2xl break-words ${!isShort ? 'is-short' : ''}`}>{descr}</p>
    </div>
  );
}
