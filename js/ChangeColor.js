
       var vid = document.getElementById("myVideo");
var iLastTime = 0;
var iTime = 0;
var iTotal = 0;
var iKeys = 0;
var total = 0;
function checkSpeed() {

    iTime = new Date().getTime();
    if (iLastTime != 0) {
        iKeys++;
        iTotal += iTime - iLastTime;
        total = Math.round(iKeys / iTotal * 6000);
    }
    iLastTime = iTime;
    
    
    //calm
    if (total < 21 ) {
        
        document.getElementById("navFeel").style.borderColor = " hsl(195, 87%, 54%)";
        vid.playbackRate = 1;
    }

    if (total < 22 || !total >23) {
       
        document.getElementById("navFeel").style.borderColor = "hsl(195, 87%, 54%)" + total
        vid.playbackRate = 1;
    }
         
    if (total < 23) {
        
        document.getElementById("navFeel").style.borderColor = "#6bc6e1"
        vid.playbackRate =1;
    }


    if (total  >24 ||total <27 ) {
     
        document.getElementById("navFeel").style.borderColor = "hsl(195, 87%, 54%)"
        vid.playbackRate = 1;
    }

    //positive
    if (total >= 25 || !total >= 30) {
        
        document.getElementById("navFeel").style.borderColor = "#449d" + total
        vid.playbackRate = 2;
                
    }

    //positive
    if (total >= 28 || !total >= 30) {
      
        document.getElementById("navFeel").style.borderColor = "#499349 "
        vid.playbackRate = 2;
    }

    //positive
    if (total >= 29 || !total >= 30) {
        
        document.getElementById("navFeel").style.borderColor = "#408040 "
        vid.playbackRate = 3;
    }
    //angry
    if (total >= 30 )
    {
       
        document.getElementById("navFeel").style.borderColor = "#c930" + total;
        vid.playbackRate = 4;
    }

    if (total >= 32) {
         
        document.getElementById("navFeel").style.borderColor = "#c34a47";
        vid.playbackRate = 4;
    }


    if (total >= 33) {
        
        document.getElementById("navFeel").style.borderColor = "#ad423f";
        vid.playbackRate = 4;
    }


    if (total >= 35) {
         
        document.getElementById("navFeel").style.borderColor = "#973a37";
        vid.playbackRate = 4;
    }
           

    if (total >= 37) {
        
        document.getElementById("navFeel").style.borderColor = "#82312f";
               
    }

    if (total >= 39) {
         
        document.getElementById("navFeel").style.borderColor = "#6c2927";
             
    }


    if (total >=41) {
         
        document.getElementById("navFeel").style.borderColor = "red";
               
    }


    if (total >= 44) {
        
        document.getElementById("navFeel").style.borderColor = "darkred";
               
    }

}


