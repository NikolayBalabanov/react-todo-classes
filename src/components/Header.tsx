import React, { Component } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import NavList from './NavList';

export default class Header extends Component {
  render() {
    return (
      <header className="px-5 py-4 rounded-b-2xl shadow-lg flex flex-col bg-gray-200 dark:bg-gray-900">
        <div className="flex justify-between flex-wrap items-center">
          <h1 className="md:text-5xl text-3xl dark:text-gray-200">Todo List</h1>
          <NavList />
          <ThemeSwitcher />
        </div>
      </header>
    );
  }
}
