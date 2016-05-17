//script.js

var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/BaskinRobbins')
//Use BaskinRobbins in Mongo

// Define IceCream collection / schema
var iceSchrema = mongoose.Schema({
    flavor  : {type : String},
    color   : {type: String},
    toppings : {type: Array, default: []},
    name     : {type : String},
    ingredients : {type: Array, default:[]},
    price : {type: Number},
})

//Describe to mongoose what collection should enforce this schema
var IceCream = mongoose.model('IceCream', iceSchrema)
// As part of its default behavior, mongoose will take the first argument to mongoose.model (the collection name to mongoose)
//And lowercase/pluralize it to tname the collection in MongoDB
//IceCream => icecreams

//IceCream (the variable) is now our entry point into the collection
//collection - analogous to db.icecreams

// Need to add a document to the database
// var myIceCream = {
//      flavor  : 'BubbleGum',
//     color   : 'Pink',
//     toppings : ['chocolate', 'sprinkles', 'nuts'],
//     name     : 'Bubbalicious',
//     ingredients : ['ice cream', 'rocks', 'Xantham Gum'],
//     price : 5.54,
// }

// //Running our data through the IceCream consructor to turn it into an IceCream object
// var newIce = new IceCream(myIceCream)
// // Icecream objects have a save method attached to them that will save it to hte DB
// newIce.save( function(err, doc){
//     console.log('Err : ', err)
//     console.log('Doc : ', doc)
// })

// db.icecreams.find
IceCream.find({price : {$gt : 6}}, function(err, icecreams){
    console.log('err', err)
    console.log('from the db : ', icecreams)
    // icecreams.forEach(function(cream){
    //     console.log(cream.price)
    // })
})

//End Doc

//Common mongoose methods you will use!
// On the Collection (IceCream)
//     .find()  //always returns array
//     .findOne()  //will return just the object
//     .update()
//     .remove()
//     new COLLECTION(data)

// On Documents
//     .save()
//     .markModified()

// More Advanced Methods
//     .populate() 
//     .sort()
    
