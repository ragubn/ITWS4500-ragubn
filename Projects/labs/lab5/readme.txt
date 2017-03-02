Natasha Ragubir
lab 5

This lab is not 100% functional in terms of the requirements because I was not able to debug everything in time for the lab submission. I will go through all the things that are Not working first and then I will explain my code and how it is functioning at the moment.

First, the submit button needs to be clickd 3 times to display the tweets in the browser. It writes to file and console on one click, but I have not been able to determine why it takes two more to display the tweets in the browser. But it does display after you do those extra clicks. Second, the display of tweets is not streaming visually, I was not able to display while reading, it displays all together. Third, in order to make another, brand new search the user would have to restart the node server and clean out the tweets.json manually, as I was not able to make this an option after a search is done. Fourth, I was not able to set up the default search requirement in case there is none entered.

In terms of what is working. I do have a packages.json ready in my folder. All you need to do would be run npm install and all the dependecies I used in this lab are in there and ready to go. For my structure, I have a server.js (for backend), lab5.js (for front-end), lab.5.css, index.html, config.js (for twitter authentication variable), ragubn-tweets.json (for writing output too) and of course the package.json. I am able to run the twitter stream in the node server (as long as there is search params entered), send it to an express router, then make a get request in the client side to the router to get the json data for display back to the user.

In my server.js I create all my variables with what I will require, I have express, http, twit (for twitter get), fs (for files), and body-parser. Then I create my express app, create my server, make sure I have necessary app.use, then I make my app.post request. In here I grab the variables from my form in html, which is the search parameter and the count parameter. I also have a seperate config.js file which holds my twitter api keys. I use that for the next step, where I make my twitter get request, which returns the json file. I create a ./json express router, where I send that json data to. I also make sure to start the server. In my lab5.js, I make sure I initiate my angular application and start with js for the controller. I have an ng-click function associated with my form button which calls a function to display the tweets in a scope variable called tweets. The function, iterates thorugh the json data, and adds it to the tweets array for display. 

My code is commented so you can follow along. 


