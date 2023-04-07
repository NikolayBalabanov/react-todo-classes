import React, { Component } from 'react';
import TaskForm from './TaskForm';
import { AiOutlineClose } from 'react-icons/ai';
import { ITask } from 'models/task';

interface ITaskModalProps {
  onClose: () => void;
  onConfirm: (elem: ITask) => void;
  task?: ITask;
}

export default class TaskModal extends Component<ITaskModalProps> {
  private modal: React.RefObject<HTMLDivElement>;
  private modalContent: React.RefObject<HTMLDivElement>;
  constructor(props: ITaskModalProps) {
    super(props);
    this.modal = React.createRef<HTMLDivElement>();
    this.modalContent = React.createRef<HTMLDivElement>();
  }

  private close = (fn: () => void) => {
    this.modal.current?.classList.add('opacity-0');
    this.modalContent.current?.classList.add('-translate-y-10');
    setTimeout(() => {
      fn();
    }, 300);
  };

  private handleSetTask = (task: ITask) => {
    this.props.onConfirm(task);
    this.close(this.props.onClose);
  };

  componentDidMount(): void {
    setTimeout(() => {
      this.modal.current?.classList.remove('opacity-0');
      this.modalContent.current?.classList.remove('-translate-y-10');
    }, 300);
  }

  public render() {
    const { onClose, task } = this.props;
    return (
      <div ref={this.modal} className="task__modal opacity-0">
        <div
          ref={this.modalContent}
          className="w-10/12 pointer-events-none md:w-6/12 flex flex-col rounded-lg relative z-30 shadow-md bg-white px-6 py-3 -translate-y-10 duration-300 transition-transform dark:bg-gray-300"
        >
          <div className="flex flex-col-reverse justify-between items-center pb-4">
            <h3 className="text-3xl font-semibold self-start dark:text-colorD3">
              {task ? 'Edit the task' : 'Add a new task'}
            </h3>
            <button
              className="px-1 pointer-events-auto text-gray-400 text-3xl self-end dark:text-colorD3"
              type="button"
              onClick={() => this.close(onClose)}
            >
              <AiOutlineClose />
            </button>
          </div>
          <hr />
          <TaskForm onHandleSubmit={this.handleSetTask} task={task || null} />
          <hr />
        </div>
      </div>
    );
  }
}
