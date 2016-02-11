var myApp = angular.module('pavlove', []);

myApp.controller('userController', function($scope){
	$scope.users =[];
	$scope.createUser = function(){
		var user ={
			userFirstName: $scope.userFirstName,
			userLastName: $scope.userLastName,
		};
		$scope.users.push(user);
	};
	$scope.resetUser = function(){
		$scope.userForm.$setPristine();
		document.getElementById("userInfo").reset();
	};
});

myApp.controller('currentLocationController', function($scope){
	$scope.locations =[];
	$scope.createLocation = function(){
		var location = {
			locationPlace: $scope.locationPlace,
			locationStreet: $scope.locationStreet,
			locationCity: $scope.locationCity,
			locationState: $scope.locationState,
		};
		$scope.locations.push(location);
		console.log($scope.locations);
	};
	$scope.resetLocation = function(){
		$scope.currentLocationForm.$setPristine();
		document.getElementById("userLocation").reset();
	}

});

myApp.controller('destinationController', function($scope){
	$scope.destinations = [];
	$scope.createDestination = function(){
		var destination = {
			destinationPlace: $scope.destinationPlace,
			destinationStreet: $scope.destinationStreet,
			destinationCity: $scope.destinationCity,
			destinationState: $scope.destinationState,
		};
		$scope.destinations.push(destination);
		console.log($scope.destinations);
	};

	$scope.resetForm = function(){
		$scope.destinationsForm.$setPristine();
		document.getElementById("userDestination").reset();
	};


});


