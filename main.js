var app = angular.module('myClock',[]);



app.controller('clockTime', function($scope, $interval){
	window.scope = $scope
	var balls = true
	$scope.view={}
	$scope.alarm = false;
	$scope.alarmTime = 1;
	var audio = new Audio('airHorn.wav');
	var tick = function() {
	 $scope.view.time = Date.now();
	 console.log($scope.view.time)
	  if($scope.view.time > $scope.alarmTime && balls === false){
	  	console.log($scope.alarmTime)
	  	audio.play()
	  }
	}
	tick();
	$interval(tick, 1000);
	$scope.timeCheck = function(){
	}


	$scope.alarmSet = function(){
		$scope.alarmTime = (Date.now() + 5000)
		console.log('click:' + $scope.alarmTime)
		balls = false
	}
	
})