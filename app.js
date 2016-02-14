var myApp = angular.module('pavlove', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider, $location){

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
	.when('/showDestinations',{
		templateUrl: 'showDestinations.html',
		controller: 'showDestinationsController'
	})
	.otherwise({
		redirectTo: '/'
	});

	$('a').click(function(){
		$('.navbar .active').removeClass('active');
		$(this).parent().addClass('active');
	});
}]);

myApp.controller('userController',['$scope','$location', 'myService',function($scope,$location,myService){

	$scope.createUser = function(){
		var user ={
			firstName: $scope.userFirstName,
			lastName: $scope.userLastName
		};
		myService.serviceUsers.push(user);

		$('.active').removeClass('active').next('li').addClass('active');

		$location.path('/location');
	};

	$scope.resetUser = function(){
		$scope.userForm.$setPristine();
		document.getElementById("userInfo").reset();
	};
}]);

myApp.controller('currentLocationController', ['$scope','$location','myService',function($scope, $location, myService){

	$scope.createLocation = function(){
		var location = {
			locationPlace: $scope.locationPlace,
			locationStreet: $scope.locationStreet,
			locationCity: $scope.locationCity,
			locationState: $scope.locationState,
		};
		myService.locations.push(location);
		console.log(myService.locations);

		$('.active').removeClass('active').next('li').addClass('active');

		$location.path('/destination');
	};

	$scope.resetLocation = function(){
		$scope.currentLocationForm.$setPristine();
		document.getElementById("userLocation").reset();
	};
}]);

myApp.controller('destinationController',['$scope','$location', 'myService',function($scope, $location, myService){

	$scope.createDestination = function(){
		var destination = {
			destinationPlace: $scope.destinationPlace,
			destinationStreet: $scope.destinationStreet,
			destinationCity: $scope.destinationCity,
			destinationState: $scope.destinationState,
		};

		myService.destinations.push(destination);
		console.log(myService.destinations);

		$('.active').removeClass('active').next('li').addClass('active');

		$location.path('/showDestinations');
	};

	$scope.resetForm = function(){
		$scope.destinationsForm.$setPristine();
		document.getElementById("userDestination").reset();
	};
}]);

myApp.controller('showDestinationsController',['$scope', '$location', 'myService',function($scope, $location, myService){
	$scope.destiny = myService.destinations;

console.log($scope.destiny.destinationStreet);
}]);



