import axios from 'axios';

// Axios request used to make requests to api.github.com

export default axios.create({
    baseURL: '/api' // Change if a real api server is created
});