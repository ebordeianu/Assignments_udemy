import { ButtonProps } from './interface';
import './style.css';

export default function Button({ type, className, click, text }: ButtonProps) {
  return (
    <button className={`${type}_${className || ''}`} onClick={click}>
      {text}
    </button>
  );
}
