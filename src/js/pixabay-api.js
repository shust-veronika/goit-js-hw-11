import axios from 'axios';
const baseUrl = 'https://pixabay.com/api/';
const apiKey = '54266757-223a8fcde2c0e71951b4feb81';

export function getImagesByQuery(query) {
       const params = {
            key: apiKey,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        };
        return axios.get(baseUrl, { params }).then(response => {
            return response.data;
        });
    };
