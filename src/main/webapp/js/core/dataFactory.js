(function () {
	'use strict';

	angular.module('app.dataFactory',[])
	
	.factory('dataFactory', dataFactory);
	
	dataFactory.$inject = ['$http'];

	var link = 'http://localhost:8100/cfsh';

	function dataFactory($http) {
		return {
			getAllData : getAllData
		};

		function getAllData(path){
			$http({
				method : 'GET',
				url : link+path
			}).then(function successCallback(response){
				return response.data;
			}, function errorCallback(response){
				console.log(response.statusText);				
			})	
		}
	}

})();

