# MPRNews Scraper

### Overview
 MPRNews Scraper is an application that sracpes MPRnews.org for breaking news, latest news and current news using JavaScript/jQuery for logic and MongoDB to store news articles and save notes users make. The body of the HTML site is first grabbed by Axios and then the HTML is parsed with Cheerio.js to return the title, summary, and link from MPRnews.org.This application takes away the grueling task of browsing a news site for articles by automating it. By just a click of a button the latest articles from  MPRnews.org will display along with the link to the original article on MPR. 
 
axios.get("http://www.mprnews.org/").then(function( response) {
 var $ = cheerio.load(response.data); 
... }

### MPRNews Scraper is deployed to Heroku
[Click To Go To Deployed Site](https://mprscraper.herokuapp.com)

<img width="1197" alt="screen shot 2018-11-14 at 9 19 45 pm" src="https://user-images.githubusercontent.com/39322545/48528133-40175280-e853-11e8-9e78-99b314995fbb.png">



### Technologies used
* Node.js
* express NPM Package - https://www.npmjs.com/package/express
* Cheerio NPM Package - https://www.npmjs.com/package/cheerio
* Axios  NPM Package - https://www.npmjs.com/package/axios
* Morgan NPM Package - https://www.npmjs.com/package/morgan
* Mongoose NPM Package - https://www.npmjs.com/package/mongoose
