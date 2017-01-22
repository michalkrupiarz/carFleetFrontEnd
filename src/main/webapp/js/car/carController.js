(function () {
	'use strict';
	angular.module('app.carController',['app.carService'])
		.controller ('carController',carController);
		carController.$inject= ['carService'];
		function carController(carService){
			var vm = this;

			carService.getAllCars().then(function(r){
				vm.cars = r.data;
			})
		};
})();
		
