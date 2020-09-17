const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    return self.connection.dropDatabase();
  })
  .then(() => {
    Recipe.insertMany(data)
    .then( function recipe (recipe) { for (let i = 0; i < recipe.length ; i ++) {console.log(recipe[i].title)}})
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });


  // title: 'Risotto Poulet',
  //     level: "Easy Peasy",
  //     ingredients: ['Riz', 'Poulet', 'etc'],
  //     cuisine: 'Française',
  //     dishType: 'main_course',
  //     image: "https://www.cookomix.com/wp-content/uploads/2018/04/risotto-poulet-champignons-thermomix-800x600.jpg",
  //     duration: 55,
  //     creator: 'Jorell',
  //     created: Date.now,
