import Input from '../Input';
import Button from '../Button';
import { useState } from 'react';
import credentials from '../../constants/availableCredentials.json';
import { ROUTE } from '../../constants/routes';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorUsername, setErrorUssername] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      credentials.filter(
        (e) => e.username === username && e.password === password
      ).length > 0
    ) {
      console.log('a intrat in if');
      navigate(ROUTE.HOME);
    } else {
      // Error handling for username
      if (username.length === 0) {
        setErrorUssername('Username cannot be empty');
      } else if (
        credentials.filter((e) => e.username === username).length === 0
      ) {
        setErrorUssername('This username does not exist');
      }
      // Error handling for password
      if (password.length < 4) {
        setErrorPassword('Password length is less than 4');
      } else if (
        credentials.filter((e) => e.password === password).length === 0
      ) {
        setErrorPassword('This password does not exist');
      }
    }
  };

  return (
    <div id='login'>
      <h1>Login Page</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          labelText='Username'
          inputStyle='username_input'
          change={(e) => setUsername(e.target.value)}
          errorText={errorUsername}
          value={username}
          labelStyle='input_username_block'
          inputType='text'
        />
        <Input
          labelText='Password'
          inputStyle='password_input'
          change={(e) => setPassword(e.target.value)}
          errorText={errorPassword}
          value={password}
          labelStyle='input_password_block'
          inputType='password'
        />
        <Button
          type={'primary'}
          click={() => {
            // console.log('username=', username, 'password=', password);
          }}
          text='Submit'
        ></Button>
      </form>
    </div>
  );
}
