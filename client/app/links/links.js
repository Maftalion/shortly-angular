angular.module('shortly.links', ['shortly.services'])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  Links.getAll().then(function(response) {
    $scope.data.links = response;
  });


});
