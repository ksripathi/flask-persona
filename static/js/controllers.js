var app = angular.module('outreachApp.controllers',[]);
app.controller("users", function($scope, dataFactory, $http, $routeParams, $route,$window) {
    $scope.users = [{"name":"sripathi", "id" : 1}, {"name":"raghu", "id": 2}];
    /*
    dataFactory.fetch("/users/"+$window.number).success(function(response){
        $scope.user = response;
    });
    
    dataFactory.fetch("/users/"+$routeParams.id).success(function(response){
        $scope.oc_user = response;
        
    });
    dataFactory.fetch("/reference_documents?user_id=1").success(function(response){
        $scope.documents = response;
    });
    $scope.deldoc =  function(id)
    {
        if(confirm("Are you sure!") == true){
            dataFactory.del("/reference_documents/"+id).success(function(response){
                $route.reload();
            }).error(function(data, status){
                
            });
            
        }
    }
    
    $scope.edit_oc = function(isvalid){
        if(isvalid){
            data = {'name' : $scope.oc_user.name,'email' : $scope.oc_user.email, 'institute_name' : $scope.oc_user.institute_name };
            dataFactory.put("/users/"+$routeParams.id, data).success(function(response){
                history.back();
            }).error(function(data, status, headers, config){
                if(status == 500){
                    $scope.status = "Duplicate Entry";
                }
                else if(status == 400){
                    $scope.status = "Invalid username"
                }
                else{
                    $scope.status = "Failed"
                }
            });
            
        }
        else{
            $scope.status = "Fill Details"
        }
    }
    
    */
});
app.controller("view-user", function($scope, dataFactory, $http, $routeParams, $route,$window) {
    $scope.id = $routeParams.id;
//    alert($window.number);
    $scope.user_id = $window.number;
    $scope.name = "sripathi";
    $scope.email = "kammari.sripathi@gmail.com";
});
