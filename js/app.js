const ngApp = angular.module("app", []);

ngApp.controller("AppController", function ($scope, $http) {
  var data = this;

  $scope.getTextsLan = function (url) {
    $http({
      method: "GET",
      url: url,
    }).then(
      function (response) {
        $scope.data = response.data;
      },
      function (error, status) {
        console.error("Fail to load data", status, error);
        $scope.data = {};
      }
    );
  };

  $scope.getTextsLan("data/es.json");
});
$(function () {
  $(".carousel").carousel({
    interval: 2500,
    ride: false,
    cycle: false,
  });
});
