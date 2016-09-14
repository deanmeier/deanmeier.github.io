// Main.js 
$(document).ready(function() {
    //beginning of the slide show button animations and whatnot 
    $("#img1-to-img5-button").click(function() {
      $("#image-1").removeClass("img-in");
      $("#image-1").addClass("img-out"); 
      $("#image-5").removeClass("img-out");
      $("#image-5").addClass("img-in");
      $("#button-container-1").css("z-index", "1");
      $("#button-container-5").css("z-index", "5");
        //changes the background-color of the container
      $("#container").css("background-color","#374140");
        //makes bioshock text animate out and removes the animate in classes
      $("#image1-header").removeClass("header-in");
      $("#image1-subheader").removeClass("subheader-in");
      $("#image1-paragraph").removeClass("paragraph-in");
      $("#image1-header").addClass("header-out");
      $("#image1-subheader").addClass("subheader-out");
      $("#image1-paragraph").addClass("paragraph-out");
        //makes codepen text animate in
      $("#image5-header").removeClass("header-out");
      $("#image5-subheader").removeClass("subheader-out");
      $("#image5-paragraph").removeClass("paragraph-out");
      $("#image5-header").addClass("header-in");
      $("#image5-subheader").addClass("subheader-in");
      $("#image5-paragraph").addClass("paragraph-in");
   }); 
    $("#img1-to-img2-button").click(function() {
      $("#image-1").removeClass("img-in");
      $("#image-1").addClass("img-out"); 
      $("#image-1").css("-webkit-transform", "translateY(100%)");
      $("#image-2").removeClass("img-out");
      $("#image-2").addClass("img-in");
      $("#button-container-1").css("z-index", "1");
      $("#button-container-2").css("z-index", "5");
        //changes the background-color of the container
      $("#container").css("background-color","#241E26");
        //makes bioshock text animate out and remove the animate in classes
      $("#image1-header").removeClass("header-in");
      $("#image1-subheader").removeClass("subheader-in");
      $("#image1-paragraph").removeClass("paragraph-in");
      $("#image1-header").addClass("header-out");
      $("#image1-subheader").addClass("subheader-out");
      $("#image1-paragraph").addClass("paragraph-out");
        //makes solar system text animate in and removes the animate out classes
      $("#image2-header").removeClass("header-out");
      $("#image2-subheader").removeClass("subheader-out");
      $("#image2-paragraph").removeClass("paragraph-out");
      $("#image2-header").addClass("header-in");
      $("#image2-subheader").addClass("subheader-in");
      $("#image2-paragraph").addClass("paragraph-in");
    });
    
    
    $("#img2-to-img1-button").click(function() {
      $("#image-2").removeClass("img-in");
      $("#image-2").addClass("img-out"); 
      $("#image-1").removeClass("img-out");
      $("#image-1").addClass("img-in");
      $("#button-container-2").css("z-index", "1");
      $("#button-container-1").css("z-index", "5"); 
        //changes the background-color of the container
      $("#container").css("background-color","#12393B");
        //makes solar system text animate out
      $("#image2-header").removeClass("header-in");
      $("#image2-subheader").removeClass("subheader-in");
      $("#image2-paragraph").removeClass("paragraph-in");
      $("#image2-header").addClass("header-out");
      $("#image2-subheader").addClass("subheader-out");
      $("#image2-paragraph").addClass("paragraph-out");
        //makes bioshock text animate in
      $("#image1-header").removeClass("header-out");
      $("#image1-subheader").removeClass("subheader-out");
      $("#image1-paragraph").removeClass("paragraph-out");
      $("#image1-header").addClass("header-in");
      $("#image1-subheader").addClass("subheader-in");
      $("#image1-paragraph").addClass("paragraph-in");

        
    });
    $("#img2-to-img3-button").click(function() {
      $("#image-2").removeClass("img-in");
      $("#image-2").addClass("img-out"); 
      $("#image-3").removeClass("img-out");
      $("#image-3").addClass("img-in");
      $("#button-container-2").css("z-index", "1");
      $("#button-container-3").css("z-index", "5"); 
        //changes the background-color of the container
      $("#container").css("background-color","#9C1F30");
        //makes solar system text animate out
      $("#image2-header").removeClass("header-in");
      $("#image2-subheader").removeClass("subheader-in");
      $("#image2-paragraph").removeClass("paragraph-in");
      $("#image2-header").addClass("header-out");
      $("#image2-subheader").addClass("subheader-out");
      $("#image2-paragraph").addClass("paragraph-out");
        //makes dean's designs text animate in
      $("#image3-header").removeClass("header-out");
      $("#image3-subheader").removeClass("subheader-out");
      $("#image3-paragraph").removeClass("paragraph-out");
      $("#image3-header").addClass("header-in");
      $("#image3-subheader").addClass("subheader-in");
      $("#image3-paragraph").addClass("paragraph-in");
    });
    
    
    $("#img3-to-img2-button").click(function() {
      $("#image-3").removeClass("img-in");
      $("#image-3").addClass("img-out"); 
      $("#image-2").removeClass("img-out");
      $("#image-2").addClass("img-in");
      $("#button-container-3").css("z-index", "1");
      $("#button-container-2").css("z-index", "5"); 
        //changes the background-color of the container
      $("#container").css("background-color","#241E26");
         //makes dean's designs text animate out
      $("#image3-header").removeClass("header-in");
      $("#image3-subheader").removeClass("subheader-in");
      $("#image3-paragraph").removeClass("paragraph-in");
      $("#image3-header").addClass("header-out");
      $("#image3-subheader").addClass("subheader-out");
      $("#image3-paragraph").addClass("paragraph-out");
        //makes solar system text animate in
      $("#image2-header").removeClass("header-out");
      $("#image2-subheader").removeClass("subheader-out");
      $("#image2-paragraph").removeClass("paragraph-out");
      $("#image2-header").addClass("header-in");
      $("#image2-subheader").addClass("subheader-in");
      $("#image2-paragraph").addClass("paragraph-in");
    });
    $("#img3-to-img4-button").click(function() {
      $("#image-3").removeClass("img-in");
      $("#image-3").addClass("img-out"); 
      $("#image-4").removeClass("img-out");
      $("#image-4").addClass("img-in");
      $("#button-container-3").css("z-index", "1");
      $("#button-container-4").css("z-index", "5"); 
        //changes the background-color of the container
      $("#container").css("background-color","#77654D");
        //makes dean's designs text animate out
      $("#image3-header").removeClass("header-in");
      $("#image3-subheader").removeClass("subheader-in");
      $("#image3-paragraph").removeClass("paragraph-in");
      $("#image3-header").addClass("header-out");
      $("#image3-subheader").addClass("subheader-out");
      $("#image3-paragraph").addClass("paragraph-out");
        //makes elder scrolls text animate in
      $("#image4-header").removeClass("header-out");
      $("#image4-subheader").removeClass("subheader-out");
      $("#image4-paragraph").removeClass("paragraph-out");
      $("#image4-header").addClass("header-in");
      $("#image4-subheader").addClass("subheader-in");
      $("#image4-paragraph").addClass("paragraph-in");
    });
    
    
    $("#img4-to-img3-button").click(function() {
      $("#image-4").removeClass("img-in");
      $("#image-4").addClass("img-out"); 
      $("#image-3").removeClass("img-out");
      $("#image-3").addClass("img-in");
      $("#button-container-4").css("z-index", "1");
      $("#button-container-3").css("z-index", "5"); 
        //changes the background-color of the container
      $("#container").css("background-color","#9C1F30");
        //makes elder scrolls text animate out
      $("#image4-header").removeClass("header-in");
      $("#image4-subheader").removeClass("subheader-in");
      $("#image4-paragraph").removeClass("paragraph-in");
      $("#image4-header").addClass("header-out");
      $("#image4-subheader").addClass("subheader-out");
      $("#image4-paragraph").addClass("paragraph-out");
        //makes dean's designs text animate in
      $("#image3-header").removeClass("header-out");
      $("#image3-subheader").removeClass("subheader-out");
      $("#image3-paragraph").removeClass("paragraph-out");
      $("#image3-header").addClass("header-in");
      $("#image3-subheader").addClass("subheader-in");
      $("#image3-paragraph").addClass("paragraph-in");
    });
    $("#img4-to-img5-button").click(function() {
      $("#image-4").removeClass("img-in");
      $("#image-4").addClass("img-out"); 
      $("#image-5").removeClass("img-out");
      $("#image-5").addClass("img-in");
      $("#button-container-4").css("z-index", "1");
      $("#button-container-5").css("z-index", "5");
        //changes the background-color of the container
      $("#container").css("background-color","#374140");
        //makes elder scrolls text animate out
      $("#image4-header").removeClass("header-in");
      $("#image4-subheader").removeClass("subheader-in");
      $("#image4-paragraph").removeClass("paragraph-in");
      $("#image4-header").addClass("header-out");
      $("#image4-subheader").addClass("subheader-out");
      $("#image4-paragraph").addClass("paragraph-out");
        //makes codepen text animate in
      $("#image5-header").removeClass("header-out");
      $("#image5-subheader").removeClass("subheader-out");
      $("#image5-paragraph").removeClass("paragraph-out");
      $("#image5-header").addClass("header-in");
      $("#image5-subheader").addClass("subheader-in");
      $("#image5-paragraph").addClass("paragraph-in");
    });
    
    
    $("#img5-to-img4-button").click(function() {
      $("#image-5").removeClass("img-in");
      $("#image-5").addClass("img-out"); 
      $("#image-4").removeClass("img-out");
      $("#image-4").addClass("img-in");
      $("#button-container-5").css("z-index", "1");
      $("#button-container-4").css("z-index", "5");
        //changes the background-color of the container
      $("#container").css("background-color","#77654D");
        //makes codepen text animate out
      $("#image5-header").removeClass("header-in");
      $("#image5-subheader").removeClass("subheader-in");
      $("#image5-paragraph").removeClass("paragraph-in");
      $("#image5-header").addClass("header-out");
      $("#image5-subheader").addClass("subheader-out");
      $("#image5-paragraph").addClass("paragraph-out");
        //makes codepen text animate in
      $("#image4-header").removeClass("header-out");
      $("#image4-subheader").removeClass("subheader-out");
      $("#image4-paragraph").removeClass("paragraph-out");
      $("#image4-header").addClass("header-in");
      $("#image4-subheader").addClass("subheader-in");
      $("#image4-paragraph").addClass("paragraph-in");
    });
    $("#img5-to-img1-button").click(function() {
      $("#image-5").removeClass("img-in");
      $("#image-5").addClass("img-out"); 
      $("#image-1").removeClass("img-out");
      $("#image-1").addClass("img-in");
      $("#image-1").css("-webkit-transform", "translateY(100%)");
      $("#button-container-5").css("z-index", "1");
      $("#button-container-1").css("z-index", "5"); 
        //changes the background-color of the container
      $("#container").css("background-color","#12393B");
        //makes codepen text animate out
      $("#image5-header").removeClass("header-in");
      $("#image5-subheader").removeClass("subheader-in");
      $("#image5-paragraph").removeClass("paragraph-in");
      $("#image5-header").addClass("header-out");
      $("#image5-subheader").addClass("subheader-out");
      $("#image5-paragraph").addClass("paragraph-out");
        //makes bioshock text animate in
      $("#image1-header").removeClass("header-out");
      $("#image1-subheader").removeClass("subheader-out");
      $("#image1-paragraph").removeClass("paragraph-out");
      $("#image1-header").addClass("header-in");
      $("#image1-subheader").addClass("subheader-in");
      $("#image1-paragraph").addClass("paragraph-in");
    });
    
    
    $("#img1").click(function() {
       $("#vid1").css("visibility", "inherit");
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
});