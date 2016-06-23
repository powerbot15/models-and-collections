define('models/collection', [

    'backbone',
    'models/model',
    'controllers/dispatcher'

], function (

    Backbone,
    CustomModel,
    dispatcher

) {

    var SampleCollection = Backbone.Collection.extend({

        model : CustomModel,

        initialize : function () {
            dispatcher.trigger('customEvent', this);
        }

    });

    return SampleCollection;

});