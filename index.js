const axios = require('axios');
const cheerio = require('cheerio');
const { data } = require('cheerio/lib/api/attributes');


const url = 'https://russian.rt.com/russia/article/863772-murashko-pobeda-covid-pandemiya';

axios.get(url)
   .then(response => {
      console.log(response.data);
   })
   .catch(error => {
      console.log(error);
   })

   /*let getData = html => {
      data = [];
      const $ = cheerio.load(html);
      data.push($('.article__text article__text_article-page js-mediator-article', html))

         console.log(data);
      }
   getData(response.data)*/

   let getData = html => {
      data = [];
      const $ = cheerio.load(html)
   .then(function(html) {
     console.log($('.article__text article__text_article-page js-mediator-article', data).text());
   })
   .catch(function(err) {
     //handle error
   });
   }