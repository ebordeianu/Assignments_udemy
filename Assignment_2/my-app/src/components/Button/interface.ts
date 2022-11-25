export interface ButtonProps {
  type: 'primary' | 'default';
  click(): void;
  buttonName: string;
}
