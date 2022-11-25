export interface ButtonCustomProps {
  text: string;
  type: 'primary' | 'default';
  click(): void;
}
