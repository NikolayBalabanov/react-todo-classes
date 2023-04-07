import React, { Component } from 'react';
import SearchIncon from './SearchIncon';
import SearchClear from './SearchClear';

interface ISearchInputProps {
  onChangeInput: (e: string) => void;
}

interface ISearchInputState {
  inputValue: string;
}

export default class SearchInput extends Component<ISearchInputProps, ISearchInputState> {
  constructor(props: ISearchInputProps) {
    super(props);
    this.state = { inputValue: '' };
  }
  private handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
    this.props.onChangeInput(event.target.value);
  };
  private handleClearInput = () => {
    this.setState({ inputValue: '' });
    this.props.onChangeInput('');
  };
  render() {
    const { inputValue } = this.state;
    return (
      <div className="relative sm:w-auto w-full">
        <input
          onChange={(event) => this.handleChangeInput(event)}
          value={inputValue}
          className="search__input"
          type="text"
          placeholder="Search..."
        />
        {inputValue ? <SearchClear onClear={this.handleClearInput} /> : <SearchIncon />}
      </div>
    );
  }
}
