var myApp = angular.module('pavlove', ['ngRoute', 'uiGmapgoogle-maps']);

myApp.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCqcFBWN6sYDEuu_cigq3zBU0cBIOA7Xrw',
        v: '3.23',
        libraries: 'weather,geometry,visualization'
    });
});

myApp.config(['$routeProvider', function($routeProvider, $location) {

    $routeProvider
        .when('/', {
            templateUrl: 'user.html',
            controller: 'userController'
        })
        .when('/location', {
            templateUrl: 'location.html',
            controller: 'currentLocationController'
        })
        .when('/destination', {
            templateUrl: 'destination.html',
            controller: 'destinationController'
        })
        .when('/showDestinations', {
            templateUrl: 'showDestinations.html',
            controller: 'showDestinationsController'
        })
        .when('/getGeoLocation', {
            templateUrl: 'getMap.html',
            controller: 'getMapController'
        })
        .otherwise({
            redirectTo: '/'
        });

    $('a').click(function() {
        $('.navbar .active').removeClass('active');
        $(this).parent().addClass('active');
    });
}]);

myApp.controller('userController', ['$scope', '$location', 'myService', function($scope, $location, myService) {

    $scope.createUser = function() {
        var user = {
            firstName: $scope.userFirstName,
            lastName: $scope.userLastName
        };
        myService.serviceUsers.push(user);

        $('.active').removeClass('active').next('li').addClass('active');

        $location.path('/location');
    };

    $scope.resetUser = function() {
        $scope.userForm.$setPristine();
        document.getElementById("userInfo").reset();
    };
}]);

myApp.controller('currentLocationController', ['$scope', '$location', 'myService', function($scope, $location, myService) {

    $scope.createLocation = function() {
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

    $scope.resetLocation = function() {
        $scope.currentLocationForm.$setPristine();
        document.getElementById("userLocation").reset();
    };
}]);

myApp.controller('destinationController', ['$scope', '$location', 'myService', function($scope, $location, myService) {

    $scope.createDestination = function() {
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

    $scope.resetForm = function() {
        $scope.destinationsForm.$setPristine();
        document.getElementById("userDestination").reset();
    };
}]);

myApp.controller('showDestinationsController', ['$scope', '$location', 'myService', function($scope, $location, myService) {
    $scope.destiny = myService.destinations;

    console.log($scope.destiny.destinationStreet);
}]);

myApp.controller('getMapController', ['$scope', 'uiGmapGoogleMapApi', function($scope, uiGmapGoogleMapApi) {
    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoom: 8
    };
    uiGmapGoogleMapApi.then(function(maps) {
        console.log(maps);

    });

    $scope.getMapLocation = function() {
        $scope.mapInfo = document.getElementById('CoordinatesPlace');
        console.log($scope.mapInfo);

        if (!navigator.geolocation) {
            $scope.mapInfo.innerHTML = "<p> Not Supported</p>";
            return;
        }
        $scope.success = function(position) {
            $scope.latitude = position.coords.latitude;

            $scope.longitude = position.coords.longitude;
            console.log($scope.latitude, $scope.longitude);

            $scope.mapInfo.innerHTML = "The coordinates are: <br/>Longitude  " + $scope.longitude + "<br/>Latitude  " + " " + $scope.latitude + "<br/>";
            $scope.img = new Image();
            $scope.img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + $scope.latitude + "," + $scope.longitude + "&zoom=13&size=300x300&sensor=false";

            $scope.mapInfo.appendChild($scope.img);

        };

        $scope.error = function() {
            $scope.mapInfo.innerHTML = "Unable to get location";
        };

        navigator.geolocation.getCurrentPosition($scope.success, $scope.error);

    };

}]);