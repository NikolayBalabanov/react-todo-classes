import React from 'react';
import { EStatus } from '../../models/task';

interface IButtonDone {
  handleToggle: (e: EStatus) => void;
  isDisabled: boolean;
  status: EStatus;
}

const styles = {
  active: 'bg-gray-400 hover:bg-gray-600 focus-visible:bg-gray-600 dark:hover:bg-gray-100',
  done: 'bg-green-400 hover:bg-green-600 focus-visible:bg-gray-600 dark:hover:bg-green-600',
  archived: 'bg-blue-400',
};

export default function ButtonDone({ handleToggle, isDisabled, status }: IButtonDone) {
  const callbackPayload = status === EStatus.active ? EStatus.done : EStatus.active;
  return (
    <button
      className={`task__done ${styles[status]}`}
      onClick={() => handleToggle(callbackPayload)}
      disabled={isDisabled}
      type="button"
    ></button>
  );
}
