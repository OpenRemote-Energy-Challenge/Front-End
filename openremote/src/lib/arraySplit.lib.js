const _ = require('lodash');

module.exports = {
    sortArrayByItem: (array) => {
        console.log('Sort has been called')
        return _.values(_.groupBy(array, 'name'));
    }
}