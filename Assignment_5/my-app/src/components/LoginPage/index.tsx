import Input from '../Input';
import Button from '../Button';
import { useState } from 'react';
import { ROUTE } from '../../constants/routes';
import { useNavigate } from 'react-router-dom';
import './style.css';
import PasswordComponent from './PasswordComponent';
import { ValidationsForPasswordProps } from './interface';
import {
  credentialsAreValid,
  checkUsernameIsValid,
  checkUsernameExists,
  checkPasswordIsValid,
  checkPasswordExists,
} from './FunctionsForValidations';
import ValidatePassword from './ValidatePassword';

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorUsername, setErrorUsername] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  /////////////////////////////////////////////
  const [focusOnPassword, setFocusOnPassword] = useState(false);
  const [validatePassword, setValidatePassword] =
    useState<ValidationsForPasswordProps>();

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const conditions = checkPasswordIsValid(e.target.value.toString());
    setValidatePassword(conditions);
    setPassword(e.target.value);
  };
  /////////////////////////////////////////////

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (credentialsAreValid(username, password)) {
      console.log('a intrat in if');
      navigate(ROUTE.HOME);
    } else {
      // Error handling for username
      if (!checkUsernameIsValid(username)) {
        //regex: litere mari, mici, cifre si simboluri de pe tastatura, lungime minima 5
        setErrorUsername(
          'Username must have at least 5 characters including upper case, lower case and special characters'
        );
      } else if (!checkUsernameExists(username)) {
        setErrorUsername('This username does not exist');
      }
      // Error handling for password
      if (!checkPasswordIsValid(password)) {
        setErrorPassword(
          'Password must have at least 5 characters including upper case, lower case and special characters'
        );
      } else if (!checkPasswordExists(password)) {
        setErrorPassword('The password is not correct');
      }
    }
  };

  return (
    <div id='login'>
      <h1>Login Page</h1>
      <form data-test='login_form' onSubmit={(e) => handleSubmit(e)}>
        <Input
          data-test='username_input_test'
          labelText='Username'
          inputStyle='username_input'
          change={(e) => setUsername(e.target.value)}
          errorText={errorUsername}
          value={username}
          labelStyle='input_username_block'
          inputType='text'
        />
        {/* <Input
          labelText='Password'
          inputStyle='password_input'
          change={(e) => setPassword(e.target.value)}
          errorText={errorPassword}
          value={password}
          labelStyle='input_password_block'
          inputType='password'
        /> */}

        {/* ////////////////////////////////////////////// */}

        <PasswordComponent
          password={password}
          onChangePassword={onChangePassword}
          setFocusOnPassword={setFocusOnPassword}
          focusOnPassword={focusOnPassword}
        />
        {focusOnPassword ? (
          <ValidatePassword
            uppercase={
              validatePassword?.uppercase
                ? 'uppercase_is_valid'
                : 'uppercase_is_invalid'
            }
            lowercase={
              validatePassword?.lowercase
                ? 'lowercase_is_valid'
                : 'lowercase_is_invalid'
            }
            digits={
              validatePassword?.digits ? 'digits_is_valid' : 'digits_is_invalid'
            }
            passwordLength={
              validatePassword?.passwordLength
                ? 'passwordLength_is_valid'
                : 'passwordLength_is_invalid'
            }
            specialCharacters={
              validatePassword?.specialCharacters
                ? 'specialCharacters_is_valid'
                : 'specialCharacters_is_invalid'
            }
          />
        ) : null}
        {/* ///////////////////////////////////////////// */}

        {/* <Button
          type={'primary'}
          click={() => {
            setFocusOnPassword(false);
            // console.log('username=', username, 'password=', password);
          }}
          text='Submit'
        ></Button> */}
        <button
          type='submit'
          disabled={!credentialsAreValid(username, password)}
          onClick={() => {
            // setFocusOnPassword(false);
            // console.log('username=', username, 'password=', password);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
