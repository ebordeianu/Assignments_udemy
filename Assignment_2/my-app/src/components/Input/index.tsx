import { InputProps } from './interface';
import './style.css';

export default function Input({ labelText, value, error, change }: InputProps) {
  return (
    <div className='main_container'>
      <label id='text_for_input'>{labelText}</label>
      <input id='input' defaultValue={value} onChange={change} />
      <label id='error'>{error}</label>
    </div>
  );
}
