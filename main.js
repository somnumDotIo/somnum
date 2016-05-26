var app = angular.module('myClock',[]);



app.controller('clockTime', function($scope, $interval){
	window.scope = $scope
	$scope.alarm = false;
	$scope.view={}
	var tick = function() {
	  $scope.view.time = Date.now();
	  if($scope.alarm === true){
	  	audio.play()
	  }
	}
	tick();
	$interval(tick, 1000);
	var audio = new Audio('airHorn.wav');
	$scope.timeCheck = function(){
	}

	$scope.sound = function(){
		audio.play()
	}
})