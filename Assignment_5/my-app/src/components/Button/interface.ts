export interface ButtonProps {
  type: 'primary' | 'default';
  click?(): void;
  text: string;
}
