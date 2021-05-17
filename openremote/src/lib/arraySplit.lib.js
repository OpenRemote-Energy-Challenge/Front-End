const _ = require('lodash');

class arraySplitLib {
    sortArrayByItem(array) {
        return _.values(_.groupBy(array, 'name'));
    }
}

module.exports = arraySplitLib;