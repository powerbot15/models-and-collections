define('controllers/director', [

    'models/collection',

    'models/model',

    'controllers/dispatcher'

], function (

    SampleCollection,

    SampleModel,

    dispatcher

) {

    dispatcher.on('customEvent', function (data) {
        console.log('custom event');
        console.dir(data);
    });

    var collection = new SampleCollection ([]);

    //collection.on('add', function (model) {
    //    console.dir(model.get('color'));
    //    console.dir(model.toJSON());
    //});

    collection.add([{color : 'red'}, {color : 'green'}, {color : 'blue'}]);



    //var model = new SampleModel();
    //
    //model.set({
    //    name : 'John',
    //    age : 20,
    //    profession : 'Writer'
    //});

    //console.dir(collection);
    //
    //console.dir(model);

});