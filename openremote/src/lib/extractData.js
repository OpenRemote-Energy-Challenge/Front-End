const _ = require('lodash');

module.exports = {
    extractData: (array) => {
        return _.map(array, 'value');
    }
}