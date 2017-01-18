(function () {
	'use strict';

	angular.module('app.carService',['app.dataFactory'])
	.service('carService',carService);

	carService.$inject = ['app.dataFactory'];
	function carService(dataFactory){
		return {
			getAllCars : getAllCars
		};
		function getAllCars(){
			var path = '/getAllCars';
			return dataFactory.getAllData(path);
		}
		
	}
})();