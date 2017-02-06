
$(document).ready(function() {
  //varibles for the 2 containers
  var $container = $('#innerTwitter');
  var $container2 = $('#outerTwitter');
  $.getJSON('twittertweets17.json', function(jd) {
    $container.empty();

      //variable to keep count
      var $x = 0;
      
      //for loop to display five tweets before animation / transition begins  
      for(var i in jd){

        //makes sure to check there is text to display before output
        if(typeof jd[i].text !== "undefined"){
          $x = $x+1;
          // var $tweet = $(document.createElement('p'));
       
          var n = document.createElement('img'); // create an image element

          //function to determine if URL is valid
          function fileExists(url) {
            if(url){
              var req = new XMLHttpRequest();
                req.open('GET', url, false);
                req.send();
                return req.status==200;
            } else {
              return false;
            }
          }

          //function call to determine if file is valid, if it is then I use given url, if not I use default
          if(fileExists(jd[i].user.profile_image_url) == true){
            n.src = jd[i].user.profile_image_url; 
          }
          else{
            n.src = "https://pbs.twimg.com/profile_images/767879603977191425/29zfZY6I_bigger.jpg";
          }


          //creating html5 figure to hold img and text together
          var $line = $(document.createElement('figure'))
          var $line2 = $(document.createElement('figcaption'))
          $line2.text(jd[i].text);
          $line.append(n);
          $line.append($line2);
          
          if($x<6){
            // append the figure to the container 1
            $container.append($line);
          } 
        }
      };

    
      //length of json array
      $len = jd.length;

    

      //this is the recursive function that will be called to display the tweet animation, the variable r is passed in which will be ued to keep track of place in json arrary
      var ticker = function(r) {
        //condition to end recursion
        if(r >= $len){
          return 1;
        }
        //if there is no text, then just call ticker function and increment 
        if(typeof jd[r].text == "undefined"){
          ticker(r+1);
        }
        else{
          //timeout function to remove and append tweet
          setTimeout(function() {

            //finds first p in container and removes it
            var $par = $container.find('figure:first');
            $par.remove();

            //create img, figure and figcaption elements, and append to container

            var n = document.createElement('img'); // create an image element
          
            //function to check if url valid, same as above
            function fileExists(url) {
              if(url){
                var req = new XMLHttpRequest();
                req.open('GET', url, false);
                req.send();
                return req.status==200;
              } else {
                return false;
              }
            }
            if(fileExists(jd[r].user.profile_image_url) == true){
              n.src = jd[r].user.profile_image_url; 
            }
            else{
              n.src = "https://pbs.twimg.com/profile_images/767879603977191425/29zfZY6I_bigger.jpg";
            }
            //creating figure
            var $line = $(document.createElement('figure'))
            var $line2 = $(document.createElement('figcaption'))
            $line2.text(jd[r].text);
            $line.html(n);
            $line.append($line2);
            //appending figure
            $container.append($line);
            
            //recursive call
            ticker(r+1);
          }, 3000);
        }
      };
      var $y = 5;
      //initial call to ticker function
      ticker($y);


      //simlar to ticker function, just displaying different data in second container
      var ticker2 = function(r) {
        //condition to end recursion
        if(r >= $len){
          return 1;
        }
        //makes sure there is a retweeted status, bc not everyone retweeted
        if(typeof jd[r].retweeted_status !== "undefined"){
          //timeout function to remove and append tweet
          setTimeout(function() {

            //finds first p in container and removes it
            var $par2 = $container2.find('p:first');
            $par2.remove();

            //create p element, get tweet, and append to container
            var $tweet2a = $(document.createElement('p'));
            $tweet2a.text(jd[r].user.name + ' has a friend count of ' + jd[r].user.friends_count  +' and recently retweeted ' + jd[r].retweeted_status.user.name + ' who has a friend count of ' + jd[r].retweeted_status.user.friends_count);
            $container2.append($tweet2a);
            
            //recursive call
            ticker2(r+1);
          }, 6000);
        }
        else{
          ticker2(r+1);
        }
      };

      //variable to keep count
      var $x2 = 0;
      //loop to display five, before animation/transition begins
      for(var i in jd){
        if(typeof jd[i].retweeted_status !== "undefined"){
          $x2 = $x2+1;

          var $tweet2 = $(document.createElement('p'));
          $tweet2.text(jd[i].user.name + ' has a friend count of ' + jd[i].user.friends_count  +' and recently retweeted ' + jd[i].retweeted_status.user.name + ' who has a friend count of ' + jd[i].retweeted_status.user.friends_count);
          if($x2<7){
            $container2.append($tweet2);
          } 
        }
      };

      var $z = 8;
      //initial call to ticker2 function
      ticker2($z);
  });   
});

