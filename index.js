var _ = require('lodash');

module.exports = {
    translate: function (load) {

        var options = {
            variable: 'params'
        };

        var compiledString;

        try {
            compiledString = _.template(load.source, options);
        } catch (err) {
            compiledString = _.template('Template error');
            setTimeout(function () {
                throw new Error('Error loading ' + load.address + '. ' + err.message);
            }, 0);
        }

        return 'module.exports = ' + compiledString;
    }
};
