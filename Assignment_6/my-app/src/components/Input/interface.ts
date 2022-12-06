export interface InputProps {
  inputId: string;
  change(e: React.ChangeEvent<HTMLInputElement>): void;
  labelText: string;
  value: string;
  inputType: string;
  errorText: string;
}
