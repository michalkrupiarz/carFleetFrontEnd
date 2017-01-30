(function () {
	'use strict';
	angular.module('app.carController',['app.carService'])
		.controller ('carController',carController);
		carController.$inject= ['carService','$scope','$mdDialog'];
		
		function carController(carService, $scope,$mdDialog){
			var vm = this;	
			vm.cars = [];
			vm.carForm={
				id:-1,
				carName:'',
				carRegistration:''
			}
		    vm.getCars = function(){
				carService.gAC().then(function(r){		
					vm.cars=r;
				})
			}
			vm.getCars();
			
			vm.editCar = function (car){
				carService.addCarToDet(car);
			};
			vm.showConfirm = function(ev) {
			    // Appending dialog to document.body to cover sidenav in docs app
			    var confirm = $mdDialog.confirm()
			          .title('Would you like to delete your debt?')
			          .textContent('All of the banks have agreed to forgive you your debts.')
			          .ariaLabel('Lucky day')
			          .targetEvent(ev)
			          .ok('Please do it!')
			          .cancel('Sounds like a scam');
			    
			    $mdDialog.show(confirm).then(function() {
			      $scope.status = 'You decided to get rid of your debt.';
			    }, function() {
			      $scope.status = 'You decided to keep your debt.';
			    });
			  };
			vm.showConfirm();
		}
})();
		
