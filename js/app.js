(function(){

    var productRoot = document.querySelector('.products');
    var currentPageNumber = 1;

    var availableFilters ={
        mostViewed:app.Repository.getMostViewedProductsByPage,
        mostSold :app.Repository.getMostSoldProductsByPage,
        mostFavorite:app.Repository.getMostFavoriteProductsByPage,
        mostExpensive:app.Repository. getMostExpensiveProductsByPage,
    };
    var currentActiveFilter = "mostViewed";
    
    fetch('https://5f8dfe3e4c15c40016a1e4f7.mockapi.io/shop/products')
    .then(Response => Response.json())
    .then(Response => {
        app.products=Response;

        app.Repository.getMostViewedProductsByPage(currentPageNumber).forEach(item => {
        productRoot.appendChild(
            app.View.renderProduct(
            item.title,
            item.img,
            app.Utils.toPersianNumber(item.price),
            app.Utils.toPersianNumber( item.rankAverage),
            app.Utils.toPersianNumber(item.sold),
            app.Utils.toPersianNumber(item.views),
            
            
         
           
            )
  );

});

    app.View.renderPagination(app.products.length,20,currentPageNumber);
    app.View.renderFilters(currentActiveFilter);
    }
    );

    

    document.querySelector('.filter-list')
    .addEventListener('click',function(e){
        
        if(e.target.tagName.toLowerCase() === "a"){
            console.log(e.target.parentElement);
            var el = e.target.parentElement;
            
           
            currentActiveFilter = el.dataset.filter;
            currentPageNumber = 1;
            app.View.renderFilters(currentActiveFilter);
            app.View.renderPagination(app.products.length,20,currentPageNumber);
            console.log(currentActiveFilter);

            productRoot.innerHTML = "";
            var filterFunction = availableFilters[currentActiveFilter];
            filterFunction(currentPageNumber).forEach((item)=> {
                productRoot.appendChild(app.View.renderProduct(
                    item.title,
                    item.img,
                    app.Utils.toPersianNumber(item.price),
                    app.Utils.toPersianNumber( item.rankAverage),
                    app.Utils.toPersianNumber(item.sold),
                    app.Utils.toPersianNumber(item.views),
                    
                    
                ))
            })
            
       

        }
    });

    document
    .querySelector(".pageination")
    .addEventListener("click",function(e){
        e.preventDefault();
        if(e.target.tagName.toLowerCase() === "a"){
            currentPageNumber = +e.target.dataset.page;
            productRoot.innerHTML="";

            var filterFunction = availableFilters[currentActiveFilter];
            filterFunction(currentPageNumber).forEach((item)=> {
                productRoot.appendChild(app.View.renderProduct(
                    item.title,
                    item.img,
                    app.Utils.toPersianNumber(item.price),
                    app.Utils.toPersianNumber( item.rankAverage),
                    app.Utils.toPersianNumber(item.sold),
                    app.Utils.toPersianNumber(item.views),
                    
                    
                ))
            })
            app.View.renderPagination(app.products.length,20,currentPageNumber)
        }

    })





















/*app.products.forEach(item => {
        
        
        productRoot.appendChild(
            app.View.renderProduct(
            item.title,
            item.img,
            app.Utils.toPersianNumber(item.price),
            app.Utils.toPersianNumber( item.rankCount),
           
           
            )
  );

});*/


})();