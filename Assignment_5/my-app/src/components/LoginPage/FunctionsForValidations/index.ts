import credentials from '../../../constants/availableCredentials.json';
import { ValidationsForPasswordProps } from '../interface';

export const credentialsAreValid = (username: string, password: string) => {
  if (
    checkUsernameIsValid(username) &&
    checkPasswordIsValid(password) &&
    checkUsernameExists(username) &&
    checkPasswordExists(password)
  )
    return true;

  return false;
};

export const checkUsernameIsValid = (username: string) => {
  // first paranthesis is for username length
  // a-zA-Z0-9 => all numbers and english letters
  // !@#$%^&* => special characters obtained through pressing SHIFT and 1, 2, 3, 4 etc
  // const validUsername = new RegExp('^(?=.{5,30}$)[a-zA-Z0-9!@#$%^&*]');
  const lowerCase = /[a-z]/.test(username);
  const upperCase = /[A-Z]/.test(username);
  const digits = /[0-9]/.test(username);
  const specialCharacters = /[!@#$%^&*]/.test(username);
  const minAndMaxLength = username.length >= 5 && username.length <= 30;

  return (
    lowerCase && upperCase && digits && specialCharacters && minAndMaxLength
  );
};

export const checkUsernameExists = (username: string) => {
  if (credentials.filter((e) => e.username === username).length > 0)
    return true;
  return false;
};

export const checkPasswordIsValid = (password: string) => {
  // first paranthesis is for password length
  // a-zA-Z0-9 => all numbers and english letters
  // !@#$%^&*()_+-=., => special characters obtained through pressing SHIFT and 1, 2, 3, 4 etc
  // const validPassword = new RegExp('^(?=.{5,30}$)[a-zA-Z0-9!@#$%^&*()_+-=.,]');
  let conditions: ValidationsForPasswordProps = {
    lowercase: false,
    uppercase: false,
    digits: false,
    passwordLength: false,
    specialCharacters: false,
  };
  conditions.lowercase = /[a-z]/.test(password);
  conditions.uppercase = /[A-Z]/.test(password);
  conditions.digits = /[0-9]/.test(password);
  // const specialCharacters = /[!@#$%^&*()_+-=.,]/.test(password);
  conditions.specialCharacters = /[!@#$%^&*()_+-.,]/.test(password);
  // console.log('specialCharacters=', conditions.specialCharacters);
  conditions.passwordLength = password.length >= 5 && password.length <= 30;

  return conditions;
};

export const checkPasswordExists = (password: string) => {
  if (credentials.filter((e) => e.password === password).length > 0)
    return true;
  return false;
};

// good for validations:
// /[A-Z]/.test(value)
// /[a-z]/.test(value)
// /[0-9]/.test(value)
// /[!@#$%^&*()-+/,.]/.test(value)
