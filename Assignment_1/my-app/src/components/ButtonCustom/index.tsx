import { ButtonCustomProps } from './interface';
import './style.css';

export default function ButtonCustom({ type, click, text }: ButtonCustomProps) {
  return (
    <div>
      <button className={`btn_${type}`} onClick={click}>
        {text}
      </button>
    </div>
  );
}
