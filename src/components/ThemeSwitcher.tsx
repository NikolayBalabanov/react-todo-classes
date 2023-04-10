import ThemeContext from '../context/ThemeContext';
import React, { Component } from 'react';

export default class ThemeSwitcher extends Component {
  declare context: React.ContextType<typeof ThemeContext>;
  private handleToggleTheme = () => {
    const { changeTheme } = this.context;
    changeTheme();
  };

  render() {
    const { darkTheme } = this.context;
    return (
      <label className="relative block p-[2px] h-[34px] w-[64px] bg-colorGrey rounded-2xl text-black cursor-pointer transition-colors duration-500 dark:text-white dark:bg-slate-700">
        <input
          className="hidden"
          type="checkbox"
          name=""
          id=""
          onClick={() => this.handleToggleTheme()}
        />
        <span
          className={`absolute block h-[30px] w-[30px] top-[2px] bg-slate-600 dark-mode rounded-full transition-all duration-500 ${
            darkTheme ? 'translate-x-full dark:bg-slate-200' : ''
          }`}
        ></span>
      </label>
    );
  }
}

ThemeSwitcher.contextType = ThemeContext;
