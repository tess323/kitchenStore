/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Item from '../api/item/item.model'


User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });

Item.find({}).removeAsync()
  .then(() => {
    Item.create({
      name: 'Outdoor Stove',
      category: 'Outdoors',
      copy:'To The Woods',
      image: "https://source.unsplash.com/eqvj5r8nbH8/300x300",
      price:60.99,
      index: 1

    }, {
         name: 'Mason Jars Pack of 15',
          category: 'Kitchen',
          copy:'Farm Fresh',
          image: 'https://source.unsplash.com/AlwIBbFJaX8/300x300',
          price: 23,
          index: 2
    }, {
        name: 'Milk Jug',
        category: 'Outdoors',
        copy:'To The Woods',
        image: "https://source.unsplash.com/rNCnhO8XCeQ/300x300",
        price:60.99,
        index: 3
    });
  });

Thing.find({}).removeAsync()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });


