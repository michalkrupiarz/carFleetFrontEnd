(function () {
	'use strict';
	angular.module('app.carController',['app.carService'])
		.controller ('carController',carController);
		carController.$inject= ['carService', '$scope'];
		
		function carController(carService, $scope){
			var vm = this;	
			vm.cars = [];
		    vm.getCars = function(){
				carService.gAC().then(function(r){
					console.log(r);
					vm.cars=r;
				})
			}
			vm.getCars();
		};
})();
		
