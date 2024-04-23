import React, { useState } from 'react';
import { useForm } from '@hookform/react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const LoginForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = handleSubmit((data) => onSubmit(data));

  return (
    <form onSubmit={handleLogin}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          {...register('username')}
        />
        {errors.username && <p className="error">{errors.username.message}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          {...register('password')}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
