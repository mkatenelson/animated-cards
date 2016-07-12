var app = angular.module('CardsAgainstAssembly', ['ngAnimate']);

app.directive("hideMe", function($animate){
  return function(scope, element, attrs){
    scope.$watch(attrs.hideMe, function(){
      if(attrs.hideMe){
        $animate.removeClass(element, "hidden");
      } else {
        $animate.addClass(element, "hidden");
      }
    });
  };
});

app.animation(".hidden", function (){
  console.log('hello');
  return {
    addClass: function(element, className){
      TweenMax.to(element, 1, {opacity: 0});
    },
    removeClass: function(element, className){
      console.log('remove class');
    }
  };
});
