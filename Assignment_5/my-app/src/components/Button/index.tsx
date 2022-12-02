import { ButtonProps } from './interface';
import './style.css';

export default function Button({ type, click, text }: ButtonProps) {
  return (
    <button id={type} onClick={click}>
      {text}
    </button>
  );
}
