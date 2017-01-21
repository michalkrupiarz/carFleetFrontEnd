(function () {
	'use strict';
	angular.module('app.carController',['app.carService'])
		.controller ('carController',carController);
		carController.$inject= ['carService'];
		function carController(carService){
			var vm = this;
			vm.cars=[];
			var promiseCars = carService.getAllCars();
			promiseCars.then(
				function (payload){
					vm.cars = payload.data;
					
				});
			
			
		};
})();
		
