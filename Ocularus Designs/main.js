/* Main.js */
    $(document).ready(function() {
        var delay = 0.1;
        var scWidth = 50;
        var scHeight = 50;

        for (i=1; i<8; i++) {
            var cssWidth = scWidth + "px";
            var cssHeight = scHeight + "px";
            var animation = "spin 1.5s linear " + delay + "s infinite";

            $("#logo-container").append("<div class=\"square-container\" id=\"sc" + i + "\"></div>"); 

            $("#sc" + i + " ").css({
                "width": cssWidth,
                "height": cssHeight,
                "-webkit-animation": animation,
                "-moz-animation": animation,
                "-o-animation": animation,
                "animation": animation
            });

            scWidth += 10;
            scHeight += 10;
            delay += 0.1;
        }


        var sWidth = 30;
        var sHeight = 30;

        for (i=1; i<8; i++) {
            var cssWidth = sWidth + "px";
            var cssHeight = sHeight + "px";


            $("#sc" + i + " ").append("<div class=\"square\" id=\"s" + i + "\"></div>");

            $("#s" + i + " ").css({
                "width": cssWidth,
                "height": cssHeight
            });

            sWidth += 10;
            sHeight += 10;

        }

    });
