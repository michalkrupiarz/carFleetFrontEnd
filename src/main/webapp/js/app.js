var app = angular.module('app',['app.controllers','app.carController','app.carService','app.dataFactory','ngRoute','ui.bootstrap'
	,'ui.layout','ngMaterial','app.carDetCtrl']);
	app.config(function($routeProvider)
	{
		$routeProvider
		.when('/index',{
			templateUrl : '/index.html'
		})
		.when('/listCars',{
			templateUrl : 'js/car/listCars.html',
			controller : 'carController',
			controllerAs : 'CC'
			
		})
		.when('/selectedCar',{
			templateUrl : 'js/car/selectedCar.html',
			controller : 'carDetCtrl',
			controllerAs : 'CDC'
		})
		.otherwise({
			templateUrl: '/index.html'
		})
	})
