import { useState } from 'react';
import { Box, TextField, Button, styled, Typography } from '@mui/material';

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  margin-top: 50px;
  box-shadow: 5px 2px 5px 2px rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative; /* needed for absolute positioning of OR */
`;

const FormButton = styled(Button)`
  text-transform: none;
  font-weight: bold;
`;

const OrText = styled(Typography)`
  text-align: center;
  margin: 8px 0;
  font-weight: bold;
`;


const SignupInitialValues = {
    name: '',
    username: '',
    password: ''

}

const Login = () => {
  const imageURL =
    "https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw=";

  const [account, setAccount] = useState('login');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [signup, setSingup] = useState(SignupInitialValues);

  const toggleAccountView = () => {
    setAccount(account === 'signup' ? 'login' : 'signup');
    setFormData({ name: '', email: '', password: '' }); // reset inputs
  };

  const onInputChange = (e) => {
    setSingup({ ...signup, [e.target.name]: e.target.value });
  };

  const fields = account === 'login'
    ? [
        { label: 'Email', type: 'email', name: 'email' },
        { label: 'Password', type: 'password', name: 'password' }
      ]
    : [
        { label: 'Name', type: 'text', name: 'name' },
        { label: 'Email', type: 'email', name: 'email' },
        { label: 'Password', type: 'password', name: 'password' }
      ];

  return (
    <Component>
      <img
        src={imageURL}
        alt="login"
        style={{ width: '100%', borderRadius: '8px' }}
      />

      <Wrapper>
        {fields.map((field) => (
            <TextField
        key={field.name}
        label={field.label}
        type={field.type}
        name={field.name}
        value={formData[field.name]}
        onChange={onInputChange}
        variant="standard"
        fullWidth
        autoComplete={
        field.name === "email" ? "email" :
        field.name === "password" ? "current-password" :
        field.name === "name" ? "name" : "off"
  }
/>

        ))}

        <FormButton
          variant="contained"
          color={account === 'login' ? 'primary' : 'success'}
          fullWidth
        >
          {account === 'login' ? 'Login' : 'Signup'}
        </FormButton>

        <OrText>OR</OrText>

        <FormButton
          onClick={toggleAccountView}
          variant="text"
          color="secondary"
          fullWidth
        >
          {account === 'login'
            ? 'Create an account'
            : 'Already have an account? Login'}
        </FormButton>
      </Wrapper>
    </Component>
  );
};

export default Login;
