var app = angular.module('outreachApp.controllers',[]);
app.controller("users", function($scope, dataFactory, $http, $routeParams, $route,$window)
               {
                 $scope.users = [{"name":"sripathi", "id" : 1}, {"name":"raghu", "id": 2}];
               });
app.controller("view-user", function($scope, dataFactory, $http, $routeParams, $route,$window)
               {
                 $scope.id = $routeParams.id;
                 $scope.user_id = $window.number;
                 $scope.name = "sripathi";
                 $scope.email = "kammari.sripathi@gmail.com";
               });
