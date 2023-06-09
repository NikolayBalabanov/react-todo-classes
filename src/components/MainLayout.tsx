import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import TodoItem from './TodoList/TodoItem';
import { EStatus, ITask } from '../models/task';
import TaskModal from './UI/Modals/TaskModal/TaskModal';
import ButtonAddTask from '../components/UI/ButtonAddTask';
import Notification from '../components/UI/Modals/Notification';
import TodoList from './TodoList/TodoList';
import SearchInput from './UI/SearchInput/SearchInput';

interface IMainLayoutState {
  tasks: ITask[];
  searchValue: string;
  isAddModalOpen: boolean;
  isNotifyOpen: boolean;
}

interface IMainLayoutProps {
  filterVal: EStatus;
}

export type TChangeTask = (task: ITask) => void;

export default class MainLayout extends Component<IMainLayoutProps, IMainLayoutState> {
  constructor(props: IMainLayoutProps) {
    super(props);
    const prevState = localStorage.getItem('presistState');
    this.state = {
      tasks: prevState ? JSON.parse(prevState) : [],
      isAddModalOpen: false,
      isNotifyOpen: false,
      searchValue: '',
    };
  }

  updateStorage = () => localStorage.setItem('presistState', JSON.stringify([...this.state.tasks]));

  private getCurrentTasks = () => {
    const { searchValue, tasks } = this.state;
    const currentTasks = tasks
      .filter((task) => task.status === this.props.filterVal)
      .filter((task) =>
        searchValue ? task.title.toLowerCase().includes(searchValue.toLowerCase()) : task
      );
    return currentTasks.map((task) => (
      <TodoItem
        key={task.id}
        onTaskChange={this.changeTask}
        onTaskRemove={this.removeTask}
        task={task}
      />
    ));
  };

  private handleChangeSearch = debounce((value: string) => {
    this.setState({ searchValue: value });
  }, 500);

  private changeTask: TChangeTask = (editedTask) => {
    this.setState(
      {
        tasks: [...this.state.tasks.map((task) => (task.id === editedTask.id ? editedTask : task))],
      },
      this.updateStorage
    );
  };

  private addTask = (newTask: ITask) => {
    this.setState(
      {
        tasks: [...this.state.tasks, newTask],
      },
      this.updateStorage
    );
    this.handleNotifyOpen();
  };

  private removeTask = (id: string) => {
    this.setState(
      {
        tasks: [...this.state.tasks.filter((task) => task.id !== id)],
      },
      this.updateStorage
    );
  };

  private handleAddModalOpen = () => {
    this.setState({ isAddModalOpen: true });
  };

  private handleAddModalClose = () => {
    this.setState({ isAddModalOpen: false });
  };

  private handleNotifyOpen = () => {
    this.setState({ isNotifyOpen: true });
  };

  private handleNotifyClose = () => {
    this.setState({ isNotifyOpen: false });
  };

  public render() {
    return (
      <div className="flex flex-col sm:gap-3 gap-2 items-center">
        <div className="flex sm:flex-row flex-col sm:w-auto w-full items-center gap-3">
          <SearchInput onChangeInput={this.handleChangeSearch} />
          <ButtonAddTask onModalOpen={this.handleAddModalOpen} />
        </div>
        <TodoList>
          {this.getCurrentTasks().length > 0 ? (
            this.getCurrentTasks()
          ) : (
            <h2 className="p-10 text-center text-3xl font-semibold dark:text-gray-300">
              {"Hmm, it's empty here... Do you want to add something?"}
            </h2>
          )}
        </TodoList>
        {this.state.isAddModalOpen && (
          <TaskModal onClose={this.handleAddModalClose} onConfirm={this.addTask} />
        )}
        {this.state.isNotifyOpen && <Notification onClose={this.handleNotifyClose} />}
      </div>
    );
  }
}
