import axios from 'axios'

const baseURL = "http://localhost:8083/reservations";
class ReservationService {

    getAll() {
        return axios.get(baseURL);
    }
}
export default new ReservationService();