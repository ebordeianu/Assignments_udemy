export interface InputProps {
  labelStyle: string;
  labelText: string;
  inputStyle: string;
  change(event: React.ChangeEvent<HTMLInputElement>): void;
  value: string;
  errorText: string;
  inputType: string;
}
