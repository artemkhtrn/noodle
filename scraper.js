osmosis
   .get('http://apps.shopify.com/categories/sales')
   .find('.resourcescontent ul.app-card-grid')
   .follow('li a[href]')
   .find('.resourcescontent')
   .set({
       'appname': '.app-header__details h1',
       'email': '#AppInfo table tbody tr:nth-child(2) td > a'
    })
   .log(console.log)   // включить логи
   .data(console.log)