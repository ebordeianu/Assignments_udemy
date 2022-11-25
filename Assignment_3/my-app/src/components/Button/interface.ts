export interface ButtonProps {
  type?: 'primary' | 'default';
  className?: string;
  click?(): void;
  text: string;
}
