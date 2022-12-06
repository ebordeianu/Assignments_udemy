import { PropsWithChildren } from 'react';

export interface ButtonProps extends PropsWithChildren {
  type: 'primary' | 'default';
  click(): void;
  text: string;
}
