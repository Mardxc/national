const ngApp = angular.module("app", []);

ngApp.controller("AppController", function ($scope, $http) {
  var employees  = this;

  $http({
    method: "GET",
    url: "data/es.json",
  }).then(
    function (response) {
      $scope.employees  = response.data;
    },
    function (error, status) {
      console.error("Fail to load data", status, error);
      $scope.data = {};
    }
  );
});
