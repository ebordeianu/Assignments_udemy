import React from 'react';
import { ButtonProps } from '../Button/interface';
import { ButtonGroupProps } from './interface';
import './style.css';

export default function ButtonGroup({
  selected,
  direction,
  clickOn,
  children,
}: ButtonGroupProps) {
  return (
    <div className={direction}>
      {React.Children.map(
        children as React.ReactElement<ButtonProps>[],
        (child, index) => {
          let selectedClassName =
            selected === index ? 'selected' : 'notSelected';
          // return React.isValidElement(child)
          //   ? React.cloneElement(child, {
          //       className: `${selectedClassName}`,
          //       click: () => clickOn(index),
          //     })
          //   : child;

          return React.cloneElement(child, {
            className: `${selectedClassName}`,
            click: () => clickOn(index),
          });
        }
      )}
    </div>
  );
}
