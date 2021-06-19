import http from '../../http-common';

class SolarDataService {
    getAll() {
        return http.get(`/solar/getData`);
    }
}

export default new SolarDataService();