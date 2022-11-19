import React from 'react';
import axios from 'axios'

const baseURL = "http://localhost:8081/customers";
class ClientService {

    getAll() {
        return axios.get(baseURL);
    }
}
export default new ClientService();