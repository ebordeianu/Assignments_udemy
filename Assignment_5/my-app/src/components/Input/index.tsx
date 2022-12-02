import { InputProps } from './interface';

export default function Input({
  labelStyle,
  labelText,
  inputStyle,
  value,
  change,
  errorText,
  inputType,
}: InputProps) {
  return (
    <label id={labelStyle}>
      <span>{labelText}</span>
      <input
        id={inputStyle}
        defaultValue={value}
        onChange={change}
        type={inputType}
      />
      <span>{errorText}</span>
    </label>
  );
}
