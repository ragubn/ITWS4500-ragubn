$(document).ready(function () {
  // wire up button click

    // test for presence of geolocation
  if(navigator && navigator.geolocation) {
      // make the request for the user's position
    navigator.geolocation.getCurrentPosition(geo_success, geo_error);
  } else {
      // use MaxMind IP to location API fallback
    printWeather(geoip_latitude(), geoip_longitude(), true);
  }

});
 

 // function for sucess, will call printWeather function to populate HTML
function geo_success(position) {
  printWeather(position.coords.latitude, position.coords.longitude);
}
 
 // Function if Error
function geo_error(err) {
  // instead of displaying an error, fall back to MaxMind IP to location library
  printWeather(geoip_latitude(), geoip_longitude(), true);
}
 
// function to print weather details, uses Dark Sky api for weather, and mapquest
// for reverse geocoding to get location (city,state)
function printWeather(latitude, longitude, isMaxMind) {


  //Mapquest reverse Geocoding to get City, State from Lat,Long
  $.ajax({ url : "https://www.mapquestapi.com/geocoding/v1/reverse?key=VQUE8EcKcwZzh5N7LSbleVjMsqDKa4CQ&location=" + 
    latitude +"," + longitude + "&outFormat=json&thumbMaps=false",
    dataType : "json",                         
    success : function(parsed_json) {
      var loca = "<h1>" + parsed_json.results[0].locations[0].adminArea5 + ", " + parsed_json.results[0].locations[0].adminArea3 + "</h1>";
      $('#demo').html(loca) 
    }

  });
  
  //Reqest for weather details from Dark Sky
  $.ajax({ url : "https://api.darksky.net/forecast/18aa250a9e236e3b1c37a46fcf016a6b/" +
    latitude + ","+ longitude,
    dataType : "jsonp",                         
    success : function(parsed_json) {
      var temp_f = parsed_json['currently']['temperature'];
      var summary = parsed_json['currently']['summary'];
      var humidity = parsed_json['currently']['humidity'];
      var windspeed = parsed_json['currently']['windSpeed'];
      var icon = parsed_json['currently']['icon'];
  
      //if statements to change background image and define weather icon
      if(icon == "rain"){
        var img = '<img src="PNG/rain.png" />';
        document.body.style.backgroundImage = "url('PNG/rain.jpg')";
      }
      if(icon == "sleet"){
        var img = '<img src="PNG/sleet.png" />';
        document.body.style.backgroundImage = "url('PNG/sleet.jpg')";
      }
      if(icon == "snow"){
        var img = '<img src="PNG/snow.png" />';
        document.body.style.backgroundImage = "url('PNG/snow.jpg')";
      }
      if(icon == "wind"){
        var img = '<img src="PNG/wind.png" />';
        document.body.style.backgroundImage = "url('PNG/wind.jpg')";
      }
      if(icon == "fog"){
        var img = '<img src="PNG/fog.png" />';
        document.body.style.backgroundImage = "url('PNG/fog.jpg')";
      }
      if(icon == "clear-day"){
        var img = '<img src="PNG/clear-day.png" />';
        document.body.style.backgroundImage = "url('PNG/clear-day.jpg')";
      }
      if(icon == "clear-night"){
        var img = '<img src="PNG/clear-night.png" />';
        document.body.style.backgroundImage = "url('PNG/clear-night.jpg')";
      }
      if(icon == "partly-cloudy-night"){
        var img = '<img src="PNG/partly-cloudy-night.png" />';
        document.body.style.backgroundImage = "url('PNG/partly-cloudy-night.jpg')";
      }
      if(icon == "cloudy"){
        var img = '<img src="PNG/cloudy.png" />';
        document.body.style.backgroundImage = "url('PNG/cloudy.jpg')";
      }
      if(icon == "partly-cloudy-day"){
        var img = '<img src="PNG/partly-cloudy-day.png" />';
       document.body.style.backgroundImage = "url('PNG/partly-cloudy-day.jpg')";
      }

      //var to format text
      var complete = ("<h2>Current Weather:</h2><br>" + img + "<br>" + summary + 
      "<br>Temperature: " + temp_f + " &deg; F <br> Humidity: " + humidity
      + "% <br> Windspeed: " + windspeed + " mph");

      //adding text to html
      $('#demo').append(complete)  

      //animating 
      document.getElementById("demo").className = "animate";

      //call to transition to next animation and future forecast
      time();
    }
  });
    
//timeout function that appends future forecast to weather display
setTimeout(function (){

  //call to api to get hourly / weeky summaries / icons
  $.ajax({ url : "https://api.darksky.net/forecast/18aa250a9e236e3b1c37a46fcf016a6b/" +
    latitude + ","+ longitude,
    dataType : "jsonp",                         
    success : function(parsed_json) {

      //assigning summaries and icons
      var hourly = parsed_json['hourly']['summary'];
      var hourlyicon = parsed_json['hourly']['icon'];
      var daily = parsed_json['daily']['summary'];
      var dailyicon = parsed_json['daily']['icon'];

      //if statements to assign hourly , daily icons
      if(hourlyicon == "rain"){
        var img = '<img src="PNG/rain.png" />';
      }
      if(hourlyicon == "sleet"){
        var img = '<img src="PNG/sleet.png" />';
      }
      if(hourlyicon == "snow"){
        var img = '<img src="PNG/snow.png" />';
      }
      if(hourlyicon == "wind"){
        var img = '<img src="PNG/wind.png" />';
      }
      if(hourlyicon == "fog"){
        var img = '<img src="PNG/fog.png" />';
      }
      if(hourlyicon == "clear-day"){
        var img = '<img src="PNG/clear-day.png" />';
      }
      if(hourlyicon == "clear-night"){
        var img = '<img src="PNG/clear-night.png" />';
      }
      if(hourlyicon == "partly-cloudy-night"){
        var img = '<img src="PNG/partly-cloudy-night.png" />';
      }
      if(hourlyicon == "cloudy"){
        var img = '<img src="PNG/cloudy.png" />';
      }
      if(hourlyicon == "partly-cloudy-day"){
        var img = '<img src="PNG/partly-cloudy-day.png" />';
      }

       if(dailyicon == "rain"){
        var img2 = '<img src="PNG/rain.png" />';
      }
      if(dailyicon == "sleet"){
        var img2 = '<img src="PNG/sleet.png" />';
      }
      if(dailyicon == "snow"){
        var img2 = '<img src="PNG/snow.png" />';
      }
      if(dailyicon == "wind"){
        var img2 = '<img src="PNG/wind.png" />';
      }
      if(dailyicon == "fog"){
        var img2 = '<img src="PNG/fog.png" />';
      }
      if(dailyicon == "clear-day"){
        var img2 = '<img src="PNG/clear-day.png" />';
      }
      if(dailyicon == "clear-night"){
        var img2 = '<img src="PNG/clear-night.png" />';
      }
      if(dailyicon == "partly-cloudy-night"){
        var img2 = '<img src="PNG/partly-cloudy-night.png" />';
      }
      if(dailyicon == "cloudy"){
        var img2 = '<img src="PNG/cloudy.png" />';
      }
      if(dailyicon == "partly-cloudy-day"){
        var img2 = '<img src="PNG/partly-cloudy-day.png" />';
      }

      //adding to html
      $('#demo').append("<br><br> <h2> Forecast Ahead: </h2> <br> Hourly: " + hourly + "<br>" + img + "<br>Daily: " + daily + "<br>" + img2) 
    }
  });
  }, 14400); 


  //calls animation after timeout
  function time(hourly){
    t = setTimeout("move()",7200);
  }

}

//function to animate second time
function move() {  
  document.getElementById("demo").className = "animate2";
}

 //error function
function error(msg) {
  alert(msg);
}

