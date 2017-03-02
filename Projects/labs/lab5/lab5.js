
// Instantiate the myApp Angular application 
var app = angular.module("myApp", []);

// Javascript for the controller 
app.controller("mainController", ['$scope','$http',function($scope, $http) {
  
    //function to loop through JSON returned from server, and add to scope var
  var printTweets = function(){
  //getJson function to pull json file via express router
  $.getJSON( "./json", function( data ) {
    $scope.tweets = [];
    var json = data.statuses;

    //looping through json
    for(var i in json){
      $scope.tweets[i] = json[i].text;
    }
    console.log(data); 
    });
  };

  //function on submit ng-click, calls printTweets
  $scope.start = function(){
    printTweets();
  }
      
    
// Getting the current Date & Time 
  $scope.dateTime = new Date();
 

}]);
