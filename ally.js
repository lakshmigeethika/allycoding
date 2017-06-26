

$(document).ready(function(){
 var url = "";
    var data = [
  {
    "name": "Big Guy Financial",
    "apy": 0.75,
    "earnings": 376.41
  },
  {
    "name": "URBank",
    "apy": 0.87,
    "earnings": 436.89
  },
  {
    "name": "Dewey, Cheatam & Howe",
    "apy": 0.01,
    "earnings": 5.00
  },
  {
    "name": "First Onion",
    "apy": 0.01,
    "earnings": 5.00
  },
  {
    "name": "Bank of Everywhere",
    "apy": 0.01,
    "earnings": 5.00
  }
];
    
    $("#loginButton").on("click",function(){
        
        document.getElementById("loginModal").style.display = "block";
        
    });
    
    $(".close").on('click',function(){
   $(".modalDialog").css({"opacity":"0","pointer-events":"none"});
});
    
    getElementById("tableBody").hide();    
    
    for(var i=0;i<data.length;i++)
    {
//    getElementById("tableBody").hide();    
    }

    
    
});