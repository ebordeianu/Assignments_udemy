import { InputProps } from './interface';

export default function Input({
  inputId,
  change,
  labelText,
  value,
  inputType,
  errorText,
}: InputProps) {
  return (
    <label className=''>
      <span>{labelText}</span>
      <input
        id={inputId}
        onChange={change}
        defaultValue={value}
        type={inputType}
      />
      <span>{errorText}</span>
    </label>
  );
}
