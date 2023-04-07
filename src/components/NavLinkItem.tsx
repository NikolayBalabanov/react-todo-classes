import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface INavLinkItem {
  to: string;
  text: string;
}

const stylesActive = 'btn-active md';
const styles = 'btn-default md';

export const NavLinkItem: FC<INavLinkItem> = ({ text, to }) => {
  return (
    <NavLink className={({ isActive }) => (isActive ? stylesActive : styles)} key={text} to={to}>
      {text}
    </NavLink>
  );
};
