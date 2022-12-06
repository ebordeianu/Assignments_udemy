import React from 'react';
import { ButtonProps } from './interface';

export default function Button({ type, click, text }: ButtonProps) {
  return (
    <button id={type} onClick={click}>
      {text}
    </button>
  );
}
