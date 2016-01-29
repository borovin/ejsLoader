var _ = require('lodash');

module.exports = {
    translate: function (load) {

        var options = {
            variable: 'params'
        };

        return 'module.exports = ' + _.template(load.source, options);
    }
};
