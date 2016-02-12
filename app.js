var myApp = angular.module('pavlove', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'user.html',
			controller: 'userController'
		})
		.when('/location',{
			templateUrl: 'location.html',
			controller: 'currentLocationController'
		})
		.when('/destination',{
			templateUrl: 'destination.html',
			controller: 'destinationController'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);

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


	$('a').click(function(){
		$('.navbar li').removeClass('active');
		console.log(this);
		($(this).closest('li')).addClass('active');
	});



	// $('a').click(function(){
	// 	$('.navbar li').removeClass('active');
	// 	($(this).closest('li')).addClass('active');
	// });
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
	};
});

myApp.controller('destinationController', function($scope){

	$scope.destinations = [{destinationPlace: "Munsters",
			destinationStreet: "1313 Mockingbird Lane",
			destinationCity: "Spooky",
			destinationState: "Canada"}];

			console.log($scope.destinations);

	$scope.createDestination = function(){
		var destination = {
			destinationPlace: $scope.destinationPlace,
			destinationStreet: $scope.destinationStreet,
			destinationCity: $scope.destinationCity,
			destinationState: $scope.destinationState,
		};
		$scope.destinations.push(destination);
	};

	$scope.resetForm = function(){
		$scope.destinationsForm.$setPristine();
		document.getElementById("userDestination").reset();
	};
});



