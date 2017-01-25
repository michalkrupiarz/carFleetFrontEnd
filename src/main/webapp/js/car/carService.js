(function () {
	'use strict';

	angular.module('app.carService',['app.dataFactory'])
	.service('carService',carService);

	carService.$inject = ['dataFactory','$q','$log'];
	function carService(dataFactory, $q, $log){
		return {
			gAC : gAC,
			carDet : carDet,
			addCarToDet : addCarToDet,
			getCarById : getCarById
		};

		function gAC(){
			var deferred = $q.defer();
			var path = '/getAllCars';
			dataFactory.getData(path)
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
			
		}
		
		function carDet(){
			
			return carDetList;
		}
		function getCarById(){
			var deferred = $q.defer();
			var path = '/getCar/'+carDetList[0].id;
			dataFactory.getData(path)
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
