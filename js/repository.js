(function(){

    window.app = window.app || {};
    window.app.products =[ ];

    window.app.Repository ={

        getMostExpensiveProductsByPage:getMostExpensiveProductsByPage,
        getMostFavoriteProductsByPage:getMostFavoriteProductsByPage,
        getMostSoldProductsByPage:getMostSoldProductsByPage,
        getMostViewedProductsByPage:getMostViewedProductsByPage,
        
    };
    function getMostViewedProductsByPage(pageNumber){
        return app.products.sort((a,b) => b.views - a.views)
        .slice( (pageNumber-1)*20 , 20*pageNumber);
  

    }

    function getMostSoldProductsByPage(pageNumber){

        return app.products.sort((a,b) => b.sold - a.sold)
        .slice( (pageNumber-1)*20 , 20*pageNumber);
    }

    function getMostFavoriteProductsByPage(pageNumber){
        return app.products.sort((a,b) => b.rankAverage - a.rankAverage)
        .slice( (pageNumber-1)*20 , 20*pageNumber);

    }

    function getMostExpensiveProductsByPage(pageNumber){

        return app.products.sort((a,b) => b.price - a.price)
        .slice( (pageNumber-1)*20 , 20*pageNumber);

    }

   

   
})();

