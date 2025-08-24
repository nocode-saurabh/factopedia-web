const config = {
  API_URL: process.env.REACT_APP_API_URL || 'http://localhost:4000'
};

// Debug information
console.log('Environment:', process.env.NODE_ENV);
console.log('API URL from env:', process.env.REACT_APP_API_URL);
console.log('Final API URL:', config.API_URL);

export default config;