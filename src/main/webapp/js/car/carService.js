(function () {
	'use strict';

	angular.module('app.carService',['app.dataFactory'])
	.service('carService',carService);

	carService.$inject = ['dataFactory','$q','$log'];
	function carService(dataFactory, $q, $log){
		return {
			getAllCars : getAllCars,
			gAC : gAC
		};
		function getAllCars(){
			var path = '/getAllCars';
			return dataFactory.getAllData(path);
		}

		function gAC(){
			var deferred = $q.defer();
			var path = '/getAllCars';
			dataFactory.getAllData(path)
				.then(cS,cF);
			function cS(cR){
				deferred.resolve(cR.data);
			}
			function cF(error){
				deferred.reject(error.data);
			}
			return deferred.promise;
		}
	}
		
	
})();
