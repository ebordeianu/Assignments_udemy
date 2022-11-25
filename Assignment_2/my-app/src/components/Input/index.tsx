import { InputProps } from './interface';
import './style.css';

export default function Input({
  labelText,
  value,
  error,
  change,
  width,
  height,
}: InputProps) {
  return (
    <div className='main_container'>
      <label>{labelText}</label>
      <input
        defaultValue={value}
        onChange={change}
        width={width}
        height={height}
      />
      <label>{error}</label>
    </div>
  );
}
