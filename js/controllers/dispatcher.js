define('controllers/dispatcher', [
    'backbone',
    'underscore'
], function (Backbone, _) {
    var dispatcher = _.clone(Backbone.Events);
    return dispatcher;
});