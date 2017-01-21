(function () {
	'use strict';

	angular.module('app.carService',['app.dataFactory'])
	.service('carService',carService);

	carService.$inject = ['dataFactory'];
	function carService(dataFactory){
		return {
			getAllCars : getAllCars,
			getAllCarsPostProc : getAllCarsPostProc
		};
		function getAllCars(){
			var path = '/getAllCars';
			return dataFactory.getAllData(path);
		};

		function getAllCarsPostProc(){
			var path = '/getAllCars';
			return dataFactory.getAllData(path)
			.then(
				function (response){
					return response.data;
					
				});
		}
		
	}
})();
