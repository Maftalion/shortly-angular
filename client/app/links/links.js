angular.module('shortly.links', ['shortly.services', 'shortly.auth'])

.controller('LinksController', function ($scope, Links, Auth) {
  // Your code here
  $scope.data = {};
  
  Links.getAll().then(function(response) {
    if (Auth.isAuth()) {
      $scope.data.links = response;
    } else {
      $location.path('/signin');
    }
  });
});
