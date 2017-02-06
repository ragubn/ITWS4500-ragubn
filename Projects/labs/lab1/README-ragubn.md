Name: Natasha Ragubir
Lab: 1

For this lab, I have two tweet tickers displayed on my webpage. On the left is the main ticker, scrolling every 3 seconds, and always maintaing 5 tweets visible. To make sure I can have the image and text together, I use figures.

The second ticker, scrolls ever 6 seconds and always displays 6, and displays some facts about the users, such as how many friends they have, who they recently retweeted and how many friends that person has as well. Since I didn't use images in this case, I used paragraphs instead of figures. 

In my javascript, for both tickers I use a for loop to display the first five tweets/facts, before I start animation. Once those are displayed I can call my ticker function which is recrusive. Each ticker function has an end case, which is, if it has reached the end (determined by length) of the json array. For the first ticker, I check to make sure the image url is valid, and if not I replace the image url with a default of the twitter logo. I also check to make sure there is text to display, if not then I skip over it. For ticker2, I also have a check to determine if there is a retweeted_status, if not then I skip. 

The styling is very simple and themed blue, to resemble twitter. I use bootstrap columns, and HTML5 to achieve desired look. 

My code is commented, so you can follow along.
