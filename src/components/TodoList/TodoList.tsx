import React from 'react';

interface ITodoListProps {
  children: JSX.Element[];
}

export default function TodoList({ children }: ITodoListProps) {
  return <ul className="lg:max-w-4xl w-full mx-auto flex flex-col gap-3">{children}</ul>;
}
