import http from '../../http-common';

class EnergyDataService {
    getAll() {
        return http.get(`/energy/getData`);
    }
}

export default new EnergyDataService();