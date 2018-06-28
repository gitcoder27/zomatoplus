
var app = angular.module("app", [ "ngRoute" ]);

app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl : 'home.html'
	});
	$routeProvider.when('/restaurants', {
		templateUrl : 'restaurant.html',
		controller : 'restaurantCtrl'
	});
	$routeProvider.when('/items', {
		templateUrl : 'items.html',
		controller : 'itemsCtrl'
	});
	$routeProvider.when('/users', {
		templateUrl : 'users.html',
		controller : 'usersCtrl'
	});
	$routeProvider.otherwise({
		redirectTo : '/home'
	});
} ]);

app.controller("restaurantCtrl", function($scope, $http) {

	$scope.fetchRestaurant = function() {
		$http({
			method : 'GET',
			url : 'http://localhost:8080/restaurant/getAll'
		}).success(function(data, status) {
			console.log(data);
			$scope.status = status;
			$scope.restaurants = data;
		}).error(function(data, status) {
			$scope.status = status;
			$scope.data = "Request failed";
		});
	};
	
	
	$scope.saveRestaurant = function() {
		$http({
			method : 'POST',
			url : 'http://localhost:8080/restaurant/add',
			headers: { 'Content-Type': 'application/json' },
			data:$scope.restaurant
		}).success(function(data, status) {
			console.log(data);
			
			alert("Restaurant Added");
		}).error(function(data, status) {
			$scope.status = status;
			$scope.data = "Request failed";
		});
	};

});

app.controller("usersCtrl", function($scope, $http) {
	$scope.addUser = function() {
		$http({
			method : 'POST',
			url : 'http://localhost:8080/user/add',
			headers : { 'Content-Type' : 'application/json'},
			data:$scope.user
		}).success(function(data, status) {
			console.log(data);
			alert("User Added");
		}).error(function(data, status) {
			$scope.status = status;
			$scope.data = "Request failed";
		});
	};
	
	$scope.loginUser = function() {
		$http({
			method : 'POST',
			url : 'http://localhost:8080/user/login',
			headers : { 'Content-type' : 'application/json'},
			data:$scope.user
		}).success(function(data, status) {
			console.log(data);
			$scope.user=data;
			if(data){
				alert("Successful login");
				var x = document.getElementById("myTable");
				x.style.display = "block";
			}
			else
				alert("Please Add User");
		}).error(function(data, status) {
			$scope.status = status;
			$scope.data = "Request failed";
		});
	};
	
	$scope.getAll = function() {
		$http({
			method : 'GET',
			url : 'http://localhost:8080/user/getAll'
		}).success(function(data, status) {
			$scope.users = data;
		}).error(function(data, status) {
			$scope.data = "Request failed";
		});
	};
});

app.controller("itemsCtrl", function($scope, $http) {
	$scope.addItem = function() {
		$http( {
			method : 'POST',
			url : 'http://localhost:8080/restaurant/addItem',
			data : $scope.items
		}).success(function(data, status) {
			console.log(data);
			if(data)
				alert("Item Added");
			else
				alert("Restaurant Id not found");
		}).error(function(data, status) {
			$scope.status = status;
			$scope.data = "Request failed";
		});
	};
	
	$scope.getAllItems = function() {
		$http({
			method : 'GET',
			url : 'http://localhost:8080/restaurant/getAllItems'
		}).success(function(data, status) {
			$scope.items = data;
		}).error(function(data, status) {
			$scope.data = "Request failed";
		});
	};
});
