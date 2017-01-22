var app = angular.module('app',['app.controllers','app.carController','app.carService','app.dataFactory','ngRoute']);
	app.config(function($routeProvider)
	{
		$routeProvider
		.when('/',{
			templateUrl : ''
		})
		.when('/listCars',{
			templateUrl : 'listCars.html',
			controller : 'carController'
		})
	})