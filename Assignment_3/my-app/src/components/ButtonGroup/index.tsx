import React from 'react';
import { ButtonProps } from '../Button/interface';
import { ButtonGroupProps } from './interface';

export default function ButtonGroup({
  selected,
  direction,
  clickOn,
  children,
}: ButtonGroupProps) {
  return (
    <div className='ceva'>
      {React.Children.map(
        children as React.ReactElement<ButtonProps>[],
        (child, index) => {
          console.log(direction);
          let selectedClassName =
            selected === index ? 'selected' : 'notSelected';
          return React.isValidElement(child)
            ? React.cloneElement(child, {
                className: `${selectedClassName}`,
                click: () => clickOn(index),
              })
            : child;
        }
      )}
    </div>
  );
}
