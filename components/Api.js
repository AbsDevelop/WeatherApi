import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://api.hgbrasil.com/weather?array_limit=1&fields=only_results,temp,city_name,forecast,max,min,date,time,description,city,humidity,wind_speedy%20&key=e8c3e0cd&city_name='
});

export default Api;