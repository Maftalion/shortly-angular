angular.module('shortly.shorten', ['shortly.services', 'shortly.auth'])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function(isValid) {
    if (isValid) {
      if (Auth.isAuth()) {
        Links.addOne($scope.link)
        .then(function(res) {
          $scope.link = res;
          $location.path('/links');
        }).catch(function(err) {
          console.log(err);
        });
      } else {
        $location.path('/signin');
      }
    }
  };
});
