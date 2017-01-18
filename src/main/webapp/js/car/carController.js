(function () {
	'use strict';
	angular.module('app.carController',['app.carService'])
		.controller ('carController',carController);
		carController.$inject= ['$scope','app.carService'];
		function carController($scope,carService){
			var vm = this;
			vm.cars = carService.getAllCars();		}
})();
		