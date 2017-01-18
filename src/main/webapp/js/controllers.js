angular.module('app.controllers',[])
	.controller('dbController',function($scope,$http)
		{	
		var link = 'http://localhost:8100/cfsh';
    
			$scope.cleanDB= function() {
	
				$http({
					method:'GET',
					url : link+'/clean',
					headers:{
						'Content-Type':'application/json'
					}
				});
				
			};
		});