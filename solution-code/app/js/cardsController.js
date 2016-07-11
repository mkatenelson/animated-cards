angular.module('CardsAgainstAssembly')
  .controller('cardsController', function($scope, $http){
  var self = this;

  $scope.swapMe = function(){
    $scope.answerHidden = true;
    if($scope.answerHidden === true){
         return false;
      } else {
        $scope.answerHidden = false;
        return true;
      }
  };
  $http.get('https://boiling-everglades-26445.herokuapp.com/api/flashcards')
  .then(function(response, err) {
    if (err) {
      console.log("error", err);
    }
    // success method
    for(var i = 0; i < response.data.length; i++){
      self.all.push(response.data[i]);
    }
  })

  self.all = [
    {
      cardId: 1,
      question: "What is Superman's guilty pleasure?",
      answer: "Ben Affleck",
      answerHidden: true
    },
    {
      cardId: 2,
      question: "I'm sorry I couldn't finish my homework...",
      answer: "the dog ate my laptop!",
      answerHidden: true
    },
    {
      cardId: 3,
      question: "I get by with a little help from _________.",
      answer: "John Cena!",
      answerHidden: true
    },
    {
      cardId: 4,
      question: "_________ -- It's a trap!",
      answer: "Monq's Chat room?",
      answerHidden: true
    },
    {
      cardId: 5,
      question: "The class field trip was completely ruined by _________.",
      answer: "the guy in a clown suit",
      answerHidden: true
    },
    {
      cardId: 6,
      question: "What's my secret power?",
      answer: "ngAnimate",
      answerHidden: true
    },
    {
      cardId: 7,
      question: "Why are there so many songs about rainbows?",
      answer: "Leprachauns",
      answerHidden: true
    },
    {
      cardId: 8,
      question: "Where do babies come from?",
      answer: "Netflix and Chill",
      answerHidden: true
    },
    {
      cardId: 9,
      question: "How do we do auth in Angular with Satellizer?",
      answer: "I'm glad you asked.",
      answerHidden: true
    }
  ];
});
