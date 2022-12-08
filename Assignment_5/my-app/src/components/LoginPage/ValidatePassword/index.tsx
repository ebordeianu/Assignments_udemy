import { ValidatePasswordProps } from './interface';
import './style.css';

export default function ValidatePassword({
  uppercase,
  lowercase,
  digits,
  passwordLength,
  specialCharacters,
}: ValidatePasswordProps) {
  return (
    <div id='container'>
      <span id={uppercase}>
        This field must contain at least one uppercase letter
      </span>
      <span id={lowercase}>
        This field must contain at least one lowercase letter
      </span>
      <span id={digits}>This field must contain at least one digit</span>
      <span id={passwordLength}>
        This field must have length between 5 and 30
      </span>
      <span id={specialCharacters}>
        This field must contain at least one special character
      </span>
    </div>
  );
}
