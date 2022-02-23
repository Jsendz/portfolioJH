function toggleMobileMenu(menu) {
   menu.classList.toggle('open');
}




   var modal = document.getElementById("myModal");
   var btn = document.getElementById("myBtn");
   var span = document.getElementsByClassName("close")[0];

   btn.onclick = function() {
       modal.style.display = "block";
   }

   span.onclick = function() {
       modal.style.display = "none";
   }

   window.onclick = function(event) {
       if(event.target == modal) {
           modal.style.display = "none";
       }
   }



 
 

 function flipTouch() {
    var flipped = document.getElementsByClassName("flip-box-inner");
    if(flipped.className === "flip-box-front") {
       flipped.className += "is-flipped"
    }else {
       flipped.className = "flip-box-front";
    }
   
   };

 
 
