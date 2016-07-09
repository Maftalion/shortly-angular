angular.module('shortly.shorten', ['shortly.services'])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function() {
    Links.addOne($scope.link)
    .then(function(res) {
      $scope.link = res.data;
      $location.path('/links');
    }).catch(function(err) {
      console.log(err);
    });
  };
});
