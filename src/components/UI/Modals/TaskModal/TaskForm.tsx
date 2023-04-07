import React, { Component } from 'react';
import { v1 as uuid } from 'uuid';
import { EStatus, ITask } from '../../../../models/task';
import TaskInput from '../TaskModal/TaskInput';
import TaskTextArea from '../TaskModal/TaskTextArea';

interface ITaskFormState {
  title: string;
  description: string;
  errorTitle: string;
}

interface ITaskFormProps {
  onHandleSubmit: (elen: ITask) => void;
  task: ITask | null;
}

export default class TaskForm extends Component<ITaskFormProps, ITaskFormState> {
  private formRef = React.createRef<HTMLFormElement>();
  private inputTitleRef = React.createRef<HTMLInputElement>();
  private textAreaRef = React.createRef<HTMLTextAreaElement>();

  constructor(props: ITaskFormProps) {
    super(props);
    const { task } = this.props;
    this.state = {
      title: task ? task.title : '',
      description: task ? task.descr : '',
      errorTitle: '',
    };
  }

  private handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!this.validateTitle()) return;
    const { onHandleSubmit, task } = this.props;
    const submitedTask = task
      ? {
          ...task,
          title: this.inputTitleRef.current!.value,
          descr: this.textAreaRef.current!.value,
        }
      : {
          id: uuid(),
          title: this.inputTitleRef.current!.value,
          descr: this.textAreaRef.current!.value,
          status: EStatus.active,
        };
    onHandleSubmit(submitedTask);
    this.formRef.current!.reset();
  };

  private validateTitle = () => {
    const inputVal = this.inputTitleRef.current!.value;
    if (inputVal.length < 2) {
      this.setState({ errorTitle: 'Too short. Please enter no less than 3 symbols' });
      return false;
    } else this.setState({ errorTitle: '' });
    return true;
  };

  render() {
    const { description, errorTitle, title } = this.state;
    const { task } = this.props;
    return (
      <form ref={this.formRef} className="py-4" onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          <label htmlFor="task-title" className="task__label">
            Task title
            <TaskInput inputRef={this.inputTitleRef} text={title} />
          </label>
          <p className="text-red-500 text-center mt-2 mb-3">{errorTitle}</p>
        </div>
        <div>
          <label className="task__label">
            Task description
            <TaskTextArea textAreaRef={this.textAreaRef} text={description} />
          </label>
        </div>
        <button className="btn-default pointer-events-auto" type="submit">
          {task ? 'Edit task' : 'Add task'}
        </button>
      </form>
    );
  }
}
