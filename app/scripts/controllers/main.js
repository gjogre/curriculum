'use strict';

angular.module('cvApp')
  .controller('MainCtrl', function ($scope, $location) {
		
		$scope.changeView = function(view){
            $location.path(view);
        }
   
  });
