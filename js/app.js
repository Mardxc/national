const ngApp = angular.module("app", []);

ngApp.controller("AppController", function ($scope, $http) {
  var employees = this;
  getTextsLan("data/en.json");

  function getTextsLan(url) {
    $http({
      method: "GET",
      url: url,
    }).then(
      function (response) {
        $scope.employees = response.data;
      },
      function (error, status) {
        console.error("Fail to load data", status, error);
        $scope.data = {};
      }
    );
  }
});
