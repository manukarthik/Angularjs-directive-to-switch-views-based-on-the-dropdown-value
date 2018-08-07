// Code goes here
var app = angular.module('myapp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: "home.html",
      controller: 'HomeController'
    })
    .when('/first', {
      templateUrl: "first.html",
      controller: 'FirstController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.controller('HomeController', function($scope, $location) {});
app.controller('FirstController', function($scope, $location) {});
app.controller('mainController', function($rootScope, $scope) {
  $scope.testArray = [{
    'option': 'home'
  }, {
    'option': 'first'
  }];
  $scope.testModel = $scope.testArray[0].option;
});

app.directive('selectDirective', function() {
  return {
    scope: {
      testModel: '=',
      testArray: '=',
      go: '&'
    },
    require: 'ngModel',
    template: `<select name="testModel" ng-model="testModel" value="option.option" ng-change="Model(testModel)" ng-options="option.option for option in testArray">{{option.option}}</option> 
               <option value="" selected="selected">Select an Item</option>
                </select>`,
    replace: true,
    controller: function($scope, $location) {
      $scope.Model = function(page) {
        $location.path('/' + page.option);
      }
    }
  }
});