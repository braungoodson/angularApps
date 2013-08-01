;var demoApp = angular.module('demoApp',[])

.config(function ($routeProvider) {
	$routeProvider
		.when('/',{
			controller: 'SimpleController',
			templateUrl: 'View1.html'
		})
		.when('/view2',{
			controller: 'SimpleController',
			templateUrl: 'View2.html'
		})
		.otherwise({redirectTo:'/'})
})

//.factory('simpleFactory', function ($http) {

.factory('simpleFactory', function () {

	var factory = {};

	var customers = [
		{name:"Braun Goodson", city:"Boston"},
		{name:"Will Donovan", city:"New York"},
		{name:"Sam Graham", city:"Los Angeles"},
		{name:"Sally Sue", city:"Houston"},
		{name:"Mike Bryant", city:"Chicago"}
	];

	factory.getCustomers = function () {
		return customers;
	}

	factory.postCustomer = function (customer) {

	}

	return factory;

})

.controller('SimpleController',function ($scope,simpleFactory) {
	$scope.customers = [];

	init();

	function init () {
		$scope.customers = simpleFactory.getCustomers();
	}

	$scope.addCustomer = function () {
		$scope.customers.push({
			name:$scope.newCustomer.Name,
			city:$scope.newCustomer.City
		})
	};
})