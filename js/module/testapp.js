//声明模块
var indexApp = angular.module('indexApp', []);

// 声明service
indexApp.service('listService', function() {
	this.addOneRecord = function(list) {
		console.log(list);
		var one = eval("[{name:'new',gender:'male',age:1}]");
		console.log(one);
		list.push(one[0]);
		console.log('after:' + list);
	};
});

// 声明controller
indexApp.controller('IndexController', function($scope, $http, listService) {

	$scope.user = "Angular";
	$scope.sb = {
		name : 'name',
		gender : 'male',
		age : 28
	};
	$scope.list = [ {
		name : 'name1',
		gender : 'male',
		age : 28
	}, {
		name : 'name2',
		gender : 'female',
		age : 30
	}, {
		name : 'name3',
		gender : 'female',
		age : 10
	}, {
		name : 'name4',
		gender : 'male',
		age : 5
	} ];
	$scope.url = '/web/test/api/getUser';

	$scope.sayHello = function() {
		alert('Hello! \n$scope.sb.name:' + $scope.sb.name + ";\nyourname:"
				+ $scope.yourname);
	};

	$scope.addOneServiceTrigger = function() {
		console.log($scope);
		listService.addOneRecord($scope.list);
	};
	
	
//	$scope.valueViaHttp = null;

});