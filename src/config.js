const config = {
  API_URL: process.env.REACT_APP_API_URL || 'http://localhost:4000'
};

// Log the API URL during build/runtime to verify the environment variable
console.log('API URL:', config.API_URL);

export default config;