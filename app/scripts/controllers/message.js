'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, MessageService) {
    $scope.refresh = function(){
    	MessageService.getMessages().then(function(data) {
  		$scope.messages = data;
  	});
}
	$scope.refresh();
  	$scope.text = '';
  	$scope.addMessage = function(){
  		MessageService.postMessage($scope.text).then(function(){
  			$scope.refresh();
  			$scope.text='';
  		})
  	};
});
