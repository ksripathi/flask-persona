var app = angular.module('outreachApp',['ngRoute','outreachApp.controllers','outreachApp.factories']);
app.config(function($routeProvider){
    $routeProvider
        .when('/', {
	    templateUrl : '/static/partials/users.html',
	    controller  : 'users'
	})
	.when('/view-user/:id', {
	    templateUrl : '/static/partials/view-user.html',
	    controller  : 'view-user'
	});
}
);
