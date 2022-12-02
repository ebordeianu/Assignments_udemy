import React from 'react';

export interface InputProps {
  labelText: string;
  value: any;
  error?: string;
  change?(event: React.ChangeEvent<HTMLInputElement>): void;
}
