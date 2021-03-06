const _ = require('lodash');

module.exports = {
    extractData: (array) => {
        return _.map(array, 'value');
    },
    extractTimeStamp: (array) => {
        return _.map(array, 'timestamp');
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