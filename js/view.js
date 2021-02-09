(function(){

    window.app =window.app || {};

    window.app.View ={

        renderProduct : renderProduct,
        renderPagination : renderPagination,
        renderFilters: renderFilters
     
    }
 
    function createElement(tagName,attribute,content)
    {
       var el = document.createElement(tagName);

       for(var key in attribute){
        el.setAttribute(key , attribute[key]);
       }
       if(typeof content !== "undefined" ){
        
            if(content instanceof HTMLElement){
                el.appendChild(content);
            }else{
                el.innerText = content;
            }

        
       }
    return el;
    }

 function renderProduct(
    productTitle,
    imgSrc,
    productPrice,
    rankAverage,
    sold,
    views,
    
    ){

    var container = createElement("section", {class:"product"});
    var image = createElement ("img", {class:"cover" , src : imgSrc});
    var title =createElement("h3", {class:"title"}, productTitle);
    var rank = createElement("p", {class :"rank"});
    var rankStar = createElement("i" , {class :"far fa-star"});
    var views = createElement("p", {class :"views"}, `${views}`);
    var seen = createElement("i" , {class :"far fa-eye"});
    var price = createElement("p" , {class:"price"}, `${productPrice} تومان`);
    var sold = createElement("p" , {class:"sold"}, `${sold} تعداد فروخته شده`);
    
    
    rank.appendChild(rankStar);
    rank.innerHTML += `${rankAverage}`; 
    views.appendChild(seen);
    container.appendChild(image);
    container.appendChild(title);
    container.appendChild(rank);
    container.appendChild(views);
    container.appendChild(sold);
    container.appendChild(price);
    
    
  

    return container;
    

 }  
                               
 function renderPagination(totalItems, itemPerpage, currentActivePage){
     var pages = Math.ceil(totalItems / itemPerpage);
     console.log(pages)
     var pageInsertionNode = document.querySelector(".pageination");
     pageInsertionNode.innerHTML ="";
     for (var i=0; i<pages; i++){
        if(i+1 === currentActivePage){
             pageInsertionNode.appendChild(
                 createElement(
                     "li",
                     {class:'active'},
                     createElement("a",{href:'#' , "data-page":i+1},app.Utils.toPersianNumber(i+ 1))
                     )
                    );
                    

     } else 
     {
        pageInsertionNode.appendChild(
            createElement(
                "li",
                { },
                createElement("a",{href:'#',"data-page":i+1}, app.Utils.toPersianNumber(i+ 1))
                )
               );

     }


 }

}

function renderFilters(activeFilter){
    var filters ={

        mostViewed:'پر بازدیدترین',
        mostSold :"پر فروش ترین",
        mostFavorite:"محبوب ترین ها",
        mostExpensive:"گران ترین ها",
    };

    var filterListElement = document.querySelector('.filter-list');
    filterListElement.innerHTML = "";

    for(var key in filters){

        filterListElement.appendChild(
            createElement('li',{ class: activeFilter === key ? "active" : "",
            "data-filter":key,
        }, createElement('a', {href:"#"},filters[key]))
        );
    }
}

})();