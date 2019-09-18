/*
@author: Micah Andres
@github: mandres2
@comment: Homework 13 - Pet Finder Express Node app
*/

console.log('API Route Connected Successfully');

// Link in Pets Data
var petsData = require('../data/pets');

// Includes Two Routes
function apiRoutes(app) {

  // A GET route with the url /api/pets. This will be used to display a JSON object of all possible pets.
  app.get('/api/pets', function (req, res) {
    res.json(petsData);
  });

  // A POST routes /api/pets. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
  app.post('/api/pets', function (req, res) {

    // Parse new pet input to get integers (AJAX post seemed to make the numbers strings)
    var Pets = {
      name: req.body.name,
      photo: req.body.photo,
      scores: []
    };
    var scoresArray = [];
    for(var i=0; i < req.body.scores.length; i++){
      scoresArray.push( parseInt(req.body.scores[i]) )
    }``
    newPet.scores = scoresArray;


    // Cross check the new pet entry with the existing ones
    var scoreComparisionArray = [];
    for(var i=0; i < petsData.length; i++){

      // Check each pet's scores and sum difference in points
      var currentComparison = 0;
      for(var j=0; j < newPet.scores.length; j++){
        currentComparison += Math.abs( newPet.scores[j] - petsData[i].scores[j] );
      }

      // Push each comparison between pets to array
      scoreComparisionArray.push(currentComparison);
    }

    // Determine the best match using the postion of best match in the petsData array
    var bestMatchPosition = 0; // assume its the first person to start
    for(var i=1; i < scoreComparisionArray.length; i++){

      // Lower number in comparison difference means better match
      if(scoreComparisionArray[i] <= scoreComparisionArray[bestMatchPosition]){
        bestMatchPosition = i;
      }

    }

    // ***NOTE*** If the 2 pets have the same comparison, then the NEWEST entry in the petsData array is chosen
    var bestPetMatch = petsData[bestMatchPosition];



    // Reply with a JSON object of the best match
    res.json(bestPetMatch);



    // Push the new pet to the pets data array for storage
    petsData.push(newPet);

  });

}


// Export for use in main server.js file
module.exports = apiRoutes;