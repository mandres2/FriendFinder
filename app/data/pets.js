/*
@author: Micah Andres
@github: mandres2
@comment: Homework 13 - Pet Finder Express Node app
*/

// Templated Pets Data
let petsData = [{
    name: "Dog",
    photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/04113830/Australian-Shepherd.10440112.jpg",
    scores: [3, 4, 3, 3, 4, 4, 4, 1, 5, 3]
  },
  {
    name: "Cat",
    photo: "https://static.boredpanda.com/blog/wp-content/uploads/2015/09/The-magic-of-white-cats16__880.jpg",
    scores: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
  },
  {
    name: "Rabbit",
    photo: "https://cdn.pixabay.com/photo/2017/07/13/16/10/cute-2500929_960_720.jpg",
    scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  },
  {
    name: "Goldfish",
    photo: "https://i.ytimg.com/vi/hCkt3L4MfXM/hqdefault.jpg",
    scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
  },
  {
    name: "Snake",
    photo: "https://i.ytimg.com/vi/jETaGralXg4/maxresdefault.jpg",
    scores: [5, 4, 4, 4, 4, 3, 2, 1, 5, 5]
  },
  {
    name: "Parrot",
    photo: "http://absfreepic.com/absolutely_free_photos/small_photos/cute-white-parrot-3453x2302_55435.jpg",
    scores: [2, 4, 2, 4, 2, 3, 4, 4, 4, 3]
  },
  {
    name: "Hedgehog",
    photo: "https://i.pinimg.com/originals/7d/f2/cd/7df2cdbd7e878428d7d739a6d589b90e.jpg",
    scores: [5, 4, 5, 4, 5, 3, 3, 3, 2, 4]
  }
];



// Export to API Route
module.exports = petsData;