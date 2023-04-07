import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Error extends Component {
  render() {
    return (
      <div className="w-full h-full p-10 flex flex-col items-center justify-center">
        <h2 className="font-semibold text-center text-3xl">Oops! This page was not found</h2>
        <Link className="px-6 py-3 rounded-lg bg-slate-400" to="/">
          To main page
        </Link>
      </div>
    );
  }
}
