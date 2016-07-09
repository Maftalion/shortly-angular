angular.module('shortly.shorten', ['shortly.services'])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function() {
    Links.addOne($scope.link)
    .then(function(res) {
      console.log(res);
      $scope.link = res;
      $location.path('/links');
    }).catch(function(err) {
      console.log(err);
    });
  };
});
