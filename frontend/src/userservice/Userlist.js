

import axios from 'axios'

const API_GET_USER_URL = 'http://localhost:8080/getuser';

export const listUser = () => axios.get(API_GET_USER_URL);