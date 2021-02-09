(function(){

    window.app = window.app || {};

    window.app.Utils ={
      toPersianNumber:toPersianNumber
    };

    
    function toPersianNumber(value) 
    {
          if(!value || typeof value !== "number" ){

            return value;
          }  
          value = value.toString();
          var englishNumbers =["1","2","3","4","5","6","7","8","9","0"];
          var persianNumbers =["۱","۲","۳","۴","۵","۶","۷","۸","۹","۰"];

          for (var i=0 , numbersLen = englishNumbers.length ; i<numbersLen ;i++){

            value = value.replace(new RegExp(englishNumbers[i],'g'),persianNumbers[i]);
          
          };
          return value;
        }
    
})();