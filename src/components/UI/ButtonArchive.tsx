import React from 'react';
import { AiOutlineSave, AiOutlineUpload } from 'react-icons/ai';
import { EStatus } from '../../models/task';

interface IButtonArchive {
  status: EStatus;
  handleToggle: (e: EStatus) => void;
}

export default function ButtonArchive({ handleToggle, status }: IButtonArchive) {
  const callbackPayLoad = status === EStatus.archived ? EStatus.active : EStatus.archived;
  return (
    <button className="task__btn" type="button" onClick={() => handleToggle(callbackPayLoad)}>
      {status !== EStatus.archived ? <AiOutlineSave /> : <AiOutlineUpload />}
    </button>
  );
}
