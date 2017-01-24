(function () {
	'use strict';

	angular.module('app.carService',['app.dataFactory'])
	.service('carService',carService);

	carService.$inject = ['dataFactory','$q','$log'];
	function carService(dataFactory, $q, $log){
		return {
			gAC : gAC,
			carDet : carDet,
			addCarToDet : addCarToDet
		};

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
		
		var carDetList = [];
		
		function addCarToDet(car){
			var tempCarDetList = [];
			tempCarDetList.push(car);
			carDetList = tempCarDetList;
			console.log('this is car Detlist ');
			console.log(carDetList)
		}
		
		function carDet(){
			console.log('here should be a car det list ' +carDetList);
			console.log(carDetList)
			return carDetList;
		}
	}
		
	
})();
