angular.module('CardsAgainstAssembly')
.directive('card', function cardView(){
    return {
        restrict: "E",
        templateUrl: '_cardView.html',
        scope: {
            question: '@',
            answer: '@',
            answerHidden: '@',
            'swapMe':'&swapMe',
            'hideMe':'&hideMe'
        }
    };
});
