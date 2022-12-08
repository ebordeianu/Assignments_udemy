import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../../components/LoginPage';
import '@testing-library/jest-dom';
import { checkPasswordIsValid } from '../../components/LoginPage/FunctionsForValidations';
// import { createRoot, ReactDOM } from 'react-dom/client';

describe('Login component test', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(
      <BrowserRouter>
        <Routes>
          <Route element={<LoginPage />} path={'/'} />
        </Routes>
      </BrowserRouter>,
      container
    );
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it('Test page renders initial document with data-test query', () => {
    expect(
      container.querySelector("[data-test='login_form']")
    ).toBeInTheDocument();
    // expect(
    //   container
    //     .querySelector("[data-test='username_input_test']")
    //     ?.getAttribute('inputStyle')
    // ).toBe('username_input');
  });

  // Validations for password
  // Test LOWERCASE LETTERS
  it('Test if password does not have lowercase letters', () => {
    const password = 'EM1!@#';
    const result = checkPasswordIsValid(password);

    expect(result.lowercase).toBeFalsy();
  });

  // Test UPPERCASE LETTERS
  it('Test if password does not have uppercase letters', () => {
    const password = 'em1!@#';
    const result = checkPasswordIsValid(password);

    expect(result.uppercase).toBeFalsy();
  });

  // Test DIGITS
  it('Test if password does not have digits', () => {
    const password = 'Emi!@#';
    const result = checkPasswordIsValid(password);

    expect(result.digits).toBeFalsy();
  });

  // Test LENGTH is between 5 and 30
  it('Test if password does not have length between 5 and 30', () => {
    const password = 'Em1#';
    const result = checkPasswordIsValid(password);

    expect(result.passwordLength).toBeFalsy();
  });

  // Test SPECIAL CHARACTERS
  it('Test if password does not have special characters', () => {
    const password = 'Em1Em1';
    const result = checkPasswordIsValid(password);

    expect(result.specialCharacters).toBeFalsy();
  });

  // Test ALL CONDITIONS FULFILLED
  it('Test if password have all conditions fulfilled', () => {
    const password = 'Em1!@#';
    const result = checkPasswordIsValid(password);

    expect(result).toBeTruthy();
  });
});
