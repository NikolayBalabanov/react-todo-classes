import React, { Component, RefObject } from 'react';

interface ITaskInputProps {
  inputRef: RefObject<HTMLInputElement>;
  text?: string;
}

export default class TaskInput extends Component<ITaskInputProps> {
  constructor(props: ITaskInputProps) {
    super(props);
  }
  render() {
    const { inputRef, text } = this.props;
    return (
      <input
        ref={inputRef}
        type="text"
        id="task-title"
        name="task-title"
        placeholder="Task title"
        className="task__input"
        defaultValue={text || ''}
        required
      />
    );
  }
}
