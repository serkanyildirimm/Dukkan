import React from 'react';
import App from './App';
import AuthProvider from './src/context/AuthProvider/AuthProvider';

const Wrapper = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
export default Wrapper;
