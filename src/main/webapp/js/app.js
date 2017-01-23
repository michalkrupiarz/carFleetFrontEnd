var app = angular.module('app',['app.controllers','app.carController','app.carService','app.dataFactory','ngRoute','ui.bootstrap'
	,'ui.layout','ngMaterial']);
	app.config(function($routeProvider)
	{
		$routeProvider
		.when('/',{
			templateUrl : '/index.html'
		})
		.when('/listCars',{
			templateUrl : 'js/car/listCars.html',
			controller : 'carController',
			controllerAs : 'CC'
			
		}).otherwise({
			templateUrl: '/index.html'
		})
	})
