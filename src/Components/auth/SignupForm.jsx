import React from 'react';
import { useForm } from '@hookform/react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios'; // For potential backend validation (optional)
const signupSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
  // Add other fields as needed (e.g., username)
});

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const handleSignup = async (data) => {
    try {
      // Optional: Backend validation (e.g., using axios)
      // const response = await axios.post('/api/signup', data);
      // Handle successful backend response

      const response = await auth.createUserWithEmailAndPassword(data.email, data.password);
      console.log('Signup successful:', response);
      // Handle successful signup (e.g., redirect to login or home page)
    } catch (error) {
      console.error('Signup error:', error);
      // Handle signup errors (e.g., display error message)
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSignup)}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          {...register('email')}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
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
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
