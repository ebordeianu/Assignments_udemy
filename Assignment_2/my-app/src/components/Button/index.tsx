import { ButtonProps } from './interface';
import './style.css';

export default function Button({ type, click, buttonName }: ButtonProps) {
  return (
    <button className={`btn_${type}`} onClick={click}>
      {buttonName}
    </button>
  );
}
