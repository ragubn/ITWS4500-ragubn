

// Instantiate the myApp Angular application 
var app = angular.module("myApp", []);

// Javascript for the controller 
app.controller("mainController", ['$scope','$http',function($scope, $http) {

  $scope.view = 0;    
  $scope.show = 0;


	//api call to get Google news
		
  $.ajax({ url : "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=b5969a2216c24b8084b6652a0fc46753",
    dataType : "json",                         
   	success : function(parsed_json) { 
  		$scope.authorGN = parsed_json.articles[0].author;
  		$scope.titleGN = parsed_json.articles[0].title;
  		$scope.pubGN = parsed_json.articles[0].publishedAt;
  		$scope.descGN = parsed_json.articles[0].description;
    	$scope.imgSrcGN = parsed_json.articles[0].urlToImage;
  		$scope.linkGN = parsed_json.articles[0].url;
    }
  });
  		

  //api call to get national geographic news
  $.ajax({ url : "https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=b5969a2216c24b8084b6652a0fc46753",
   	dataType : "json",                         
   	success : function(parsed_json) {
      		 
      $scope.authorNG = parsed_json.articles[0].author;
      $scope.titleNG = parsed_json.articles[0].title;
    	$scope.pubNG = parsed_json.articles[0].publishedAt;
    	$scope.linkNG = parsed_json.articles[0].url;
      $scope.descNG = parsed_json.articles[0].description;
      $scope.imgSrcNG = parsed_json.articles[0].urlToImage;
    }
  });

  //api call to get tech crunch news
  $.ajax({ url : "https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=b5969a2216c24b8084b6652a0fc46753",
   	dataType : "json",                         
   	success : function(parsed_json) {	 
    	$scope.authorTC = parsed_json.articles[0].author;
    	$scope.titleTC = parsed_json.articles[0].title;
  		$scope.pubTC = parsed_json.articles[0].publishedAt;
  		$scope.linkTC = parsed_json.articles[0].url;
    	$scope.descTC = parsed_json.articles[0].description;
    	$scope.imgSrcTC = parsed_json.articles[0].urlToImage;
    	}
  });

//api call to get NASA APOD
  $.ajax({ url : "https://api.nasa.gov/planetary/apod?api_key=7nUAqkIkFoPEsiU5XDZYWDDge2lMU8bdoNyUALmQ",
		dataType : "json",                         
		success : function(parsed_json) {
  		if(parsed_json.media_type == "video"){
  		 	$scope.media = parsed_json.url;
   		}
   		else{
   			$scope.imgSrcAPOD = parsed_json.url;
   		}
  		$scope.titleNASA = parsed_json.title;
  		$scope.exp = parsed_json.explanation;
  		$scope.cw = parsed_json.copyright;

	}
	});

// Getting the current Date & Time 
  $scope.dateTime = new Date();


    

}]);
