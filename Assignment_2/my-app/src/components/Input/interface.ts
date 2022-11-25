import React from 'react';

export interface InputProps {
  labelText: string;
  value: any;
  width: number;
  height: number;
  error?: string;
  change?(event: React.ChangeEvent<HTMLInputElement>): void;
}
