/* Main.js */
    $(document).ready(function() {
        var delay = 0.1;
        var scWidth = 50;
        var scHeight = 50;

        for (i=1; i<7; i++) {
            var cssWidth = scWidth + "px";
            var cssHeight = scHeight + "px";
            var spinAnimation = "spin 1.5s linear " + delay + "s infinite";

            $("#logo-container").append("<div class=\"square-container\" id=\"sc" + i + "\"></div>");

            $("#sc" + i + " ").css({
                "width": cssWidth,
                "height": cssHeight,
                "-webkit-animation": spinAnimation,
                "-moz-animation": spinAnimation,
                "-o-animation": spinAnimation,
                "animation": spinAnimation
            });

            scWidth += 15;
            scHeight += 15;
            delay += 0.1;
        }

        //var delay = 0.1;
        var sWidth = 30;
        var sHeight = 30;

        for (i=1; i<7; i++) {
            
            var cssWidth = sWidth + "px";
            var cssHeight = sHeight + "px";
            //var colorAnimation = "logo-color-change 1.5s linear " + delay + "s //infinite";

            $("#sc" + i + " ").append("<div class=\"square\" id=\"s" + i + "\"></div>");

            $("#s" + i + " ").css({
                "width": cssWidth,
                "height": cssHeight,
                //"-webkit-animation": colorAnimation,
                //"-moz-animation": colorAnimation,
                //"-o-animation": colorAnimation,
                //"animation": colorAnimation
            });

            sWidth += 10;
            sHeight += 10;

        }
        
        
        $("#company-name").hover(function() {
            $("#company-name p").css({
                "-webkit-animation": "name-color 0.3s ease-in-out 0.05s forwards" 
            });
            
            $(".bar-3, .bar-4").css({
                "-webkit-animation": "bar-color 0.3s ease-in-out 0.1s forwards" 
            });
            
            $(".bar-2, .bar-5").css({
                "-webkit-animation": "bar-color 0.3s ease-in-out 0.15s forwards" 
            }); 
            
            $(".bar-1, .bar-6").css({
                "-webkit-animation": "bar-color 0.3s ease-in-out 0.2s forwards" 
            }); 
        }, function() {
            $("#company-name p").css({
                "-webkit-animation": "" 
            });
            
            $(".bar-3, .bar-4").css({
                "-webkit-animation": "" 
            });
            
            $(".bar-2, .bar-5").css({
                "-webkit-animation": "" 
            }); 
            
            $(".bar-1, .bar-6").css({
                "-webkit-animation": "" 
            }); 
        });
        
        
        $("#about-link").click(function() {
            $("#about").css({
                "-webkit-animation": "section-in 0.5s ease-in-out forwards" 
            });
            $("#works").css({
                "-webkit-animation": "section-out 0.5s ease-in-out forwards" 
            }); 
            $("#contact").css({
                "-webkit-animation": "section-out 0.5s ease-in-out forwards" 
            }); 
        });
        
        
        $("#works-link").click(function() {
            $("#works").css({
                "-webkit-animation": "section-in 0.5s ease-in-out forwards" 
            });
            $("#about").css({
                "-webkit-animation": "section-out 0.5s ease-in-out forwards" 
            });
            $("#contact").css({
                "-webkit-animation": "section-out 0.5s ease-in-out forwards" 
            }); 
        });
        
        $("#contact-link").click(function() {
            $("#contact").css({
                "-webkit-animation": "section-in 0.5s ease-in-out forwards" 
            });
            $("#about").css({
                "-webkit-animation": "section-out 0.5s ease-in-out forwards" 
            });
            $("#works").css({
                "-webkit-animation": "section-out 0.5s ease-in-out forwards" 
            }); 
        });
        
        
        
        
        
        
        
        
        
        
        
        
        

    });
