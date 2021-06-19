const _ = require('lodash');

module.exports = {
    extractData: (array) => {
        return _.map(array, 'value');
    },
    extractBuildings: (array) => {
        return _.uniqBy(array, 'name');
    },
    sortArrayByItem: (array) => {
        return _.values(_.groupBy(array, 'name'));
    },
    getSpecificBuilding: (array, name) => {
        return _.filter(array, (item) => item.name === name);
    }
}