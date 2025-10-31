import React from 'react';
import './styles.css';

type ChildProps = {
  label: string;
};

export function Child({ label }: ChildProps) {
  return <div className="child">{label}</div>;
}

