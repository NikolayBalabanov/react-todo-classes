import React, { Component } from 'react';

interface IThemeProviderState {
  darkTheme: boolean;
}
interface IThemeProviderProps {
  children: JSX.Element;
}

const defaultValue = {
  darkTheme: true,
  changeTheme: () => {},
};
const ThemeContext = React.createContext(defaultValue);

export class ThemeProvider extends Component<IThemeProviderProps, IThemeProviderState> {
  constructor(props: IThemeProviderProps) {
    super(props);
    const savedState = localStorage.getItem('theme');
    this.state = {
      darkTheme: savedState ? JSON.parse(savedState) : true,
    };
  }

  updateStorage = () => localStorage.setItem('theme', JSON.stringify(this.state.darkTheme));

  changeTheme = () => {
    this.setState({ darkTheme: !this.state.darkTheme }, this.updateStorage);
  };

  componentDidUpdate(): void {
    const root = window.document.documentElement as HTMLElement;
    root.classList.toggle('dark');
  }

  componentDidMount(): void {
    const root = window.document.documentElement as HTMLElement;
    this.state.darkTheme ? root.classList.add('dark') : root.classList.remove('dark');
  }

  render() {
    const { darkTheme } = this.state;
    const { children } = this.props;

    return (
      <ThemeContext.Provider
        value={{
          darkTheme,
          changeTheme: this.changeTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}
export default ThemeContext;
