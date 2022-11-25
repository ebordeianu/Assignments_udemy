import { PropsWithChildren } from 'react';

export interface ButtonGroupProps extends PropsWithChildren {
  selected?: number;
  clickOn(number: number): void;
  direction?: 'row' | 'col';
}
