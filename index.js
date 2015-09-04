var _ = require('bower_components/lodash/lodash.js');

module.exports = {
    translate: function(load) {

        var options = {
            variable: 'params'
        };

        return 'module.exports = ' + _.template(load.source, options);
    }
};