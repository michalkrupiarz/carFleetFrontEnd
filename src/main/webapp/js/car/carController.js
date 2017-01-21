(function () {
	'use strict';
	angular.module('app.carController',['app.carService'])
		.controller ('carController',carController);
		carController.$inject= ['carService'];
		function carController(carService){
			var vm = this;
			vm.cars = carService.getAllCars().then(function(payload){
				console.log(payload.data);
				vm.cars = payload.data;
			});
			
		};
})();
		
