import React, { Component } from 'react';
import TodoInfo from './TodoInfo';
import { EStatus, ITask, TChangeTask } from '../../models/task';
import ButtonDone from '../../components/UI/ButtonDone';
import ButtonArchive from '../../components/UI/ButtonArchive';
import Confirm from '../../components/UI/Modals/Confirm';
import TaskModal from '../UI/Modals/TaskModal/TaskModal';
import ButtonDelete from '../../components/UI/ButtonDelete';
import ButtonEdit from '../../components/UI/ButtonEdit';

interface ITodoItemProps {
  onTaskChange: TChangeTask;
  onTaskRemove: (id: string) => void;
  task: ITask;
}
interface ITodoItemState {
  isDescrShown: boolean;
  isEditModal: boolean;
  isConfirmModal: boolean;
}

export default class TodoItem extends Component<ITodoItemProps, ITodoItemState> {
  constructor(props: ITodoItemProps) {
    super(props);
    this.state = { isDescrShown: false, isConfirmModal: false, isEditModal: false };
  }

  private handleEdit: TChangeTask = (editedTask) => {
    this.props.onTaskChange(editedTask);
    this.handleEditClose();
  };

  private handleToggle = (actionType: EStatus) => {
    const toggledTask = { ...this.props.task, status: actionType };
    this.props.onTaskChange(toggledTask);
  };

  private handleConfirm = () => {
    this.setState({ isConfirmModal: true });
  };

  private handleConfirmClose = () => {
    this.setState({ isConfirmModal: false });
  };

  private handleEditClose = () => {
    this.setState({ isEditModal: false });
  };

  private handleEditShow = () => {
    this.setState({ isEditModal: true });
  };

  private handleRemove = () => {
    this.props.onTaskRemove(this.props.task.id);
  };

  private handleDescrShow = () => {
    this.setState({ isDescrShown: !this.state.isDescrShown });
  };

  public render() {
    const { descr, status, title } = this.props.task;
    return (
      <li>
        <div className="flex rounded-2xl overflow-hidden border border-gray-400 dark-mode dark:bg-slate-600 shadow-md">
          <ButtonDone
            isDisabled={status === EStatus.archived}
            status={status}
            handleToggle={this.handleToggle}
          />
          <TodoInfo
            title={title}
            onClickInfo={() => this.handleDescrShow()}
            descr={descr}
            isShort={this.state.isDescrShown}
          />
          <div className="ml-auto md:p-3 p-2 flex md:flex-row flex-col sm:gap-3 gap-1 flex-grow-0 flex-shrink-0">
            <ButtonEdit handleEditShow={this.handleEditShow} />
            <ButtonArchive handleToggle={this.handleToggle} status={status} />
            <ButtonDelete handleConfirm={this.handleConfirm} />
          </div>
        </div>
        {this.state.isEditModal && (
          <TaskModal
            onClose={this.handleEditClose}
            onConfirm={this.handleEdit}
            task={this.props.task}
          />
        )}
        {this.state.isConfirmModal && (
          <Confirm onClose={this.handleConfirmClose} onConfirm={this.handleRemove} title={title} />
        )}
      </li>
    );
  }
}
