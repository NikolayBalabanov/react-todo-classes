import React, { Component } from 'react';
import { NavLinkItem } from './NavLinkItem';

const links = [
  { text: 'Active', to: '/active' },
  { text: 'Done', to: '/done' },
  { text: 'Archive', to: '/archive' },
];

export default class NavList extends Component {
  render() {
    return (
      <nav className="md:w-auto md:order-none md:mt-0 mt-2 order-3 w-full">
        <ul className="flex justify-center gap-4">
          {links.map(({ text, to }) => (
            <NavLinkItem key={text} to={to} text={text}></NavLinkItem>
          ))}
        </ul>
      </nav>
    );
  }
}
