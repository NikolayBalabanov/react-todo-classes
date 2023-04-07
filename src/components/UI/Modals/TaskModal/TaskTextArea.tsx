import React, { Component, RefObject } from 'react';

interface ITaskTextAreaProps {
  textAreaRef: RefObject<HTMLTextAreaElement>;
  text: string;
}

export default class TaskTextArea extends Component<ITaskTextAreaProps> {
  constructor(props: ITaskTextAreaProps) {
    super(props);
  }
  render() {
    const { text, textAreaRef } = this.props;
    return (
      <textarea
        ref={textAreaRef}
        id="task-descr"
        name="task-descr"
        placeholder="Task description"
        className="task__text-field"
        defaultValue={text || ''}
        rows={5}
      />
    );
  }
}
