const config = {
    API_URL: process.env.NODE_ENV === 'production' 
      ? 'https://web-scrapper-gv8s.onrender.com/'  
      : 'http://localhost:4000'
  };
  
  export default config;