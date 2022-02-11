import axios from 'axios';
/*I am using my website's server to save some time */
export default axios.create({
    baseURL: 'http://toorwelding.com',
});