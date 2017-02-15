Natasha Ragubir
Lab 2: Weather App

For this lab I did not add the secure certificate, therefore I just locally opened the page from the local folder to Google.

I am using the HTML5 Geolocatoin, along with two APIs; Dark Sky API (for weather information) and MapQuest Developer API (for city, state). The reason I am using two is because for the Dark Sky API, it did not include the city, state in its JSON file, it was more of a region, like America. So I had to use reverse geocoding with the Mapquest API, by using the given latitude, longitute to display the city, state. It has been working well. I have a 1000 free calls a day for Dark Sky and 15,000 free transactions a month for MapQuest.

I have a general background, before the weather is displayed, (bc on my computer it asks if I want to allow my location to be used) it is a collage of all the different weather backgrounds. Once I click allow, the current weather is displayed in a paragraph box, it floats down and up once, then the future forecast is appended at the end, with details of hourly and weekly summaries. Along with this display the current weather icon is used to change the background of the page to an image that reflects the current weather.

I have several functions which are labeled/commented in my javascript. The function that adds the weather details to the html is my printWeather function, which uses the latitude, longitude determined from HTML5 geolocation, and makes a call to the API's. First I have an ajax request for MapQuest for the city, and state, since that will be displayed first. Then I call to Dark Sky API to pull the current weather, this also displays my first animation down the screen. After that I call a timeout function, which will call my second animation up the screen. Then there is another timeout function, which waits until after the animations are done, to append the furture forecast details to the html. There are icons displayed for that as well.

In my lab2 folder, I have my readme, html, js and css files, as well as a folder called PNG, this contains all the images that I am using in my code. 




