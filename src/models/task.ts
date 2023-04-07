export interface ITask {
  id: string;
  title: string;
  descr: string;
  status: EStatus;
}

export enum EStatus {
  active = 'active',
  done = 'done',
  archived = 'archived',
}

export type TInputTextArea =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

export type TChangeTask = (task: ITask) => void;
