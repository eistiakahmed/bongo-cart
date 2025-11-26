import axios from 'axios';

const useAxiosSecure = () => {
  const instance = axios.create({
    baseURL: 'https://bongo-cart.vercel.app',
  });
  return instance;
};

export default useAxiosSecure;
