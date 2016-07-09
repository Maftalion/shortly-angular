angular.module('shortly.links', ['shortly.services'])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  
  Links.getAll().then(function(response) {
    $scope.data.links = response;
  });

  // Links.addOne()
  // Links.addOne().then(function(response) {
  //   console.log(response);
  //   // $scope.data.links;
  // }).catch(function(err) {
  //   console.log(err);
  // });
});
