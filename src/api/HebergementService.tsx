import axios from 'axios'

const baseURL = "http://localhost:8082/hebergements";
class HebergementService {

    getAll() {
        return axios.get(baseURL);
    }
}
export default new HebergementService();