(function () {
	'use strict';
	angular.module('app.carDetCtrl',['app.carService'])
		.controller ('carDetCtrl',carDetCtrl);
		carDetCtrl.$inject= ['carService'];
		
		function carDetCtrl(carService, $scope){
			var vm = this;	
			vm.carForm ={
				id:-1,
				carName:"",
				carRegistration:""
			};
			vm.car;
			vm.carById;
			vm.getCar = function(){
				vm.car = carService.carDet();
				vm.carForm.carName = vm.car[0].carName;
				vm.carForm.carRegistration = vm.car[0].carRegistration;
				vm.carForm.id = vm.car[0].id;
				
			}
			vm.getCar();
			
			vm.carById = function(){
				carService.getCarById().then(function(r){		
					vm.carById=r;
					console.log('r');
					console.log(r)
				})
			}
			vm.carById();
			
			
		};
})();