'use strict';

angular.module('storefrontApp')
  .controller('StoreCtrl', function ($scope) {
    $scope.products=
			[
			  {
			    name: "Outdoor Stove",
			    price: 60.99,
			    copy: "To the Woods",
			    image: "https://source.unsplash.com/eqvj5r8nbH8/400x400",
			    category: "Outdoors"
			  },
			  {
			    name: "Mason Jars Pack of 15",
			    price: 15,
			    copy:"Enjoy the Sun",
			    image:"https://source.unsplash.com/AlwIBbFJaX8/400x400",
			    category: "Kitchen"


			  },
			  {
			    name: "Milk Jug",
			    price: 23,
			    copy:"Farm Fresh",
			    image:"https://source.unsplash.com/rNCnhO8XCeQ/400x400",
			    category: "Table"
			  },
			  {
			    name: "White Saucer",
			    price: 30,
			    copy:"For a Snack",
			    image:"https://source.unsplash.com/kBzK6o53BCc/400x400",
			    category: "Table"
			  },
			  {
			    name: "Barn Door Cutting Board",
			    price: 50,
			    copy:"From the Farm to your Table",
			    image:"https://source.unsplash.com/0JFveX0c778/400x400",
			    category: "Kitchen"
			  },
			  {
			    name: "Antique Coffee Grinder",
			    price: 100,
			    copy:"Bean to Bar",
			    image:"https://source.unsplash.com/BvqCLtG9msc/400x400",
			    category: "Kitchen"
			  },
			   {
			    name: "Turquoise Plates",
			    price: 150,
			    copy:"Color for your Table",
			    image:"https://source.unsplash.com/8qDTh2VuY2E/400x400",
			    category: "Table"
			  },
			   {
			    name: "Wooden Plate Rack",
			    price: 200,
			    copy:"From the Farm to your Wall",
			    image:"https://source.unsplash.com/otycVjmqAtM/400x400",
			    category: "Kitchen"
			  },
			   {
			    name: "Campfire French Press",
			    price: 25,
			    copy:"Wake up for your hike",
			    image:"https://source.unsplash.com/dPzqzWI6AO8/400x400",
			    category: "Outdoor"
			  },
			   {
			    name: "Geometric MicroClimate",
			    price: 50,
			    copy:"Farm from your Table",
			    image:"https://source.unsplash.com/Ts0830UlVOM/400x400",
			    category: "Outdoor"
			  },
			    {
			    name: "Cast Iron Grill",
			    price: 200,
			    copy:"Sautee indoors- or out",
			    image:"https://source.unsplash.com/KwnMOxpHLE4/400x400",
			    category: "Kitchen"
			  },
			    {
			    name: "Enamel Hiking Cups Pack of 4",
			    price: 50,
			    copy:"Against the Grain",
			    image:"https://source.unsplash.com/uu5PfAzu0s4/400x400",
			    category: "Outdoor"
			  },
			    {
			    name: "Fish Fry Grill",
			    price: 15,
			    copy:"From the Sea to your Grill",
			    image:"https://source.unsplash.com/3J778yWKb2w/400x400",
			    category: "Outdoor"
			  }
			]
  });
