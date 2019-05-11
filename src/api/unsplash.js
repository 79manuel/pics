import axios from 'axios';

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID d66889612dc007fa9b5be894857a8cd53f4f681c7722bf6e674f9719a2a4699e'
  }
});

