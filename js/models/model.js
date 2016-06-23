define('models/model', [

    'backbone'

], function (

    Backbone

) {

    var SampleModel = Backbone.Model.extend({

        initialize : function () {
            console.dir(this);
        },

        getData : function () {

        },

        listenEvents : function () {
            this.on('change', this.getData, this);
        }

    });

    return SampleModel;

});